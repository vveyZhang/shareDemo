import React, { Component,PureComponent } from 'react'
import _ from 'loadsh'
export default class Demo2 extends Component {
	state = {
		title: "我是标题"
	}
	render() {
		const { title } = this.state;
		return (
			<div>
				父组件
				<p>标题：{title}</p>
				<button onClick={() => {
					this.setState({
						title: title == "我是标题" ? "标题改变了" : "我是标题"
					})
				}
				} >点击改变标题</button>
				<Children />
			</div>
		)
	}
}

class Children extends PureComponent {
	// shouldComponentUpdate(nextprops, nextstate) {
	// 	return !_.isEqual(nextprops, this.props) || !_.isEqual(nextstate, this.state)
	// }
	render() {
		console.log('子组件render')
		return (<div>
			我是子组件
		</div>)
	}
}

class Children2 extends PureComponent {
	render() {
		console.log('子组件render')
		return (<div>
			我是子组件
		</div>)
	}
}