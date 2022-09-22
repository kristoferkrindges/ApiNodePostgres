const express = require("express");
const router = express.Router();

const controller = require("../controllers/productController");

// GET
router.get("/", controller.listar);
// GET ID
router.get("/:id", controller.searchId);
// POST
router.post("/", controller.add);
// DELETE
router.delete("/:id", controller.remove);
// PUT
router.put("/:id", controller.change);

module.exports = router;
