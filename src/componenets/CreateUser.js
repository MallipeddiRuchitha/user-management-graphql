import React, { useState } from "react";
import User from "./User";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export const USER_POST_MUTATION = gql`
  mutation insertUser($name: String!, $email: String!) {
    insertUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const [addUser, { error, loading, data }] = useMutation(USER_POST_MUTATION);
  return (
    <div>
      <div>
        <h3>Create User</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addUser({ variables: { name: name, email: email } });
            setName("");
            setEmail("");
          }}
        >
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <br />
          <label for="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <br />
          <button type="submit">Add User</button>
        </form>
        <div>
          {loading ? <div>Fetching</div> : ""}
          {error ? <div>Error {error}</div> : ""}
          {data ? <User user={data.insertUser} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default CreateUser;