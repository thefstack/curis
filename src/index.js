import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Header from './components/Header'
import NotFound from './views/not-found'
import Login from './views/Login'
import Footer from './components/Footer'
import Register from './views/Register'

const App = () => {
  return (
    <Router>
    <Header/>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route path="/login" component={Login}/>
        <Route component={Register} path="/register"/>
        <Route component={NotFound} path="*" />
        <Redirect to="**" />
      </Switch>
      <Footer/>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
