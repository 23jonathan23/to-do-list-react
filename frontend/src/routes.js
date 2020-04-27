import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

import Todo from './pages/todo/Todo'
import About from './pages/about/About'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/todos" component={Todo}/>
        <Route path="/about" component={About}/>
        <Redirect from="*" to="/todos"/>
      </Switch>
    </BrowserRouter>
  )
}