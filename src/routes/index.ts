import Express from "express";
import { Notifier } from "./simple";

export const startControllers = (router: Express.Router) => {
  new Notifier(router);
};
