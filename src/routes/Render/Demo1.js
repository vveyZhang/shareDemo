import React, { Component } from 'react'

export default class Demo1 extends Component {
	state = {
		title: "我是标题"
	}
	render() {
		const { title } = this.state;
		console.log('父组件更新')
		return (
			<div>
				组件的props和state 会引起组件的render被调用。
				<p>标题：{title}</p>
				<button onClick={() => this.setState({
					title: title == "我是标题" ? "标题改变了" : "我是标题"
				})} >点击改变标题</button>
				<Children />
			</div>
		)
	}
}

class Children extends Component {
	render() {
		console.log('子组件render')
		return (<div>
			我是子组件
		</div>)
	}
}