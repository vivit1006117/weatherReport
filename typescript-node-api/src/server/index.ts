import {HttpServer} from "./httpServer";
import {RequestHandler, Server} from "restify";
import * as restify from "restify";
import {CONTROLLERS} from "../controller";

export class ApiServer implements HttpServer {
    private restify: Server;

    get(url: string, requestHandler: RequestHandler): void {
        this.addRoute('get', url, requestHandler);
    }

    private addRoute(method: 'get', url: string, requestHandler: RequestHandler): void {
        this.restify[method](url, async (req, res, next) => {
            try {
                await requestHandler(req, res, next);
            }
            catch (err) {
                console.log(err);
                res.send(500, err);
            }
        })
    }

    public start(port: number): void{
        this.restify = restify.createServer();
        this.restify.use(restify.plugins.bodyParser());
        this.restify.use(restify.plugins.queryParser());

        CONTROLLERS.forEach(controller => controller.initialize(this));

        this.restify.listen(port, () => console.log(`server is up at ${port}`))
    }
}