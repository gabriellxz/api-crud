import prismaClient from "../prisma";
import User from "../types/user";

class EditCostumer {
    async execute({ name, email, status }: User, userId: number) {
        // if (!name || !email || !status) {
        //     throw new Error("Solicitação invalida.");
        // }

        const user = await prismaClient.costumer.findUnique({
            where: {
                id: userId
            }
        })

        if (!user) {
            throw new Error("Esse usuário não existe.")
        }

        const updateUser = await prismaClient.costumer.update({
            where: {
                id: userId
            },
            data: { name, email, status }
        })

        return updateUser;
    }
}

export { EditCostumer };