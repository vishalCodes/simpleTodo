import React from "react";
import Todo from "./Todo";

const TodoItem = ({ todo, completedTodo, deleteTodo }) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between"
      key={todo.id}
    >
      <div>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={(id) => completedTodo(todo.id)}
        />
        <span className={todo.isCompleted ? "completed" : null}>
          {todo.task}
        </span>
      </div>
      <span>
        <i className="fas fa-trash" onClick={() => deleteTodo(todo.id)}></i>
      </span>
    </li>
  );
};

export default TodoItem;
