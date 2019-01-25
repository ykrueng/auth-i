import React from "react";
import { Segment, Header, Button } from "semantic-ui-react";

const UserList = ({ users, logout }) => {
  return (
    <Segment textAlign="center">
      <Header as="h1">User List</Header>
      {users.map(user => (
        <Header as="h3" key={user.id}>
          {user.username}
        </Header>
      ))}
      <Button
        color="instagram"
        content="Sign Out"
        onClick={logout}
      />
    </Segment>
  );
};

export default UserList;
