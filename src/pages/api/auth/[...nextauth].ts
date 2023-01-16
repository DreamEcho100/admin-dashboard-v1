import { PrismaAdapter } from "@next-auth/prisma-adapter";

import type { SafeParseError, ZodFormattedError } from "zod";

import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";

import { z } from "zod";

import bcrypt from "bcrypt";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     */
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(_credentials, req) {
        const input = z
          .object({
            email: z.string().email(),
            password: z.string().min(8),
          })
          .safeParse(_credentials);

        const isZodFormattedError = <T>(
          item: unknown
        ): item is ZodFormattedError<T> =>
          !!(
            typeof item === "object" &&
            item &&
            "_errors" in item &&
            item._errors
          );

        const handleValue = (item: unknown): string[] => {
          const defaultError = "Something went wrong, please try again!";

          return isZodFormattedError(item)
            ? item._errors
            : Array.isArray(item)
            ? item.map((subItem) =>
                Array.isArray(subItem) && isZodFormattedError(subItem)
                  ? handleValue(subItem).join(", ")
                  : typeof subItem === "string"
                  ? subItem
                  : defaultError
              )
            : [defaultError];
        };

        const formatSafeParsedZodError = <Input>(
          input: SafeParseError<Input>
        ) => {
          throw new Error(
            Object.entries(input.error.format())
              .filter((item) => item[0] !== "_errors")
              .map((item) => {
                isZodFormattedError(item[1])
                  ? item[1]._errors.join(", ")
                  : Array.isArray(item[1])
                  ? item[1].join(", ")
                  : "Something went wrong!";
              })
              .join("\n")
          );
        };

        if (!input.success)
          throw new Error(
            Object.entries(input.error.format())
              .filter((item) => item[0] !== "_errors")
              .map(
                (item) =>
                  `[${item[0]}]: ${
                    Array.isArray(item[1])
                      ? item[1][0] || "Something went wrong!"
                      : item[1]._errors.join(", ") || "Something went wrong!"
                  }`
              )
              .join("\n")
          );

        const credentials = input.data;

        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        const user = await prisma.user
          .findFirstOrThrow({
            where: { email: credentials.email },
          })
          .catch((err) => {
            throw new Error(
              `Incorrect email! \nAdditional info: ${
                err instanceof Error ? err.message : ""
              }`
            );
          });

        if (!bcrypt.compareSync(credentials.password, user.password))
          throw new Error("Incorrect password!");

        // If no error and we have user data, return it
        return user;
      },
    }),
  ],
};

export default NextAuth(authOptions);

/*
const getFixedErrors = (errors) => {
  const fixedErrors = {}
  Object.entries(errors).forEach(([errorKey, error]) => {
    const fixedError = error
    if (error.type === "invalid_union") {
      const [type, message] = Object.entries(error.types).find(
        ([messageKey]) => messageKey !== "invalid_union"
      )
      fixedError.message = Array.isArray(message) ? message[0] : message
      fixedError.type = type
    }
    fixedErrors[errorKey] = fixedError
  })
  return fixedErrors
}
// https://stackoverflow.com/questions/74311918/zod-validation-for-text-editor-values
*/
