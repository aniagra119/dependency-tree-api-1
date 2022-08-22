const express = require("express");

const tblColController = require("../controllers/tblColController");

const router = express.Router();

router.get("/getTblName", tblColController.getTblName);

router.get("/getColName", tblColController.getColName);

module.exports = router;
