import joi from "joi";
import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient()

const schema = joi.object({
    name: joi.string().required().min(3).max(255),
    imageId: joi.number().required().min(1),
})

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { error, value } = schema.validate(body);

    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        })
    }
    const { name, imageId } = body
    try {
        const player = await prisma.player.create({
            data: {
                name,
                imageId
            }
        })
        return player
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
        console.log("===============================================================");

    }

})