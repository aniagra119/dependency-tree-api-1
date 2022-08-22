const db = require("../services/dbQueryServices");

exports.getTblList = async function (tblId) {
  try {
    let whereClause = "";
    if (tblId) {
      whereClause = `WHERE id IN (${tblId.join(",")})`;
    }
    result = db.readQuery.query(`SELECT id, tbl_name AS description
        FROM tbl_list
        ${whereClause}`);
    return result;
  } catch (err) {
    throw err;
  }
};
