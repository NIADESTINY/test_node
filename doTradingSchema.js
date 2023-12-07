// doTradingSchema.js

const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test_node',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const promisePool = pool.promise();

const doTradingSchema = {
  createApplicant: async (applicant) => {
    const [rows] = await promisePool.execute(
      'INSERT INTO applicants (ref_no, cust_name, financing_amount, tenure, profit_rate, profit_amount, selling_price, mobile_no, product_id, operation_remarks,status,date_create) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)',
      [
        applicant.ref_no,
        applicant.cust_name,
        applicant.financing_amount,
        applicant.tenure,
        applicant.profit_rate,
        applicant.profit_amount,
        applicant.selling_price,
        applicant.mobile_no,
        applicant.product_id,
        applicant.operation_remarks,
        applicant.status,
        applicant.date_create


      ]
    );
    return rows.insertId;
  }
};

module.exports = doTradingSchema;
