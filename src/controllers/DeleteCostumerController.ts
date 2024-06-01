import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCostumer } from "../service/DeleteCostume";

class DeleteCostumerController {
    async deleteUser(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as { id: number };
        const userId = Number(id)

        const deleteCostumersService = new DeleteCostumer();

        const costumers = await deleteCostumersService.deleteUser({ userId })

        reply.send(costumers);
    }
}

export { DeleteCostumerController };