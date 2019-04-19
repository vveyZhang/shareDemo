import React, { Component } from 'react'
import styles from '../../index.less'
'http://newsimg.5054399.com/uploads/userup/1712/2612022235Z.jpg'
export default class Demo1 extends Component {
	state = {
		src: ""
	}
	componentDidMount() {
		window.onload = () => {
			console.log('页面加载完成，可以做后续操作....')
			this.setState({
				src: "https://image.shutterstock.com/z/stock-photo-624607103.jpg",
				
			})
		}
	}
	render() {
		const { src } = this.state
		// const src = "https://image.shutterstock.com/z/stock-photo-624607103.jpg"
		return (
			<div className={styles.imageContainer}  >
				<img src={src} />
			</div>
		)
	}
}
