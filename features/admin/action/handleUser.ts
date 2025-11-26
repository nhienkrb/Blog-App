import { prisma } from "@/lib/prisma";

export async function getAllUser() {
    return await prisma.user.findMany({
        select: {
            id: true,
            email: true,
            name: true,
            isAdmin: true
        },
    });
}

export async function getOneUser(id: number) {
    return await prisma.user.findFirst({
        where: { id: id },
        select: {
            id: true,
            email: true,
            name: true,
            isAdmin: true
        },
    })
}