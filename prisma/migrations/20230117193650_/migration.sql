-- CreateTable
CREATE TABLE "Country" (
    "name" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "CountryStats" (
    "countryName" TEXT NOT NULL,
    "users" INTEGER NOT NULL,

    CONSTRAINT "CountryStats_pkey" PRIMARY KEY ("countryName")
);

-- AddForeignKey
ALTER TABLE "CountryStats" ADD CONSTRAINT "CountryStats_countryName_fkey" FOREIGN KEY ("countryName") REFERENCES "Country"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_country_fkey" FOREIGN KEY ("country") REFERENCES "Country"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
