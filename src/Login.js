import React from 'react';

import changeLogin from './actions/changeLogin';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            is_logged_in: props.login
        };

        console.log(this.state.is_logged_in);
        this.onChangeLogin = this.onChangeLogin.bind(this);
    }

    onChangeLogin(){
        this.setState({is_logged_in: true});
    
        localStorage.setItem('is_logged_in', true)

        this.props.actions.login(true);

        console.log(this.state.is_logged_in);
    }

    render() {
        return (
            <div>
                <h1>Login page</h1>
                <Link to="/form">
                    <button onClick = {() => this.onChangeLogin()}>Submit</button>
                </Link>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        is_logged_in: state.login.is_logged_in
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            login: changeLogin
        }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);