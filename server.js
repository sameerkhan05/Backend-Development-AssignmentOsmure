const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const userRoute = require('./Routes/tasksRoute');
require('dotenv').config();

//Import from .env File
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

//Main Page Route

app.use('/tasks',userRoute);


app.listen(PORT, () => {
  console.log(`Server listining on POTR:${PORT}`);
});
