import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../container/login';
import Main from '../container/main';
class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/index" component={Main} />
                </Switch>
            </Router>
        );
    }
}


export default hot(module)(Routes);