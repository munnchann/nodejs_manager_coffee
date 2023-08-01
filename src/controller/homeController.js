import pool from "../config/dbConnect";

let getHomepage = async (req, res) => {
  //logic code (db,...)
  const [rows, fields] = await pool.execute("select * from users");
  return res.render("index.ejs", { dataUser: rows });
};

let getDetailPage = async (req, res) => {
  let id = req.params.userId;
  let [user] = await pool.execute(`select * from users where id=?`, [id]);
  return res.send(JSON.stringify(user));
};

module.exports = {
  getHomepage,
  getDetailPage,
};
