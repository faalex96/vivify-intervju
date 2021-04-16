import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Header from './Header';
import Movies from './Movie/Movies';
import Nav from './Nav';
import MovieForm from '../components/Form/movieForm';

const title = 'React Movie Cards';

const App = () => (
  <div>
    <Router>
      <Header title={title} />
      <Nav />

      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <div className="mt-5">
                <Movies />
              </div>
            );
          }}
        />
        <Route path="/add" component={MovieForm} />
      </Switch>
    </Router>
  </div>
);

export default App;
