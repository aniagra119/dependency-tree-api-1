const db = require("../services/dbQueryServices");

exports.getFileList = async function (parentId) {
  try {
    let result = db.readQuery.query(`SELECT id, file_name AS fileName 
    FROM file_list 
    WHERE parent_id IN (${parentId.join(",")})`);
    return result;
  } catch (err) {
    throw err;
  }
};
