import React from 'react';

import changeLogin from './actions/changeLogin';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';

class Logout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            is_logged_in: props.login
        };

        this.onChangeLogin = this.onChangeLogin.bind(this);
    }

    onChangeLogin(){
        this.setState({is_logged_in: false});
    
        localStorage.setItem('is_logged_in', false)

        this.props.actions.login(false);
    }

    render() {
        return (
            <div>
                <h1>Logout page</h1>
                <Link to="/">
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

export default connect(mapStateToProps, mapDispatchToProps)(Logout);