import connection from '../configs/connectDB'

let getHomepage = (req, res) => {
    let data = []
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            results.forEach(row => {
                data.push({
                    ...row
                })
            });
            return res.render('index.ejs', { dataUser: JSON.stringify(data) });
        }
    );   
}

module.exports = {
    getHomepage
};