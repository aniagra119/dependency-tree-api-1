const express = require("express");

const linkController = require("../controllers/linkController.js");

const router = express.Router();

router.get("/getLinkTbl", linkController.getLinkTbl);

// router.get("/getDirList", pathController.getDirList);
// router.get("/getPathName", pathController.getPathName);
// router.get("/getFilePath", pathController.getFilePath);
// router.get("/getFileList", pathController.getFileList);
router.delete("/dellink/:link", linkController.deleteLink);

module.exports = router;
