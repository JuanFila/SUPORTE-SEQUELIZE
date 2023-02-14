const express = require("express");
const PlanetController = require("../../controler/PlanetController");
const SateliteController = require("../../controler/SateliteController");
const routes = express.Router();


//Rotas de planetas
routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

routes.post("/planets/:planetId/satelites", SateliteController.store);

module.exports = routes;