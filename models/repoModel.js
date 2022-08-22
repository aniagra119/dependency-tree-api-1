const db = require("../services/dbQueryServices");

exports.getRepoList = async function () {
  try {
    result = db.readQuery.query(`SELECT id AS repoId, name AS repoName
        FROM dir_list
        WHERE parent_id IS NULL`);
    return result;
  } catch (err) {
    throw err;
  }
};
