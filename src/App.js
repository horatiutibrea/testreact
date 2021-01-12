import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './Home';
import Login from './Login';
import Form from './Form';
import Logout from './Logout';
import store from './store/createStore';


class App extends Component {
    render() {
        return(
            <Provider store = {store}>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/login' component={Login} />
                            <Route path='/form' component={Form} />
                            <Route path='/logout' component={Logout} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;