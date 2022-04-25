import pool from '../configs/connectDB'

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render('index.ejs', { dataUser: rows });
}

let getDetailPage = async (req, res) => {
    let {userId} = req.params;
    const [rows, fields] = await pool.execute(`SELECT * FROM users WHERE id = ?`,[userId]);
    return res.send(rows)
}

let createNewUser = async (req, res) => {
    let {firstName, lastName, email, address} = req.body;
    await pool.execute(`INSERT INTO users (firstName, lastName, email, address) VALUES (?,?,?,?)`,[firstName, lastName, email, address]);
    return res.redirect('/')
}

let deleteUser = async (req, res) => {
    let {userId} = req.body;
    await pool.execute('DELETE FROM users WHERE id = ?',[userId]);
    return res.redirect('/')
}

let editUser = async (req, res) => {
    let {userId} = req.params;
    const [user] = await pool.execute(`SELECT * FROM users WHERE id = ?`,[userId]);
    return res.render('update.ejs', { dataUser: user[0] });
}

let updateUser = async (req, res) => {
    let {id, firstName, lastName, email, address} = req.body;
    await pool.execute(`UPDATE users SET firstName = ?, lastName=?, email=?, address=? WHERE id=?`,[firstName, lastName, email, address, id]);
    return res.redirect('/')
}

module.exports = {
    getHomepage,
    getDetailPage,
    createNewUser,
    deleteUser,
    editUser,
    updateUser
};