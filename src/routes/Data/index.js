import React, { Component } from 'react'
import _ from 'loadsh'
import { Throttle } from 'lodash-decorators'
import styles from '../../index.less'
const data = new Array(100000)
export default class index extends Component {
	constructor(props) {
		super(props)
		this.updateView = this.updateView.bind(this);
		this.state = {
			start: 0,
			end: 10,
			renderHeight: 550,
			scrollTop: 0,
			reserveTop: 0
		}

	}

	shouldComponentUpdate(nextpros, nextstate) {
		return !_.isEqual(nextstate, this.state)
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
	@Throttle(200)
	updateView() {
		// 默认渲染区域是可视区域的两倍 每条数据高度为50
		const viewHeight = window.innerHeight; //可是区域高度
		const scrollTop = window.pageYOffset; //滚动条高度
		let reserveTop = viewHeight / 2; //上限预留值
		if (scrollTop < viewHeight / 2) reserveTop = scrollTop;
		if (data.length * 50 - scrollTop - viewHeight <= viewHeight / 2) reserveTop = data.length * 50 - scrollTop - viewHeight - viewHeight / 2
		const reserveBottom = viewHeight - reserveTop //下预留值
		const start = _.findIndex(data, function (item, i) {
			return (i * 50 - scrollTop >= reserveTop)               //计算开始的渲染的序号。
		})
		const _showRows = Math.ceil((viewHeight + reserveBottom) / 50)  // 根据渲染区域计算其余内能展示的列表数量，向上取整
		const end = start + _showRows; 
		const renderHeight = (end + 1) * 50; //计算理论列表高度
		// console.log('renderHeight', renderHeight,
		// 	'------reserveTop', reserveTop,
		// 	'-----reserveBottom', reserveBottom,
		// 	'-----start', start, '----end', end)
		this.setState({
			start,
			end,
			renderHeight: renderHeight,
			scrollTop,
			reserveTop
		})
	}

	renderItem() {
		const { start, end, } = this.state
		const arr = []
		for (let i = start; i < end; i++) {
			arr.push(<li key={i} >我是第{i + 1}行</li>)
		}
		return arr
	}
	render() {
		const { renderHeight, scrollTop, reserveTop } = this.state;
		// const _data=data.fill()
		return (
			<div className={styles.dataContainer}>
				{
					<div style={{ height: renderHeight, overflow: 'hidden' }} >
						<div style={{
							width: 500, position: 'absolute',
							top: scrollTop - reserveTop,
							left: "50%", marginLeft: "-250px"
							, overflow: 'hidden'
						}} >
							{
								this.renderItem()
							}
						</div>
					</div>
				}
			</div>
		)
	}
}
