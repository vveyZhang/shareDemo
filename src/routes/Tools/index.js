import React, { Component } from 'react'
import { BindAll, Debounce, Throttle, After, Delay, Before } from 'lodash-decorators'
import styles from '../../index.less'
@BindAll()
export default class index extends Component {
	state = {
		step: 0,
		loading: false
	}
	onBind() {
		try {
			this.setState({
				step: this.state.step + 1
			})
		} catch (error) {
			console.log(error)
		}
	}
	
	@Debounce(1000)
	onDebounce() {
		this.setState({
			step: this.state.step + 1
		})
	}
	@Throttle(1000)
	onThrottle() {
		this.setState({
			step: this.state.step + 1
		})
	}
	@After(3)
	onAfter() {
		this.setState({
			step: this.state.step + 1
		})
	}
	@Before(3)
	onBefore() {
		this.setState({
			step: this.state.step + 1
		})
	}
	@Delay(3000)
	onDelay() {
		this.setState({
			step: this.state.step + 1
		})
	}


	render() {
		return (
			<div className={styles.toolsContainer} >
				<p> 当前步骤：{this.state.step}</p>
				<div>
					<p>
						<button onClick={this.onBind} >onBind +1 </button>
					</p>
					<p>
						<button onClick={this.onDebounce} >onDebounce +1 </button>
						<button onClick={this.onThrottle} >onThrottle +1</button>
					</p>
					<p>
						<button onClick={this.onAfter} >onAfter +1 </button>
						<button onClick={this.onBefore} >onBefore +1</button>
					</p>
					<p>
						<button onClick={this.onDelay} >onDelay +1 </button>
					</p>
				</div>
			</div>
		)
	}
}
