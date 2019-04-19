import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import styles from '../../index.less'
const urls = ['http://pic50.photophoto.cn/20190307/0011034158153314_b.jpg', 'http://pic50.photophoto.cn/20190316/0011034185358008_b.jpg', 'http://pic50.photophoto.cn/20190315/0021033857579982_b.jpg', 'https://image.shutterstock.com/z/stock-photo-624607103.jpg', 'http://newsimg.5054399.com/uploads/userup/1712/2612022235Z.jpg']
export default class Demo2 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			current: 0 //当前需要渲染图片的序号
		}
		this.updateView = this.updateView.bind(this)
	}
	updateView() {
		const viewH = window.innerHeight + window.pageYOffset; // 可视窗口高度+滚动条高度
		const { current } = this.state;
		let _current = current;
		for (let i = current; i < urls.length; i++) {
			const top = this.images[i].getTop();
			if (viewH >= top) _current = i
		}
		this.setState({
			current: _current
		})
	}
	componentDidMount() {
		window.addEventListener('scroll', this.updateView, false);
		window.addEventListener('resize', this.updateView, false);
		this.updateView()
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.updateView);
		window.removeEventListener('resize', this.updateView);
	}
	images = []
	render() {
		const { current } = this.state;
		return (
			<div className={styles.imageContainer2} >
				{
					urls.map((item, index) => <Img key={index} ref={ref => ref && (this.images[index] = ref)} showImage={current >= index} src={item} />)
				}
			</div>
		)
	}
}
class Img extends Component {
	getTop() {
		const imgDom = findDOMNode(this.image);
		return imgDom.offsetTop
	}
	render() {
		const { showImage, src, ...props } = this.props;
		return (
			<img src={showImage ? src : ""}  {...props} ref={ref => ref && (this.image = ref)} />
		)
	}

}