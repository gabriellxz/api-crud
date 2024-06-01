import { CreateCostumers } from "../service/CreateCostumers";
import { FastifyRequest, FastifyReply } from "fastify";

class CreateCostumersController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { name, email } = request.body as { name: string, email: string };
        console.log(name, email);

        const costumeService = new CreateCostumers();

        const costumer = await costumeService.execute({ name, email });

        reply.send(costumer);

    }
}

export { CreateCostumersController };