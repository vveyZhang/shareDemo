import React, { Component } from 'react'
import { Switch, Route, Link} from 'dva/router'
import Demo1 from './Demo1'
import Demo2 from './Demo2'
import styles from '../../index.less'
export default class index extends Component {
	render() {
		return (
			<div>
				<div className={styles.nav}>
					<Link to='/image/demo1' >demo1</Link>
					<Link to='/image/demo2' >demo2</Link>
				</div>
				<Switch>
					<Route path='/image/demo1'   component={Demo1} />
					<Route path='/image/demo2'   component={Demo2} />
				</Switch>

			</div>


		)
	}
}
