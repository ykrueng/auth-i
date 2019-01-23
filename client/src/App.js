import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import AuthPage from "./components/AuthPage";
import Home from "./components/Home";

class App extends React.Component {
  state = {
    isLoggedIn: false,
    loggingIn: false,
    error: null,
    users: []
    // users: [
    //   { username: 'abcd', id: 1 },
    //   { username: 'adfdkjfs', id: 2 },
    //   { username: 'asdkjfsdksd', id: 3 },
    //   { username: 'asdf', id: 4 }
    // ]
  };

  register = async user => {
    this.setState({ loggingIn: true, error: false });

    try {
      await axios.post("http://localhost:8000/api/register", user);
      this.setState({
        isLoggedIn: true,
        loggingIn: false,
        error: false
      });
    } catch (err) {
      this.setState({
        isLoggedIn: false,
        loggingIn: false,
        error: true
      });
    }
  };

  login = async user => {
    this.setState({ loggingIn: true, error: false });

    try {
      await axios.post("http://localhost:8000/api/login", user, {withCredentials: true});

      const res = await axios.get("http://localhost:8000/api/users", { withCredentials: true });

      this.setState({
        isLoggedIn: true,
        loggingIn: false,
        error: false,
        users: res.data
      });

    } catch (err) {
      this.setState({
        isLoggedIn: false,
        loggingIn: false,
        error: true
      });
    }
  };

  logout = async () => {
    try {
      await axios.get("http://localhost:8000/api/logout");
      this.setState({
        isLoggedIn: false,
        users: [],
      })
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { users, isLoggedIn } = this.state;
    return (
      <div>
        <Route
          exact
          path="/"
          render={props => (
            <Home
              isLoggedIn={isLoggedIn}
              users={users}
              logout={this.logout}
              login={this.login}
            />
          )}
        />
        <Route
          exact
          path="/register"
          render={props => <AuthPage {...props} submit={this.register} />}
        />
      </div>
    );
  }
}

export default App;
