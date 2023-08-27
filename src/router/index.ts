import express from "express";
import emissionRoute from "./emission.route";

const router = express.Router();

export default (): express.Router => {
  emissionRoute(router);
  return router;
};
