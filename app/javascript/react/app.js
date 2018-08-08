import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import CharactersIndexContainer from './containers/CharactersIndexContainer';
import CharacterShowContainer from './containers/CharacterShowContainer';

export const App = (props) => {
  return (
    <Router history={browserHistory}>
        <Route path='/characters'>

          <IndexRoute component={CharactersIndexContainer} />
          <Route path='/characters' component={CharactersIndexContainer} />
          <Route path='/characters/:id' component={CharacterShowContainer} />
        </Route>
      </Router>
  )
}

export default App
