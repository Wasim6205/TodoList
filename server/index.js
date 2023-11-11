const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config()
const TodoModel = require("./models/Todo")

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

app.post("/add", (req,res) => {
  const task = req.body.task;
  TodoModel.create({
    task: task
  }).then(result => res.json(result))
  .catch(err => res.json(err))
})

app.get("/get", (req,res) => {
  TodoModel.find()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.put("/update/:id", (req,res) => {
  const {id} = req.params;
  TodoModel.findByIdAndUpdate({_id: id}, {done: true})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.delete("/delete/:id", (req,res) => {
  const {id} = req.params;
  TodoModel.findByIdAndDelete({_id: id})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})