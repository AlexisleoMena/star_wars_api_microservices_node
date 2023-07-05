const { Router } = require("express");
const controllers = require("../controllers");
const { validateCollectionHandler } = require("../utils/middlewares");
const router = Router();

router.get( "/:collection", validateCollectionHandler, controllers.getDocuments );
router.get( "/:collection/:id", validateCollectionHandler, controllers.getDocument );
router.post( "/:collection", validateCollectionHandler, controllers.postDocument );
router.put( "/:collection/:id", validateCollectionHandler, controllers.putDocument );
router.delete( "/:collection/:id", validateCollectionHandler, controllers.deleteDocument );

module.exports = router;
