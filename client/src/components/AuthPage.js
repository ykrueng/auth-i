import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

import AuthForm from "./AuthForm";

const Home = ({submit, login}) => {
  return (
    <Segment padded>
      <Header textAlign="center" as="h1">Welcome To Auth - I</Header>
      <AuthForm submit={submit} login={login}/>
    </Segment>
   );
}
 
export default Home;