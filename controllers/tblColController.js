const tblColService = require("../services/tblColServices");

exports.getTblName = async function (req, res) {
  const result = await tblColService.readTblName();
  res.send(result);
};

exports.getColName = async function (req, res) {
  let tblId = req.query.tblId;
  const result = await tblColService.readColName(tblId);
  res.send(result);
};
