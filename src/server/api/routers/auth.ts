import bcrypt from "bcrypt";

import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),

        city: z.string(),
        country: z.string(),
        occupation: z.string(),
        phoneNumber: z.string(),
        state: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const salt = bcrypt.genSaltSync(10);

      // Hash the password
      const hashedPassword = bcrypt.hashSync(input.password, salt);

      await ctx.prisma.user.create({
        data: {
          email: input?.email,
          password: hashedPassword,
          profile: {
            create: {
              city: input.city,
              country: input.country,
              occupation: input.occupation,
              phoneNumber: input.phoneNumber,
              state: input.state,
            },
          },
        },
        select: null,
      });
    }),

  completeProfile: protectedProcedure.query(() => {
    // return "you can now see this secret message!";
  }),
});
