import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  const decrement = () => setCounter(counter - 1);

  return (
    <div>
      <h1>Your Current Counter:</h1>
      <div className="input-group mb-3 w-25  ">
        <div className="input-group-prepend">
          <button className="btn btn-danger" onClick={decrement}>
            -
          </button>
        </div>
        <input type="text" className="form-control" value={counter} readOnly />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
