import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodos from "../Components/AddTodos";
import TodoItem from "../Components/TodoItem";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "practise todo project",
      isCompleted: false,
    },
    {
      id: 2,
      task: "Drinking Water",
      isCompleted: false,
    },
    {
      id: 3,
      task: "Watching Movies",
      isCompleted: true,
    },
  ]);

  const ChangeText = (e) => {
    setTodoText(e.target.value);
  };

  const AddTodo = () => {
    const newTodo = {
      id: uuidv4(),
      text: todoText,
      isCompleted: false,
    };
    setTodos([newTodo, ...todos]);
    setTodoText("");
  };

  const completedTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.isCompleted = true;
        return todo;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id != id);
    console.log(updatedTodos);
    setTodos(updatedTodos);
  };

  return (
    <div className="card shadow">
      <div className="card-header">
        <AddTodos
          todotext={todoText}
          ChangeText={ChangeText}
          AddTodo={AddTodo}
        />
      </div>
      <div className="card-body">
        <ul className="lis-group list-group-flush">
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                completedTodo={completedTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
