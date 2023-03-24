import joi from "joi";
import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient()

const schema = joi.object({
    imageUrl: joi.string().required(),
    imagePath: joi.string().required(),
    coordinates: joi.object({
        top: joi.number().required(),
        left: joi.number().required(),
        height: joi.number().required(),
        width: joi.number().required(),
    })
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
    const { imageUrl, imagePath, coordinates } = body
    try {
        const image = await prisma.image.create({
            data: {
                url: imageUrl,
                path: imagePath,
                coordTop: coordinates.top,
                coordLeft: coordinates.left,
                coordHeight: coordinates.height,
                coordWidth: coordinates.width
            }
        })
        return image
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
        console.log("================================================================");

    }
})