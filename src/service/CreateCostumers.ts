import prismaClient from "../prisma";

interface CreateCostumeProps {
    name: string;
    email: string;
}

class CreateCostumers {
    async execute({ name, email }: CreateCostumeProps) {
        // console.log("rota chamada");
        if (!name || !email) {
            throw new Error("Preencha todos campos!");
        }

        const costumer = await prismaClient.costumer.create({
            data: {
                name,
                email,
                status: true
            }
        })

        return costumer
    }
}

export { CreateCostumers };