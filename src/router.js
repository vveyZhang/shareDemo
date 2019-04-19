import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Home from './routes/Home';
import Render from './routes/Render'
import Image from './routes/Image'
import Data from './routes/Data'
import Tools from './routes/Tools'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/render"  component={Render} />
        <Route path="/image"  component={Image} />
        <Route path="/data"  component={Data} />
        <Route path="/tools"  component={Tools} />
        
        <Redirect exact from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
