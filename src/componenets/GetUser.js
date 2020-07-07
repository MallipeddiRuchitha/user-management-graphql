import React, { useState } from "react";
import User from "./User";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";

function GetUser() {
  const USER_GET_QUERY = gql`
    query user($id: ID!) {
      user(id: $id) {
        id
        name
        email
      }
    }
  `;
  const [id, setId] = useState();

  const [
    getUser,
    { loading, error, data, refetch },
  ] = useLazyQuery(USER_GET_QUERY, { variables: { id: id }, skip: !id });
  return (
    <div>
      <h3>Fetch User</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getUser({ variables: { id: id } });
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
        <button type="submit">GET User</button>
        <button onClick={() => refetch()}>Refetch User</button>
      </form>
      <div>
        {loading ? <div>Fetching</div> : ""}
        {error ? <div>Error {error}</div> : ""}

        {data ? <User user={data.user} /> : ""}
      </div>
    </div>
  );
}

export default GetUser;