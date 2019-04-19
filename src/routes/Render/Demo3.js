import React, { Component, PureComponent } from 'react'
import _ from 'loadsh'
export default class Demo3 extends Component {
	state = {
		title: "我是标题",
		content: {
			item: 1
		}
	}
	render() {
		const { title, content } = this.state;
		console.log('父组件render')
		return (
			<div>
				父组件
				<p>标题：{title}</p>
				<button onClick={() => {
					const content = this.state.content;
					content.item = 2;
					this.setState({
						title: "我是标题",
						// content:{
						// 	item:2
						// }
					})
				}
				} >点击改变标题</button>
				<Children content={content}  />
			</div>
		)
	}
}

class Children extends PureComponent {
	render() {
		console.log('子组件render')
		// const { content } = this.props;
		return (<div>
			我是子组件,
			我接收的内容:{
				// content.item
			}
		</div>)
	}
}
