import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function User() {
    return <h2>User</h2>;
  }

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