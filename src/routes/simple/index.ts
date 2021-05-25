import Express from "express";
import { ControllerFormat } from "../ControllerAbstract";
import { RouteFormat } from "../ControllerAbstract";
import { baseName } from "../decorator";

@baseName("/simple")
export class Notifier extends ControllerFormat {

  constructor(router: Express.Router) {
    super(router);
  }

  routes(): RouteFormat[] {
    return [this.testRoute()];
  }

  testRoute(): RouteFormat {
    return {
      exec: (req, res) => {
        console.log("Base");
        res.send("FOI AQUI NO OBSERVER SIMPLES!").status(200);
      },
      method: "get",
      path: "/",
    };
  }
}
