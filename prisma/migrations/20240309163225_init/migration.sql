-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateut" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomType" (
    "RoomType_Id" INTEGER NOT NULL,
    "RoomType_name" TEXT NOT NULL,
    "RoomType_size" TEXT NOT NULL,
    "RoomType_bed" INTEGER NOT NULL,
    "RoomType_guest" INTEGER NOT NULL,
    "RoomPrice" INTEGER NOT NULL,
    "DefalutRoomPrice" INTEGER NOT NULL,
    "RoomTypeDescrip" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Role" (
    "Role_Id" INTEGER NOT NULL,
    "Role_Title" TEXT NOT NULL,
    "Role_Des" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Employee" (
    "Employee_Id" INTEGER NOT NULL,
    "Emfname" TEXT NOT NULL,
    "Emlname" TEXT NOT NULL,
    "Gender" TEXT NOT NULL,
    "PhoneNo" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Salary" DOUBLE PRECISION NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "RoomType_RoomType_Id_key" ON "RoomType"("RoomType_Id");

-- CreateIndex
CREATE UNIQUE INDEX "Role_Role_Id_key" ON "Role"("Role_Id");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_Employee_Id_key" ON "Employee"("Employee_Id");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_Email_key" ON "Employee"("Email");
