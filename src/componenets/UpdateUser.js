import React, { useState } from "react";
import User from "./User";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export const USER_PUT_MUTATION = gql`
  mutation updateUser($id: ID!, $name: String!, $email: String!) {
    updateUser(id: $id, name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

function UpdateUser() {
  const [user, setUser] = useState({ id: "", name: "", email: "" });

  const [updateUser, { error, loading, data }] = useMutation(USER_PUT_MUTATION);
  return (
    <div>
      <div>
        <h3>Update User</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateUser({
              variables: { id: user.id, name: user.name, email: user.email },
            });
          }}
        >
          <label for="id">Id:</label>
          <input
            type="text"
            id="id"
            value={user.id}
            onChange={(event) => {
              setUser({ ...user, id: event.target.value });
            }}
          />
          <br />
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={(event) => {
              setUser({ ...user, name: event.target.value });
            }}
          />
          <br />
          <label for="email">Email:</label>
          <input
            type="text"
            id="email"
            value={user.email}
            onChange={(event) => {
              setUser({ ...user, email: event.target.value });
            }}
          />
          <br />
          <button type="submit">Update User</button>
        </form>
        <div>
          {loading ? <div>Fetching</div> : ""}
          {error ? <div>Error {error}</div> : ""}
          {data ? <User user={data.updateUser} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;