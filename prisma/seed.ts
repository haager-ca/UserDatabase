import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log(`Start seeding ...`)

    const user = await prisma.user.create({
      data: {
        firstName: "Caius",
        lastName: "Haager",
        email: "caius.haager@icloud.com",
        adress: "Dekan-Fischer-Str. ",
        birthDate: new Date('2008-08-26T00:00:00Z'),
        houseN: 17,
        city:   "Durach",
        description: "Admin of this Database",
        properties: "Entspannt, Intelliegent"
        },
    });

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })