import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient()


export default defineEventHandler(async (event) => {

    try {
        const players = await prisma.player.findMany({
            include: {
                image: true
            }
        })
        return players
    } catch (err) {
        console.log("==================== error in prisma ==========================");

        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            console.log(err.message);
            throw createError({
                statusCode: 400,
                statusMessage: "check this error code :" + err.code
            })

        } else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
            console.log(err.message);
            throw createError({
                statusCode: 500,
                statusMessage: "internal server error"
            })
        }
        else {
            console.log(err);
        }
        console.log("============================================================");

    }

})