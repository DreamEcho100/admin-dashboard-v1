import { UserRole } from "@prisma/client";

import { z } from "zod";

import { createTRPCRouter, protectedUsersOnlyProcedure } from "../../trpc";

export const managementRouter = createTRPCRouter({
  getAdmins: protectedUsersOnlyProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findFirstOrThrow({
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        image: true,
        role: true,
        createdAt: true,
        profile: true,
      },
      where: { role: UserRole.admin },
    });

    return user;
  }),
  getUserPerformance: protectedUsersOnlyProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findFirstOrThrow({
        select: {
          id: true,
          name: true,
          email: true,
          emailVerified: true,
          image: true,
          role: true,
          createdAt: true,
          profile: true,
          AffiliateStat: { include: { affiliateSales: true } },
        },
        where: { id: input.id },
      });

      return user;
    }),
});
