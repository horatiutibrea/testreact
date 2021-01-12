import {combineReducers} from 'redux';
import login from './login';
import form from './form';

export default combineReducers ({
    login,
    form
});