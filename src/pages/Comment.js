import React from 'react'
import '../style/comment.scss'

export default class Comment extends React.Component {
    constructor() {
        super()
        this.state = {
            commentsLsit: [],
            name: '',
            content: ''
        }
    }
    submit() {
        let arr = this.state.commentsLsit
        arr.push({
            name: this.state.name,
            content: this.state.content
        })
        this.setState({
            commentsLsit: arr
        })
        this.setState({
            content: ''
        })
    }
    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    changeContent(e) {
        this.setState({
            content: e.target.value
        })
    }
    remove(index) {
        const arr = this.state.commentsLsit
        arr.splice(index,1)
        this.setState({
            commentsLsit: arr
        })
    }
    render() {
        return (
            <div className="comment">
                <div className="wrap">
                    <div className="form">
                        <input type="text" placeholder="请输入用户名" value={this.state.name} onChange={this.changeName.bind(this)} />
                        <input type="text" placeholder="请输入评论内容" value={this.state.content} onChange={this.changeContent.bind(this)} />
                        <button onClick={this.submit.bind(this)}>提交</button>
                    </div>
                    <div className="comments">
                        <h2>{this.state.commentsLsit.length ? '评论区' : ''}</h2>
                        <ul className="list">
                            {
                                this.state.commentsLsit.map((comment, index) => {
                                    return (
                                        <div className="comment-item">
                                            <span className="remove" onClick={this.remove.bind(this, index)}>x</span>
                                            <div className="name">用户名：{comment.name}</div>
                                            <p>内容：{comment.content}</p>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}