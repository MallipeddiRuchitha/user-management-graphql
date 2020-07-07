import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

function DeleteUser() {
  const USER_DELETE_QUERY = gql`
    mutation deleteUser($id: ID!) {
      deleteUser(id: $id)
    }
  `;
  const [id, setId] = useState();

  const [deleteUser, { error, loading, data }] = useMutation(
    USER_DELETE_QUERY,
    {
      variables: { id: id },
      skip: !id,
    }
  );
  return (
    <div>
      <h3>Delete User</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          deleteUser({ variables: { id: id } });
          setId("");
        }}
      >
        <label for="id">Id:</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
        <br />
        <button type="submit">Delete User</button>
      </form>
      <div>
        {loading ? <div>Fetching</div> : ""}
        {error ? <div>Error {error}</div> : ""}
        {data ? data.deleteUser : ""}
      </div>
    </div>
  );
}

export default DeleteUser;