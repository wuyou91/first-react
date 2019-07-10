import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../pages/home'
import About from '../pages/about'
import User from '../pages/user'

export default class Routes extends React.Component {
    render() {
        return(
            <Router >
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/user" component={User} />
                </div>
            </Router>
        )
    }
}