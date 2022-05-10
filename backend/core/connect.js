const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "us-cdbr-east-05.cleardb.net",
  user: "bb930cc8dd477b",
  password: "d5434f0d",
  database: "heroku_cd83459083f9eda",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const query = async (sql, values) => {
    const transaction = await pool.getConnection();
    await transaction.beginTransaction();

    let response = {
        success: true,
        payload: {
            data: null,
        }
    }

    try {
        const [ rows, fields ] = await transaction.query(sql, values);
        transaction.commit();
        response.payload.data = rows;
    } catch (err) {
        await transaction.rollback();
        response.success = false;
        response.payload.data = "Something wrong i can feel it.";
        return response;
    } finally {
        transaction.release();
        return response;
    }
};

module.exports = {
    query,
};