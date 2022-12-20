import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


async function main() {

    const createCurriculum = await prisma.curriculum.createMany({
        data:[
            {title: "JLPT N5", description: "test"},
            {title: "Japanese Fundamentals", description: "test"}
        ]
    });
    
    console.log("curriculum seeded")

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