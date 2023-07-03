const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../utils/middlewares");
const router = Router();

router.get(
  "/:collection",
  middlewares.validateCollectionHandler,
  controllers.getDocuments
);

router.get(
  "/:collection/:id",
  middlewares.validateCollectionHandler,
  controllers.getDocument
);

module.exports = router;
