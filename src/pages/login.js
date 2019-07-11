import React from 'react'
import login from './login.module.scss'

export default class Login extends React.Component {
    render() {
        return <div>
            <div className={login.wrap}>
                <h2 className={login.title}>登录</h2>
                <div>
                    <input type="text" placeholder="用户名" />
                    <input type="password" placeholder="密码" />
                </div>
            </div>
        </div>
    }
}