import Express, { Request, Response, NextFunction } from "express";

export abstract class ControllerFormat {

  constructor(private app: Express.Router, ) {
    this.startRoutes();
  }

  abstract routes(): RouteFormat[];
  getBaseRoute(): string | undefined {
    console.error("Not found base route");
    return undefined;
  };

  startRoutes(): void {
    const routes = this.routes();
    if (!this.getBaseRoute()) {
      throw new Error("No pathbase found")
    }
    routes.forEach((route) => {
      const path = this.getBaseRoute() + route.path;

      switch (route.method) {
        case "all":
          this.app.all(path, route.exec);
          break;

        case "delete":
          this.app.delete(path, route.exec);
          break;
        case "get":
          this.app.get(path, route.exec);
          break;
        case "patch":
          this.app.patch(path, route.exec);
          break;

        case "post":
          this.app.post(path, route.exec);
          break;

        case "put":
          this.app.put(path, route.exec);
          break;

        default:
          console.error("route not found");
          break;
      }
    });
  }
}

export interface RouteFormat {
  path: string;
  method:
    | "all"
    | "get"
    | "post"
    | "put"
    | "delete"
    | "patch"
    | "options"
    | "head";
  exec: (req: Request, res: Response, next: NextFunction) => void;
}
