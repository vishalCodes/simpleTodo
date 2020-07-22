import React, { useState } from "react";

const User = () => {
  const [user, setUser] = useState([
    {
      id: 1,
      name: "vishal yadav",
      email: "Vexample@gmail.com",
      password: "123*****",
    },
    {
      id: 2,
      name: "rakesh vanam",
      email: "Rexample@gmail.com",
      password: "12345***",
    },
    {
      id: 3,
      name: "Lalit Patel",
      email: "Lexample@gmail.com",
      password: "12345*****",
    },
    {
      id: 4,
      name: "Ashish patil",
      email: "Aexample@gmail.com",
      password: "12345*****",
    },
  ]);

  return (
    <div>
      <table className="table  table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
