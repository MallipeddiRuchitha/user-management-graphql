import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetUser from "./componenets/GetUser";
import CreateUser from "./componenets/CreateUser";
import UpdateUser from "./componenets/UpdateUser";
import DeleteUser from "./componenets/DeleteUser";
function App() {
  return (
    <div className="App">
       <GetUser />
      <hr />
      {/* <CreateUser />
      <hr />
      <UpdateUser />
      <hr />
      <DeleteUser /> */}
    </div>
  );
}

export default App;
