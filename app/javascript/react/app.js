import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import CharactersIndexContainer from './containers/CharactersIndexContainer';

export const App = (props) => {
  return (
    <Router history={browserHistory}>
        <Route path='/characters'>

          <IndexRoute component={CharactersIndexContainer} />
          <Route path='/characters' component={CharactersIndexContainer} />

        </Route>
      </Router>
  )
}

export default App
