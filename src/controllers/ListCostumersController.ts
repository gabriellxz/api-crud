import { FastifyReply, FastifyRequest } from "fastify";
import { ListCostumers } from "../service/ListCostumers";

class ListCostumersContoller {
    async getCostumers(request: FastifyRequest, reply: FastifyReply) {
        const ListCostumersService = new ListCostumers();

        const costumers = await ListCostumersService.execute();

        reply.send(costumers);
    }
}

export {ListCostumersContoller};