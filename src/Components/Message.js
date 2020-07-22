import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("Please update your software");

  //   const sayhello = (name) => {
  //     console.log(`hello ${name}`);
  //   };

  const [show, setShow] = useState(true);

  const update = () => {
    setMessage("Your software is upto date");
    setTimeout(() => setShow(false), 200);
  };
  if (show) {
    return (
      <div className="message">
        <p>{message}</p>
        <button onClick={update}>UPDATE</button>
      </div>
    );
  } else {
    return <h1>Your browser is up-to-date</h1>;
  }
};

export default Message;
