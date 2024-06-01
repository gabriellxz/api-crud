import { FastifyReply, FastifyRequest } from "fastify";
import { EditCostumer } from "../service/EditCostumer";
import User from "../types/user";

class EditCostumerContoller {
    async editUser(request: FastifyRequest, reply: FastifyReply) {
        const {name, email, status} = request.body as {
            name: string,
            email: string,
            status: boolean,
        };
        const { id } = request.params as { id: number }
        const userId = Number(id)

        const editCostumerService = new EditCostumer();

        const costumer = await editCostumerService.execute({name, email, status}, userId)

        reply.send(costumer);

    }
}

export { EditCostumerContoller };