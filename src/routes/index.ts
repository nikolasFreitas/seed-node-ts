import Express from "express";
import { SimpleObserversController } from "./simple";

export const startControllers = (router: Express.Router) => {
  new SimpleObserversController(router);
};
