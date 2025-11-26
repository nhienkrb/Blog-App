import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
    await prisma.user.createMany({
        data:[{
            name:"Alice",email: "alice@gmail.com",password: "123"
        }]
    })
}
seed().then(()=>prisma.$disconnect());