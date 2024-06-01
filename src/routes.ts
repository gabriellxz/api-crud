import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCostumersController } from "./controllers/CreateCostumersController";
import { ListCostumersContoller } from "./controllers/ListCostumersController";
import { DeleteCostumerController } from "./controllers/DeleteCostumerController";
import { EditCostumerContoller } from "./controllers/EditCostumerContoller";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return ({ ok: true });
    })

    fastify.post("/registrar", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCostumersController().handle(request, reply);
    })

    fastify.get("/getUsers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCostumersContoller().getCostumers(request, reply);
    })

    fastify.delete("/deleteUser/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCostumerController().deleteUser(request, reply);
    })

    fastify.put("/updateUser/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new EditCostumerContoller().editUser(request, reply);
    })
}