import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
  </div>
);

export default App;