const pathService = require("../services/pathServices");

exports.getRepoList = async function (req, res) {
  const result = await pathService.readRepoList();
  res.send(result);
};

exports.getPathName = async function (req, res) {
  const repoId = req.query.repoId;
  // console.log(repoId);
  const result = await pathService.readPathName(repoId);
  res.send(result);
};

exports.getDirList = async function (req, res) {
  const dirId = req.query.dirId;
  // console.log(repoId);
  const result = await pathService.readDirList(dirId);
  res.send(result);
};

exports.getFilePath = async function (req, res) {
  const fileId = req.query.fileId;
  // console.log(fileId);
  const result = await pathService.readFilePath(fileId);
  res.send(result);
};

exports.getFileList = async function (req, res) {
  let parentId;
  if (req.query.dirId) {
    parentId = req.query.dirId;
  } else {
    parentId = req.query.repoId;
  }
  const result = await pathService.readFileList(parentId);
  res.send(result);
};

// exports.getColName = async function (req, res) {
//   let tblId = req.query.tblId;
//   const result = await pathService.readColName(tblId);
//   res.send(result);
// };
