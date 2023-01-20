import { Months } from "@prisma/client";

import { z } from "zod";

import { createTRPCRouter, protectedUsersOnlyProcedure } from "../../trpc";

export const generalRouter = createTRPCRouter({
  getUser: protectedUsersOnlyProcedure
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
        },
        where: { id: input.id },
      });

      return user;
    }),
  getDashboardStats: protectedUsersOnlyProcedure.query(async ({ ctx }) => {
    // hardcoded values
    const currentMonth = Months.november;
    const currentYear = 2021;
    const currentDay = new Date("2021-11-15");

    const overallStat = await ctx.prisma.overallStats.findFirstOrThrow({
      include: {
        dailyData: { take: 50, where: { date: currentDay } },
        monthlyData: { take: 50, where: { month: currentMonth } },
        SalesByCategory: { take: 50 },
      },
      where: { year: currentYear },
      take: 50,
    });

    return overallStat;
  }),
});
