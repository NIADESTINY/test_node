// app.js

const express = require('express');
const bodyParser = require('body-parser');
const doTradingSchema = require('./doTradingSchema');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000;
app.use(cors());

app.use(bodyParser.json());

// Endpoint to create a new applicant
app.post('/applicants', async (req, res) => {
  try {
    const {
      ref_no,
      cust_name,
      financing_amount,
      tenure,
      mobile_no,
    } = req.body;

    const profit_rate = 4.9;

    const profit_amount = financing_amount * (profit_rate / 100);
    const selling_price = financing_amount + profit_amount;

    const newApplicant = {
      ref_no,
      cust_name,
      financing_amount,
      tenure,
      profit_rate,
      profit_amount,
      selling_price,
      mobile_no,
      product_id: 'D4',
      operation_remarks: '-',
    };

    const applicantId = await doTradingSchema.createApplicant(newApplicant);

    // Send a success response
    res.status(201).json({ message: 'Applicant created successfully', id: applicantId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Endpoint to get all applicants
app.get('/applicants', (req, res) => {
  // Implement code to retrieve applicants from MySQL database
  res.status(200).json({ message: 'Not implemented for MySQL' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
