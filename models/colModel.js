const db = require("../services/dbQueryServices");

exports.getColByTbl = async function (tblId) {
  try {
    let whereClause = "";
    if (!tblId) {
      whereClause = `;`;
    } else {
      whereClause = `WHERE tbl_id = '${tblId}';`;
    }
    result = await db.readQuery
      .query(`SELECT id, col_name AS description, tbl_id AS parent
        FROM col_list
        ${whereClause}`);
    return result;
  } catch (err) {
    throw err;
  }
};

exports.getColList = async function (colId) {
  try {
    let whereClause = "";
    if (!colId) {
      whereClause = `;`;
    } else {
      whereClause = `WHERE id in (${colId});`;
      console.log(whereClause);
    }
    result = await db.readQuery
      .query(`SELECT id, col_name AS description, tbl_id AS parent
        FROM col_list
        ${whereClause}`);
    return result;
  } catch (err) {
    throw err;
  }
};
