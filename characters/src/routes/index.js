const { Router } = require("express");
const controllers = require("../controllers");
const { characterValidationHandler } = require("../utils/middlewares")
const router = Router();

router.get("/", controllers.getCharacters);
router.get("/:id", controllers.getCharacter);
router.post("/", characterValidationHandler, controllers.postCharacter);
router.put("/:id", characterValidationHandler, controllers.putCharacter);
router.delete("/:id", controllers.deleteCharacter);

module.exports = router;
