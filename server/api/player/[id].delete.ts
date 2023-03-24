import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient()


export default defineEventHandler(async (event) => {
    var _id: number | "" | undefined = event.context.params?.id && Number(event.context.params?.id);
    if (!_id || isNaN(_id)) {
        throw createError({
            statusCode: 400,
            statusMessage: "Invalid Id Number"
        })
    }
    try {
        const deletedPlayer = await prisma.player.delete({
            where: { id: _id }
        })
        return deletedPlayer
    } catch (err) {
        console.log("==================== error in prisma ==========================");

        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            console.log(err.message);
            if (err.code === "P2025")
                throw createError({
                    statusCode: 400,
                    statusMessage: 'Record to delete does not exist.'
                })
            else {
                throw createError({
                    statusCode: 400,
                    statusMessage: "check this error code :" + err.code
                })
            }

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