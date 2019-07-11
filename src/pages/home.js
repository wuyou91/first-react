import React from 'react'
import { homedir } from 'os';

export default class Home extends React.Component {
    render() {
        return <div>
            <h2>Home</h2>
            <p>这是首页</p>
            <div className={homedir.wrap}>wrap</div>
        </div>
    }
}