import prismaClient from "../prisma"; 7

interface DeleteCostumerProps {
    userId: number;
}

class DeleteCostumer {
    async deleteUser({ userId }: DeleteCostumerProps) {
        if (!userId) {
            throw new Error("Solicitação invaluserIda.")
        }

        const findCostumers = await prismaClient.costumer.findFirst({
            where: {
                id: userId
            }
        })

        if (!findCostumers) {
            throw new Error("Usuário não existe.")
        }

        await prismaClient.costumer.delete({
            where: {
                id: findCostumers.id
            }
        })

        return {message: "Usuário deletado com sucesso!"};

    }
}

export { DeleteCostumer };