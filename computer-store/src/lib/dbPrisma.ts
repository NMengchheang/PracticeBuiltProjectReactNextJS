import { PrismaClient } from "@prisma/client";

const prisamClientSingleton = () => {
    return new PrismaClient;
};

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prisamClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prisamClientSingleton();

export default prisma;
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;