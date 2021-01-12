import React from 'react';

import { bindActionCreators } from 'redux';

import changeLogin from './actions/changeLogin';
import {connect} from 'react-redux';
import changeForm from './actions/changeForm';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            is_logged_in: props.login,
            data: props.form
        };
    }

    render() {
        return (
            <div>
                <h1>Home page</h1>
                {
                    this.is_logged_in ?
                        <table>
                            {
                                this.data.map(item => {
                                    <tr>
                                        <td>{item.user}</td>
                                        <td>{item.birthday}</td>
                                    </tr>
                                })
                            }
                        </table>
                        :
                        <h2>No data</h2>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        is_logged_in: state.login.is_logged_in,
        data: state.form.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            login: changeLogin,
            form: changeForm
        }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);