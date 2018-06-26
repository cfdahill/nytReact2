const router = require("express").Router();
const articlesController = require("../../controllers/nytController");

router.route("/api/articles")
.get(articlesController.findAll)
.post(articlesController.create);

router.route("/:id")
.delete(articlesController.remove);

module.exports = router;