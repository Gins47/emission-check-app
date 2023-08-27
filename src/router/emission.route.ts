import express from "express";
import { emissionController } from "../controller/emission.controller";

export default (router: express.Router) => {
  router.get("/filter", emissionController);
};
