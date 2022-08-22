const db = require("../services/dbQueryServices");

exports.getTblLink = async function (colIds) {
  try {
    const result = await db.readQuery
      .query(`SELECT fcl.id as link, file_id as id, fl.file_name as description, col_id as parent 
      FROM file_col_link fcl
      JOIN file_list fl
      ON fl.id = fcl.file_id
      WHERE col_id IN (${colIds.join(",")}) AND fcl.status = "1";`);
    return result;
  } catch (err) {
    throw err;
  }
};

exports.deleteLink = async function (link) {
  try {
    const result = await db.readQuery.query(
      `UPDATE file_col_link
    SET status = 0, last_update_at = CURRENT_TIMESTAMP
    WHERE id = ?`,
      [link]
    );
    return result;
  } catch (err) {
    throw err;
  }
};

// const createLinkQuery = async function (tableName, columnName, pathName) {
//   let ifNewPath = 0;
//   try {
//     columnId = await query(
//       `SELECT cl.id
//           FROM column_list cl
//           JOIN table_list tl
//           ON cl.tbl_id = tl.id
//           WHERE tbl_name = '${tableName}' AND col_name = '${columnName}'`
//     );
//     console.log(columnId);
//     console.log(columnId[0].id);
//     if (!columnId[0].id) {
//       return (result = { status: 404, message: "No such table/column exists" });
//     }
//     pathId = await query(
//       `SELECT id
//           FROM functions
//           WHERE path_name = '${pathName}'`
//     );
//     console.log(pathId.length);
//     if (!pathId.length) {
//       await query(
//         `INSERT
//             INTO functions(path_name)
//             VALUES('${pathName}');`
//       );
//       pathId = await query(`select last_insert_id() AS id;`);
//       ifNewPath = 1;
//     }
//     if (ifNewPath === 0) {
//       let ifConnectionExists = await query(`
//             SELECT id
//             FROM function_uses
//             WHERE column_id = '${columnId[0].id}' AND function_id = '${pathId[0].id}' `);
//       if (ifConnectionExists[0].id)
//         return (result = { status: 400, message: "Connection already exists" });
//     }
//     result = await query(`
//           INSERT INTO function_uses(column_id,function_id)
//           VALUES('${columnId[0].id}','${pathId[0].id}')`);
//     console.log(tableName, columnName, pathName);
//     console.log(result);
//     return result;
//   } catch (err) {
//     return err;
//   } finally {
//     con.end();
//   }
// };

// const readLinkQuery = async function (
//   tableName,
//   columnName,
//   repoName,
//   folderName,
//   fileName
// ) {
//   try {
//     let whereClause;
//     if (repoName) {
//       whereClause = `path_name LIKE '${repoName}/%'`;
//     } else if (folderName) {
//       whereClause = `path_name LIKE '%/${folderName}/%'`;
//     } else if (fileName) {
//       whereClause = `path_name LIKE '%/${fileName}.%'`;
//     } else if (tableName && columnName) {
//       whereClause = `tbl_name = '${tableName}' AND col_name = '${columnName}'`;
//     } else if (columnName) {
//       whereClause = `col_name = '${columnName}'`;
//     } else if (tableName) {
//       whereClause = `tbl_name = '${tableName}'`;
//     } else {
//       return { status: 400, message: "at least one field is required" };
//     }

//     const result =
//       await readQuery(`SELECT tbl_name, col_name, ptl.status, path_name
//         FROM table_list tl
//         LEFT JOIN column_list cl
//           ON tl.id = cl.tbl_id
//         LEFT JOIN p_t_link ptl
//             ON cl.Id = ptl.col_Id
//         LEFT JOIN path_list pl
//             ON pl.Id = ptl.path_Id
//           WHERE ${whereClause};`);

//     return result;
//   } catch (err) {
//     return err;
//   } finally {
//   }
// };

// const deleteLinkQuery = async function (tableName, columnName, pathName) {
//   const con = mysql.createConnection(config.databaseOptions);
//   const query = util.promisify(con.query).bind(con);

//   try {
//     let whereClause;
//     if (tableName && columnName && pathName) {
//       whereClause = `tbl_name = '${tableName}' AND col_name = '${columnName}' AND function_name = '${pathName}'`;
//     } else {
//       return Error({
//         statsu: 400,
//         message: "Please provide all the necessary data",
//       });
//     }

//     const result = await query(`UPDATE function_uses fu
//         LEFT JOIN column_list cl
//               ON cl.Id = fu.Column_Id
//         LEFT JOIN table_list tl
//             ON tl.id = cl.tbl_id
//           LEFT JOIN functions f
//               ON f.Id = fu.function_Id
//       SET fu.status = 0, fu.last_update_at = current_timestamp()
//           WHERE ${whereClause} AND fu.status = 1`);

//     return result;
//   } catch (err) {
//     return err;
//   } finally {
//     con.end();
//   }
// };

// const updateLinkQuery = async function (tableName, columnName, pathName) {
//   deleteConnectionQuery(tableName, columnName, pathName);
//   createConnectionQuery(tableName, columnName, pathName);
// };
