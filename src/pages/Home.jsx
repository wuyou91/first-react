import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
    render() {
        return <div>
            <h2>这是首页</h2>
            <ul>
                <li><Link to="/login">登录</Link></li>
                <li><Link to="/about">关于</Link></li>
                <li><Link to="/user">用户</Link></li>
                <li><Link to="/comment">评论</Link></li>
            </ul>
        </div>
    }
}