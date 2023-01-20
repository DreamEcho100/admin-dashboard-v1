import type { Category, Product, User, Prisma } from "@prisma/client";
import { Months } from "@prisma/client";

import fs from "fs";

import path from "path";

import bcrypt from "bcrypt";

import {
  dataUser,
  dataProduct,
  dataAffiliateStat,
  dataTransaction,
  dataProductStat,
  dataOverallStat,
} from "../../src/utils/data/dummy";

import type { TPrisma } from ".";

import { getCountryISO2To3 } from "./utils/country-iso-2-to-3";

const isAValidMonth = (month: unknown): month is Months =>
  typeof month === "string" && !!(month in Months);

const writeDummyDataFile = async ({
  fileName,
  prismaTypes,
  varItemType,
  data,
  customTopLevelImports = "",
}: {
  customTopLevelImports?: string;
  fileName: string;
  prismaTypes?: string;
  varItemType: string;
  data: unknown; // Record<string, unknown>[] | Record<string, unknown>;
}) => {
  const filePath = path.join(
    process.cwd(),
    `./prisma/seed/dummyData/${fileName}.ts`
  );

  return await new Promise((resolve, reject) => {
    fs.writeFile(
      filePath,
      `${
        prismaTypes
          ? `import type { ${prismaTypes} } from "@prisma/client";`
          : ""
      }${customTopLevelImports}

const ${fileName}DummyData: ${varItemType}[] = ${JSON.stringify(data, null, 2)};

export default ${fileName}DummyData;
`,
      (err) => {
        if (err) {
          console.error(err);
          reject(null);
          return;
        }
        resolve(null);
        console.log(`Data written to ${filePath}`);
      }
    );
  });
};

const getDaysInMilliseconds = (day: number) => day * 1000 * 24 * 60 * 60;

const formatUserAndUserProfileDummyData = async () => {
  const salt = bcrypt.genSaltSync(10);

  const users: Omit<User, "createdAt" | "emailVerified" | "image">[] = [];
  const usersProfiles: Parameters<TPrisma["userProfile"]["create"]>["0"][] = [];
  const countries: Parameters<TPrisma["country"]["create"]>["0"][] = [];
  const country_users_counter_Map: Record<string, number> = {};

  dataUser.forEach(
    (
      {
        _id,
        city,
        country,
        email,
        name,
        occupation,
        password,
        phoneNumber,
        role,
        state,
      },
      index
    ) => {
      const countryISO3 = getCountryISO2To3(country);
      if (!countryISO3) return;

      country_users_counter_Map[countryISO3] =
        (country_users_counter_Map[countryISO3] || 0) + 1;

      usersProfiles.push({
        data: {
          city,
          country: countryISO3,
          occupation,
          phoneNumber,
          state,
          userId: _id,
          createdAt: new Date(
            new Date("2021-12-30").getTime() -
              getDaysInMilliseconds(365 + index)
          ),
        },
      });
      users.push({
        id: _id,
        email,
        name,
        password: bcrypt.hashSync(password, salt),
        role,
      });
    }
  );

  Object.entries(country_users_counter_Map).forEach((item) => {
    countries.push({
      data: {
        name: item[0],
        stats: { create: { users: item[1] } },
      },
    });
  });

  await writeDummyDataFile({
    data: users,
    prismaTypes: "User",
    varItemType: 'Omit<User, "createdAt" | "emailVerified" | "image">',
    fileName: "users",
  });
  await writeDummyDataFile({
    data: usersProfiles,
    customTopLevelImports: "import type { TPrisma } from '../index';",
    varItemType: 'Parameters<TPrisma["userProfile"]["create"]>["0"]',
    fileName: "usersProfiles",
  });
  await writeDummyDataFile({
    data: countries,
    customTopLevelImports: "import type { TPrisma } from '../index';",
    varItemType: 'Parameters<TPrisma["country"]["create"]>["0"]',
    fileName: "countries",
  });

  return;
};
const formatProductsAndCategoriesData = async () => {
  const products: Product[] = [];
  const categories: Category[] = [];
  const categories_MAP: Record<string, number> = {};

  dataProduct.forEach(({ _id, ...item }, index) => {
    const categoryName = item.category.trim();
    const temp = categories_MAP[categoryName];
    const tempCategories =
      typeof temp === "number" ? categories[temp] : undefined;
    if (!tempCategories) {
      categories_MAP[categoryName] =
        categories.push({
          name: categoryName,
          count: 1,
        }) - 1;
    } else {
      tempCategories.count++;
    }
    products.push({
      ...item,
      id: _id,
      createdAt: new Date(
        new Date("2021-12-30").getTime() - getDaysInMilliseconds(365 + index)
      ),
      updatedAt: null,
    });
  });

  await writeDummyDataFile({
    data: products,
    prismaTypes: "Product",
    varItemType: "Product",
    fileName: "products",
  }).then(
    async () =>
      await writeDummyDataFile({
        data: categories,
        prismaTypes: "Category",
        varItemType: "Category",
        fileName: "categories",
      })
  );
};
const formatProductsStatsData = async () => {
  const productsStats: Parameters<TPrisma["product"]["update"]>["0"][] = [];

  const handleDailyData = (
    items: (typeof dataProductStat)["0"]["dailyData"]
  ) => {
    const dailyData:
      | Prisma.ProductStatDailyCreateNestedManyWithoutProductStatInput
      | Prisma.ProductStatDailyUncheckedCreateNestedManyWithoutProductStatInput
      | undefined = {
      createMany: {
        data: [],
        skipDuplicates: true,
      },
    };
    const ProductStatIdAndDay_Exist_Map: Record<string, true> = {};

    if (!dailyData.createMany || !Array.isArray(dailyData.createMany.data))
      throw new Error(
        "dailyData.createMany is undefined or dailyData.createMany.data is not an array"
      );

    let i = 0;
    let element: (typeof items)["0"] | undefined;
    for (; i < items.length; i++) {
      element = items[i];
      if (element && ProductStatIdAndDay_Exist_Map[`${element.date}`]) {
        dailyData.createMany.data.push({
          totalSales: element.totalSales,
          totalUnits: element.totalUnits,
          day: new Date(element.date).getDate(),
          date: new Date(element.date).toISOString(),
          updatedAt: null,
        });

        ProductStatIdAndDay_Exist_Map[`${element.date}`] = true;
      }
    }

    return dailyData;
  };

  dataProductStat.forEach(
    (
      {
        _id,
        dailyData,
        monthlyData,
        productId,
        yearlySalesTotal,
        yearlyTotalSoldUnits,
      },
      index
    ) => {
      productsStats.push({
        where: { id: productId },
        data: {
          stats: {
            create: {
              id: _id,
              year: 2021,
              yearlySalesTotal,
              yearlyTotalSoldUnits,
              updatedAt: null,
              createdAt: new Date(
                new Date("2021-12-30").getTime() -
                  getDaysInMilliseconds(365 + index)
              ),
              monthlyData: {
                createMany: {
                  data: monthlyData.map(
                    ({ month, totalSales, totalUnits }) => ({
                      totalSales,
                      totalUnits,
                      month: isAValidMonth(month) ? month : Months.january,
                      // createdAt: new Date(new Date('2021-12-30').getTime() - getDaysInMilliseconds(365 + index)),
                      updatedAt: null,
                    })
                  ),
                  skipDuplicates: true,
                },
              },
              dailyData: handleDailyData(dailyData),
            },
          },
        },
      });
    }
  );

  await writeDummyDataFile({
    data: productsStats,
    customTopLevelImports: "import type { TPrisma } from '../index';",
    varItemType: 'Parameters<TPrisma["product"]["update"]>["0"]',
    fileName: "productsStats",
  });
};
const formatTransactionAndAffiliateStatDummyData = async () => {
  type UserCreate = {
    data: Pick<
      Parameters<TPrisma["user"]["update"]>["0"]["data"],
      "AffiliateStat" | "transactions"
    >;
    where: Parameters<TPrisma["user"]["update"]>["0"]["where"];
  };

  const userId_exist_Map = Object.fromEntries(
    dataUser.map((user) => [user._id, true] as const)
  );
  const users_affiliateStats_MAP: Record<string, UserCreate> = {};
  const products_exist_Map = Object.fromEntries(
    dataProduct.map((user) => [user._id, true] as const)
  );
  const userId_found_Map: Record<string, true> = {};
  const transactionId_transaction_Map = Object.fromEntries(
    Object.values(dataTransaction).map((item) => [item._id, item])
  );

  dataTransaction.forEach((transaction) => {
    if (!userId_exist_Map[transaction.userId]) return;

    transactionId_transaction_Map[transaction._id] = transaction;
  });

  dataAffiliateStat.forEach(({ _id, userId, affiliateSales }, index) => {
    if (!userId_exist_Map[userId] || userId_found_Map[userId]) return;

    users_affiliateStats_MAP[userId] = {
      data: {
        AffiliateStat: {
          create: {
            affiliateSalesCount: affiliateSales.length,
            id: _id,
            createdAt: new Date(
              new Date("2021-12-30").getTime() -
                getDaysInMilliseconds(365 + index + affiliateSales.length)
            ),
            affiliateSales: {
              connectOrCreate: [...new Set(affiliateSales)]
                .filter((item) => transactionId_transaction_Map[item])
                .map((item) => {
                  const transaction = transactionId_transaction_Map[item]!;

                  return {
                    create: {
                      id: transaction._id,
                      cost: transaction?.cost,
                      productsCount: transaction.products.length,
                      createdAt: new Date(
                        new Date("2021-12-30").getTime() -
                          getDaysInMilliseconds(
                            Math.floor(
                              (1 - index / dataTransaction.length) * 365
                            )
                          )
                      ),
                      products: {
                        connect: transaction.products
                          .filter((item) => products_exist_Map[item])
                          .map((productId) => ({ id: productId })),
                      },
                      User: {
                        connect: {
                          id: transaction.userId,
                        },
                      },
                    },
                    where: {
                      id: item,
                    },
                  };
                }),
            },
          },
        },
      },
      where: { id: userId },
    };

    userId_found_Map[userId] = true;
  });

  return await writeDummyDataFile({
    data: Object.values(users_affiliateStats_MAP),
    customTopLevelImports: "import type { TPrisma } from '../index';",
    varItemType: 'Parameters<TPrisma["user"]["update"]>["0"]',
    fileName: "users_affiliateStats",
  });
};
const formatOverallStatsData = async () => {
  const overallStats: Parameters<TPrisma["overallStats"]["create"]>["0"][] = [];

  dataOverallStat.forEach(
    ({
      _id,
      createdAt,
      dailyData,
      monthlyData,
      salesByCategory,
      totalCustomers,
      updatedAt,
      year,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
    }) => {
      overallStats.push({
        data: {
          id: _id,
          totalCustomers,
          year,
          yearlySalesTotal,
          yearlyTotalSoldUnits,
          createdAt: new Date(createdAt),
          updatedAt: new Date(updatedAt),
          dailyData: {
            createMany: {
              data: dailyData.map(({ date, totalSales, totalUnits }) => ({
                day: new Date(date).getDate(),
                date: new Date(date).toISOString(),
                totalSales,
                totalUnits,
                updatedAt: null,
              })),
            },
          },
          monthlyData: {
            createMany: {
              data: monthlyData.map(
                ({ _id, month, totalSales, totalUnits }) => ({
                  id: _id,
                  month: isAValidMonth(month) ? month : Months.january,
                  totalSales,
                  totalUnits,
                  updatedAt: null,
                })
              ),
            },
          },
          SalesByCategory: {
            create: Object.entries(salesByCategory).map((item) => ({
              Category: { connect: { name: item[0] } },
              count: item[1],
            })),
          },
        },
      });
    }
  );

  await writeDummyDataFile({
    data: overallStats,
    customTopLevelImports: "import type { TPrisma } from '../index';",
    varItemType: 'Parameters<TPrisma["overallStats"]["create"]>["0"]',
    fileName: "overallStats",
  });
};

export const formatAllDummyData = async () => {
  await formatUserAndUserProfileDummyData();
  await formatProductsAndCategoriesData();
  await formatProductsStatsData();
  await formatTransactionAndAffiliateStatDummyData();
  await formatOverallStatsData();
};
