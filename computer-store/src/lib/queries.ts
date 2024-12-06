import prisma from "./dbPrisma";

export const createSubscriber = async (email: string, token: string) => {
    return prisma.subscriber.create({
        data: {
            email,
            token,
        },
    });
};