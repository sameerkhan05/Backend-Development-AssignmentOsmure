const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const PORT = 5000;

app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`Server running on POTR : ${PORT}`);
});
