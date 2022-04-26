import pool from '../configs/connectDB'

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.status(200).json({
        message: 'OK',
        users: rows
    })
}

let createNewUser = async (req, res) => {
    let {firstName, lastName, email, address} = req.body;

    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute(`INSERT INTO users (firstName, lastName, email, address) VALUES (?,?,?,?)`,[firstName, lastName, email, address]);
    return res.status(200).json({
        message: 'OK',
    })
}

let updateUser = async (req, res) => {
    let {id, firstName, lastName, email, address} = req.body;
    if (!id || !firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute(`UPDATE users SET firstName = ?, lastName=?, email=?, address=? WHERE id=?`,[firstName, lastName, email, address, id]);
    return res.status(200).json({
        message: 'OK',
    })
}

let deleteUser = async (req, res) => {
    let {id} = req.params;
    await pool.execute('DELETE FROM users WHERE id = ?',[id]);
    return res.status(200).json({
        message: 'OK'
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
};