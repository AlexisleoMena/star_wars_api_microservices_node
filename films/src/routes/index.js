const { Router } = require("express");
const controllers = require("../controllers");
const { filmValidationHandler } = require("../utils/middlewares")

const router = Router();

router.get("/", controllers.getFilms);
router.get("/:id", controllers.getFilm);
router.post("/", filmValidationHandler, controllers.postFilm);
router.put("/:id", filmValidationHandler, controllers.putFilm);
router.delete("/:id", controllers.deleteFilm);

module.exports = router;
