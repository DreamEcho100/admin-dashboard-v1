import type { UserRole } from "@prisma/client";

import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
      role: UserRole | null;
    } & DefaultSession["user"];
  }
  interface User {
    role: UserRole | null;
  }
  interface JWT {
    user: User;
  }
}
