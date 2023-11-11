import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { BsCircleFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put(`http://localhost:3001/update/${id}`)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2 className="text-3xl font-medium mb-6">Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>No Record</div>
      ) : (
        todos.map((todo,index) => {
          return (
            <div key={index} className="flex justify-between bg-black text-white items-center p-4 mb-2">
              <div
                onClick={() => handleEdit(todo._id)}
                className="flex cursor-pointer justify-center items-center gap-4"
              >
                {todo.done ? <BsFillCheckCircleFill /> : <BsCircleFill />}
                <p className={todo.done ? "line-through" : ""}>
                  {todo.task}
                </p>
              </div>
              <div>
                <span
                  className="cursor-pointer"
                  onClick={() => handleDelete(todo._id)}
                >
                  <BsFillTrashFill />
                </span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
