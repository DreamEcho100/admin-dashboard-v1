import { createTRPCRouter, protectedUsersOnlyProcedure } from "../../trpc";

export const salesRouter = createTRPCRouter({
  getOverallStat: protectedUsersOnlyProcedure.query(async ({ ctx }) => {
    const overallStat = await ctx.prisma.overallStats.findMany({
      include: {
        dailyData: true,
        monthlyData: true,
        SalesByCategory: true,
      },
    });

    return overallStat;
  }),
});
