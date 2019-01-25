import React from 'react';

import { Segment, Form, Header, Button } from 'semantic-ui-react';

class AuthForm extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleInputTextChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { submit } = this.props;

    submit({ username, password });
    this.setState({
      username: '',
      password:''
    })
  }

  render() {
    const { username, password } = this.state;
    const { login } = this.props;
    return (
      <Segment
        style={{
          maxWidth: '400px',
          margin: '0 auto'
        }}
      >
        <Header as="h2" textAlign='center'>{
          login ? 'Sign In' : 'Register'
        }</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Username"
            placeholder="Username"
            name="username"
            value={username}
            onChange={this.handleInputTextChange}
          />
          <Form.Input
            label="Password"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.handleInputTextChange}
          />
          <Button fluid color="instagram"
            content={login ? "Log In" : "Create Account"}
            type="submit"
          />
        </Form>
      </Segment>
    )
  }
}

export default AuthForm;