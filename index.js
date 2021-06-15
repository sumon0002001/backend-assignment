const express = require('express');

//create express app
const app = express();

//setup server port
const port = process.env.PORT || 5000;

//define root route
app.get('/', (req, res) => {
  res.send("hello world");
});

// import invoice routes
const invoiceRoutes = require('./src/routes/invoice.route');

// create employee routes
app.use('/api/v1/invoice', invoiceRoutes);

//listen to the port
app.listen(port, () => {
  console.log(`Express Server is running on port ${port}`);
})

