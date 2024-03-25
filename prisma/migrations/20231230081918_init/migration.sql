-- CreateTable
CREATE TABLE "BranchesRU" (
    "id_branches" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "Chief" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "BranchesRU_pkey" PRIMARY KEY ("id_branches")
);

-- CreateTable
CREATE TABLE "BranchesUZ" (
    "id_branches" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "Chief" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "BranchesUZ_pkey" PRIMARY KEY ("id_branches")
);

-- CreateTable
CREATE TABLE "BranchesEN" (
    "id_branches" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "Chief" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "BranchesEN_pkey" PRIMARY KEY ("id_branches")
);

-- CreateTable
CREATE TABLE "PhoneBranche" (
    "id_phone" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "PhoneBranche_pkey" PRIMARY KEY ("id_phone")
);

-- CreateTable
CREATE TABLE "Free_seats" (
    "id_seat" SERIAL NOT NULL,
    "free" INTEGER NOT NULL,
    "all_seat" INTEGER NOT NULL,

    CONSTRAINT "Free_seats_pkey" PRIMARY KEY ("id_seat")
);

-- AddForeignKey
ALTER TABLE "BranchesRU" ADD CONSTRAINT "BranchesRU_id_branches_fkey" FOREIGN KEY ("id_branches") REFERENCES "PhoneBranche"("id_phone") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BranchesUZ" ADD CONSTRAINT "BranchesUZ_id_branches_fkey" FOREIGN KEY ("id_branches") REFERENCES "PhoneBranche"("id_phone") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BranchesEN" ADD CONSTRAINT "BranchesEN_id_branches_fkey" FOREIGN KEY ("id_branches") REFERENCES "PhoneBranche"("id_phone") ON DELETE RESTRICT ON UPDATE CASCADE;
