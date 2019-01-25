import React from "react";

import UserList from "./UserList";
import AuthPage from "./AuthPage";

const Home = ({ users, logout, login, isLoggedIn}) => {
  return (
    <>
      {users.length ? <UserList users={users} logout={logout} /> : null}
      {!isLoggedIn && <AuthPage submit={login} login />}
    </>
  );
};

export default Home;
