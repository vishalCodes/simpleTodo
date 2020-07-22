import React from "react";

const AddTodos = ({ todoText, ChangeText, AddTodo }) => {
  return (
    <div className="input-group ">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Your TODO"
        value={todoText}
        onChange={(e) => ChangeText(e)}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" onClick={AddTodo}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddTodos;
