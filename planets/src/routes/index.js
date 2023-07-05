const { Router } = require("express");
const controllers = require("../controllers");
const { planetValidationHandler } = require("../utils/middlewares")

const router = Router();

router.get("/", controllers.getPlanets);
router.get("/:id", controllers.getPlanet);
router.post("/", planetValidationHandler, controllers.postPlanet);
router.put("/:id", planetValidationHandler, controllers.putPlanet);
router.delete("/:id", controllers.deletePlanet);

module.exports = router;
