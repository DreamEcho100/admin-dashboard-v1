import { PrismaClient } from "@prisma/client";

import {
  usersDummyData,
  usersProfilesDummyData,
  categoriesDummyData,
  productsDummyData,
  productsStatsDummyData,
  users_affiliateStatsDummyData,
  users_transactionDummyData,
  overallStatsDummyData,
  countriesDummyData,
} from "./dummyData";
import { formatAllDummyData } from "./formattingDummyData";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn", "info"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export type TPrisma = typeof prisma;

const deletingCountriesUsersAndUsersProfile = async () => {
  console.log("Deleting 'UserProfile' table");
  await prisma.userProfile.deleteMany();
  console.log("Deleting 'User' table");
  await prisma.user.deleteMany();
  console.log("Deleting 'Country Stats' table");
  await prisma.countryStats.deleteMany();
  console.log("Deleting 'Country' table");
  await prisma.country.deleteMany();
};
const seedingCountriesUsersAndUsersProfile = async () => {
  countriesDummyData;
  console.log("Seeding countries data start!");
  // await prisma.user.createMany({ data: countriesDummyData });
  await prisma.$transaction(
    countriesDummyData.map((country) => prisma.country.create(country))
  );
  console.log("Seeding countries data End!");

  console.log("Seeding users data start!");
  await prisma.user.createMany({ data: usersDummyData });
  console.log("Seeding users data End!");

  console.log("Seeding users profiles data start!");
  await prisma.$transaction(
    usersProfilesDummyData.map((userProfile) =>
      prisma.userProfile.create(userProfile)
    )
  );
  console.log("Seeding users profiles data end!");
};

const deletingProductsAndCategories = async () => {
  console.log("Deleting 'Product' table");
  await prisma.product.deleteMany();
  console.log("Deleting 'Category' table");
  await prisma.category.deleteMany();
};
const seedingProductsAndCategories = async () => {
  console.log("Seeding Categories data start!");
  await prisma.category.createMany({
    data: categoriesDummyData,
  });
  console.log("Seeding Categories data End!");

  console.log("Seeding Products data start!");
  await prisma.product.createMany({
    data: productsDummyData,
  });
  console.log("Seeding Products data End!");
};

const deletingProductsStats = async () => {
  console.log("Deleting 'ProductStatDaily' table");
  await prisma.productStatDaily.deleteMany();
  console.log("Deleting 'ProductStatMonthly' table");
  await prisma.productStatMonthly.deleteMany();
  console.log("Deleting 'ProductStat' table");
  await prisma.productStat.deleteMany();
};
const seedingProductsStats = async () => {
  await deletingProductsStats();

  console.log("Seeding Products Stats data start!");
  await prisma.$transaction(
    productsStatsDummyData.map((item) => prisma.product.update(item))
  );
  console.log("Seeding Products Stats data End!");
};

const deletingAffiliateSalesAndAffiliateStatsAndTransactions = async () => {
  console.log("Deleting 'Transaction' table");
  await prisma.transaction.deleteMany();

  console.log("Deleting 'AffiliateStat' table");
  await prisma.affiliateStat.deleteMany();
};
const seedingAffiliateSalesAndAffiliateStatsAndTransactions = async () => {
  console.log("Seeding users_transaction data start!");
  await prisma.$transaction(
    users_transactionDummyData.map((item) => prisma.user.update(item))
  );
  console.log("Seeding users_transaction data End!");

  console.log("Seeding users_affiliateStats data start!");
  await prisma.$transaction(
    users_affiliateStatsDummyData.map((item) => prisma.user.update(item))
  );
  console.log("Seeding users_affiliateStats data End!");
};

const deletingOverallStats = async () => {
  console.log("Deleting 'SalesByCategory' table");
  await prisma.salesByCategory.deleteMany();
  console.log("Deleting 'OverallStatDaily' table");
  await prisma.overallStatsDaily.deleteMany();
  console.log("Deleting 'OverallStatMonthly' table");
  await prisma.overallStatsMonthly.deleteMany();
  console.log("Deleting 'OverallStat' table");
  await prisma.overallStats.deleteMany();
};
const seedingOverallStats = async () => {
  console.log("Seeding Products Stats data start!");
  await prisma.$transaction(
    overallStatsDummyData.map((item) => prisma.overallStats.create(item))
  );
  console.log("Seeding Products Stats data End!");
};

const deleteAll = async () => {
  await deletingOverallStats();
  await deletingAffiliateSalesAndAffiliateStatsAndTransactions();
  await deletingProductsStats();
  await deletingProductsAndCategories();
  await deletingCountriesUsersAndUsersProfile();
};

const seedAll = async () => {
  await deleteAll();
  await seedingCountriesUsersAndUsersProfile();
  await seedingProductsAndCategories();
  await seedingProductsStats();
  await seedingAffiliateSalesAndAffiliateStatsAndTransactions();
  await seedingOverallStats();
};

await formatAllDummyData();
await seedAll();

/*
enum PARTNER_PERMISSIONS {
  viewPartnerTable = "viewPartnerTable",
  createPartner = "createPartner",
  editPartnerInfo = "editPartnerInfo",
  viewPartnerDetails = "viewPartnerDetails",
  viewPartnerStatistics = "viewPartnerStatistics",
  seePartnerClients = "seePartnerClients",
  addClientToPartner = "addClientToPartner",
}
*/

/*
type EnumFromArray<T extends readonly string[]> = { [key in T[number]]: key }

const partnerPermissions = [
	"viewPartnerTable",
	"createPartner",
	"editPartnerInfo",
	"viewPartnerDetails",
	"viewPartnerStatistics",
	"seePartnerClients",
	"addClientToPartner",
] as const;

type PARTNER_PERMISSIONS = EnumFromArray<typeof partnerPermissions>

const tttt = {} as PARTNER_PERMISSIONS;

tttt.;
*/
