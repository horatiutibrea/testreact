import React from 'react';

import {NavLink} from 'react-router-dom';
import changeForm from './actions/changeForm';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Form extends React.Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeBirthday = this.onChangeBirthday.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            birthday: ''
        }
    }

    onChangeEmail(e){
        this.setState({email: e.target.value});
    }

    onChangeBirthday(e) {
        this.setState({birthday: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            birthday: this.state.birthday,
        };

        this.props.actions.addData(userData);

        localStorage.setItem('user', JSON.stringify(userData))
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                email: this.userData.email,
                birthday: this.userData.birthday
            })
        } else {
            this.setState({
                email: '',
                birthday: ''
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Form Page</h1>
                <div className="container">
                    <form onSubmit={() => this.onSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                        </div>
                        <div className="form-group">
                            <label>Data nasterii</label>
                            <input type="text" className="form-control" value={this.state.birthday} onChange={this.onChangeBirthday} />
                        </div>
                        <NavLink to="/">
                            <button type="submit" className="btn" onClick={e => this.onSubmit(e)}>Submit</button>
                        </NavLink>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.form.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            addData: changeForm
        }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);