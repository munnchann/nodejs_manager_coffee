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
let CreateNewUser = async (req, res) => {
  try {
    let { firstName, phoneNumber } = req.body;
    await pool.execute(
      `insert into users(firstName, phoneNumber) values(?,?)`,
      [firstName, phoneNumber]
    );
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
let DeleteUser = async (req, res) => {
  try {
    let userId = req.body.userId;
    await pool.execute(`delete from users where id=?`, [userId]);
    return res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};
let getEditPage = async (req, res) => {
  let id = req.params.id;
  let [user] = await pool.execute(`select * from users where id=?`, [id]);
  return res.render("update.ejs", { dataUser: user[0] });
};
let UpdateUser = async (req, res) => {
  try {
    let{ firstName, phoneNumber, id} = req.body;
    await pool.execute(
      `update users set firstName=?, phoneNumber=? where id=?`,
      [firstName, phoneNumber, id]
    );
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getHomepage,
  getDetailPage,
  CreateNewUser,
  DeleteUser,
  getEditPage,
  UpdateUser,
};
