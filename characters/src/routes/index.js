const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/", controllers.getCharacters);
router.get("/:id", controllers.getCharacter);

module.exports = router;
