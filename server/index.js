const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config()

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running successfully at ${port}`);
});

app.get("/",(req,res) => {
    res.send("get request");
})

const dbConnect = require("./config/database")
dbConnect();