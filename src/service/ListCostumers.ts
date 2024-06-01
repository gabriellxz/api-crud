import prismaClient from "../prisma";

class ListCostumers {
    async execute() {
        const costumers = await prismaClient.costumer.findMany();

        return costumers;
    }
}

export {ListCostumers};