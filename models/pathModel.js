const db = require("../services/dbQueryServices");

exports.getPathList = async function (repoId) {
  try {
    let whereClause = "";
    if (!repoId) {
      whereClause = `WHERE parent_id IS NULL`;
    } else {
      whereClause = `WHERE parent_id = '${repoId}'`;
    }
    result = await db.readQuery
      .query(`with recursive cte (id, description, parent) as (
        select     id+ 400000,
                   name,
                   parent_id+ 400000
        from       dir_list
        ${whereClause}
        union all
        select     dl.id+ 400000,
                   dl.name,
                   dl.parent_id+ 400000
        from       dir_list dl
        join cte
                on dl.parent_id+ 400000 = cte.id
      )
      select * from cte;
        `);
    return result;
  } catch (err) {
    throw err;
  }
};
exports.getFolderofFile = async function (fileId) {
  try {
    let parentId = db.readQuery.query(
      `select parent_id AS dirId from file_list where id = ${fileId};`
    );
    return parentId;
  } catch (err) {
    throw err;
  }
};

exports.getFilePath = async function (dirId) {
  try {
    let result = db.readQuery
      .query(`WITH RECURSIVE file_path (id, description, parent) AS
      (
        SELECT id, name, parent_id
          FROM dir_list
          WHERE id = ${dirId[0].dirId}
        UNION ALL
        SELECT dl.id, dl.name, dl.parent_id
          FROM file_path AS fp JOIN dir_list AS dl
            ON fp.parent = dl.id
      )
      SELECT * FROM file_path;`);
    return result;
  } catch (err) {
    throw err;
  }
};

exports.getLeafFolders = async function (parentId) {
  try {
    const result = await db.readQuery
      .query(`with recursive cte (id, description, parent) as (
        select     id,
                   name,
                   parent_id
        from       dir_list
        where parent_id = ${parentId}
        union all
        select     dl.id,
                   dl.name,
                   dl.parent_id
        from       dir_list dl
        join cte
                on dl.parent_id = cte.id
      )
      select c.id 
      from cte c 
      left join cte c2
      on c.id = c2.parent
      where c2.parent is null;
        `);
    return result;
  } catch (err) {
    throw err;
  }
};
