import { UserRole } from "@prisma/client";

import {
  createTRPCRouter,
  protectedUsersOnlyProcedure,
} from "@server/api/trpc";

import { z } from "zod";

const productsClientsRouter = createTRPCRouter({
  getMany: protectedUsersOnlyProcedure.query(async ({ ctx }) => {
    const products = await ctx.prisma.product.findMany({
      include: {
        stats: {
          include: {
            dailyData: true,
            monthlyData: true,
          },
        },
      },
    });

    return products;
  }),
});
const customersClientsRouter = createTRPCRouter({
  getMany: protectedUsersOnlyProcedure.query(async ({ ctx }) => {
    const customers = await ctx.prisma.user.findMany({
      select: {
        createdAt: true,
        email: true,
        id: true,
        emailVerified: true,
        image: true,
        name: true,
        role: true,
        profile: true,
      },
      where: { role: UserRole.user },
    });

    return customers;
  }),
});
const transactionsClientsRouter = createTRPCRouter({
  getMany: protectedUsersOnlyProcedure
    .input(
      z.object({
        cursor: z.date().optional(),
        size: z.literal(10).or(z.literal(100)).optional().default(10),
        cost: z.number().optional(),
        userId: z.string().optional(),
        orderByCursor: z
          .literal("asc")
          .or(z.literal("desc"))
          .optional()
          .default("desc"),
        orderByCost: z.literal("asc").or(z.literal("desc")).optional(),
        orderByProductsCount: z.literal("asc").or(z.literal("desc")).optional(),
      })
      // .optional()
    )
    .query(async ({ ctx, input }) => {
      const transactions = await ctx.prisma.transaction.findMany({
        where: {
          createdAt: { lte: input.cursor },
          cost: { equals: input.cost },
          userId: { contains: input.userId },
        },
        take: input.size + 1,
        orderBy: {
          createdAt: input.orderByCursor,
          cost: input.orderByCost,
          productsCount: input.orderByProductsCount,
        },
      });

      let isLastPage = false;
      const nextCursor = transactions.pop()?.createdAt;
      if (transactions.length < input.size) {
        isLastPage = true;
      }

      return {
        data: transactions,
        isLastPage,
        nextCursor,
      };
    }),
});
const geographyClientsRouter = createTRPCRouter({
  getMany: protectedUsersOnlyProcedure.query(
    async ({ ctx }) => await ctx.prisma.countryStats.findMany()
  ),
});

export const clientsRouter = createTRPCRouter({
  products: productsClientsRouter,
  customers: customersClientsRouter,
  transactions: transactionsClientsRouter,
  geography: geographyClientsRouter,
});
