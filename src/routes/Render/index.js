import React, { Component } from 'react'
import { Switch, Route, Link} from 'dva/router'
import Demo1 from './Demo1'
import Demo2 from './Demo2'
import Demo3 from './Demo3'
import styles from '../../index.less'
export default class index extends Component {
	render() {
		return (
			<div>
				<div className={styles.nav}>
					<Link to='/render/demo1' >demo1</Link>
					<Link to='/render/demo2' >demo2</Link>
					<Link to='/render/demo3' >demo3</Link>
				</div>
				<Switch>
					<Route path='/render/demo1'   component={Demo1} />
					<Route path='/render/demo2'   component={Demo2} />
					<Route path='/render/demo3'   component={Demo3} />
				</Switch>

			</div>


		)
	}
}
