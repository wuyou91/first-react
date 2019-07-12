import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import User from '../pages/User'
import Login from '../pages/Login'
import Comment from '../pages/Comment'


export default class Routes extends React.Component {
    render() {
        return(
            <Router >
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/user" component={User} />
                    <Route path="/login" component={Login} />
                    <Route path="/comment" component={Comment} />
            </Router>
        )
    }
}