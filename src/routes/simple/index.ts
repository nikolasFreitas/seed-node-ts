import Express from "express";
import { ControllerFormat } from "../ControllerAbstract";
import { RouteFormat } from "../ControllerAbstract";

export class SimpleObserversController extends ControllerFormat {
  constructor(router: Express.Router) {
    super("/simple", router);
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
