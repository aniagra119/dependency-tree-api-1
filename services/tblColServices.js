const tblModel = require("../models/tblModel.js");
const colModel = require("../models/colModel.js");

exports.readTblName = async function () {
  try {
    const rawList = await tblModel.getTblList();
    const result = rawList;
    return result;
  } catch (err) {
    throw err;
  }
};

exports.readColName = async function (tblId) {
  try {
    const rawList = await colModel.getColByTbl(tblId);
    const groupByName = rawList.reduce(
      (h, obj) =>
        Object.assign(h, {
          [obj.description]: (h[obj.description] || []).concat({
            id: obj.id,
            parent: obj.parent,
          }),
        }),
      {}
    );
    const result = [];
    Object.keys(groupByName).forEach((key, i, keys) => {
      result.push({
        id: groupByName[key].map((item) => item.id),
        description: key,
        parent: groupByName[key],
      });
    });
    return result;
  } catch (err) {
    return err;
  }
};
