const repoModel = require("../models/repoModel.js");
const pathModel = require("../models/pathModel.js");
const fileModel = require("../models/fileModel.js");

exports.readRepoList = async function () {
  try {
    const rawList = await repoModel.getRepoList();
    const result = { data: rawList };
    return result;
  } catch (err) {
    throw err;
  }
};

exports.readPathName = async function (repoId) {
  try {
    const rawList = await pathModel.getPathList(repoId);
    // const paths = rawList.map((res) => res.pathName);
    // // const newPath = paths.map((path) => path.split("/"));
    // // newPath.forEach((path) => {
    // //   path.shift();
    // //   path.pop();
    // // });
    // // console.log(...new Set(newPath.flat()));
    // let fullPath = {};
    // paths.forEach(function (path) {
    //   path.split("/").reduce((r, i) => {
    //     return r[i] || (r[i] = {});
    //   }, fullPath);
    // });
    // console.log(fullPath);
    const result = { data: rawList };
    return result;
  } catch (err) {
    throw err;
  }
};

exports.readDirList = async function (dirId) {
  try {
    const upList = await pathModel.getFilePath(dirId);
    const downList = await pathModel.getPathList(dirId);
    const rawList = upList.concat(downList);
    const result = { data: rawList };
    return result;
  } catch (err) {
    throw err;
  }
};

exports.readFilePath = async function (fileId) {
  try {
    console.log(fileId);

    const parentId = await pathModel.getFolderofFile(fileId);
    console.log(parentId);
    const rawList = await pathModel.getFilePath(parentId);
    for (let i = 0; i < rawList.length; i++) {
      if (i === 0) {
        rawList[i].parent = parseInt(fileId);
      } else {
        rawList[i].parent = rawList[i - 1].id;
      }
    }
    console.log(rawList);
    const result = { data: rawList };
    return result;
  } catch (err) {
    throw err;
  }
};

exports.readFileList = async function (parentId) {
  try {
    const leafFolders = await pathModel.getLeafFolders(parentId);
    const leafIds = leafFolders.map((curr) => curr.id);
    console.log(leafIds);
    const rawList = await fileModel.getFileList(leafIds);
    // const rawList = await fileModel
    const result = { data: rawList };
    return result;
  } catch (err) {
    throw err;
  }
};
// exports.readColName = async function (tblId) {
//   try {
//     const rawList = await colModel.getColList(tblId);
//     const groupByName = rawList.reduce(
//       (h, obj) =>
//         Object.assign(h, {
//           [obj.columnName]: (h[obj.columnName] || []).concat(obj.columnId),
//         }),
//       {}
//     );
//     const result = { data: [] };
//     Object.keys(groupByName).forEach((key, i, keys) => {
//       result.data.push({
//         columnName: key,
//         columnId: groupByName[key],
//       });
//     });
//     return result;
//   } catch (err) {
//     return err;
//   }
// };
