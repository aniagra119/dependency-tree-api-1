const express = require("express");

const pathController = require("../controllers/pathController.js");

const router = express.Router();

router.get("/getRepoList", pathController.getRepoList);
router.get("/getDirList", pathController.getDirList);
router.get("/getPathName", pathController.getPathName);
router.get("/getFilePath", pathController.getFilePath);
router.get("/getFileList", pathController.getFileList);

module.exports = router;
