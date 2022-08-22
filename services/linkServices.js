const linkModel = require("../models/linkModel.js");
const colModel = require("../models/colModel.js");
const tblModel = require("../models/tblModel.js");

exports.readLinkTbl = async function (tblId) {
  try {
    let linkList = [];
    const tblName = await tblModel.getTblList(tblId);
    const colName = await colModel.getColByTbl(tblId);
    console.log(tblName);
    linkList.push(...tblName);
    linkList.push(...colName);
    const colIds = colName.map((curr) => curr.id);
    const res = await linkModel.getTblLink(colIds);
    linkList.push(...res);
    const result = linkList;
    return result;
  } catch (err) {
    throw err;
  }
};

exports.readLinkCol = async function (colId) {
  try {
    let linkList = [];
    // console.log(colId.slice(1, -1));
    const colName = await colModel.getColList(colId.slice(1, -1));
    const colIds = colName.map((curr) => curr.id);
    const tblIds = colName.map((curr) => curr.parent);
    // console.log(colIds);
    // console.log(tblIds);
    const tblName = await tblModel.getTblList(tblIds);
    // console.log(tblName);
    linkList.push(...tblName);
    linkList.push(...colName);
    const res = await linkModel.getTblLink(colIds);
    linkList.push(...res);
    const result = linkList;
    return result;
  } catch (err) {
    throw err;
  }
};

exports.deleteLink = async function (link) {
  try {
    const result = await linkModel.deleteLink(link);
    return result;
  } catch (err) {
    throw err;
  }
};
