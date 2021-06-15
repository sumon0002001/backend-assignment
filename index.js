const express = require('express');

//create express app
const app = express();

//setup server port
const port = process.env.PORT || 5000;

//define root route
app.get('/', (req, res) => {
  res.send("hello world");
});

//listen to the port
app.listen(port, () => {
  console.log(`Express Server is running on port ${port}`);
})

