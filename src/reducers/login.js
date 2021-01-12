const INITIAL_STATE = {
    is_logged_in: false
}

export default function (state = INITIAL_STATE, action) {
    if(action.type === "CHANGE_LOGIN") {
        return {is_logged_in: action.payload};
    } else {
        return state;
    }
}