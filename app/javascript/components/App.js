import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Teams from './Teams/Teams'
import Team from './Team/Team'

const App = () => {
  return (
  <Switch>
    <Route exact path="/" component={Teams}/>
    <Route exact path="/teams/:name" component={Team}/>
  </Switch>
  )
}

export default App