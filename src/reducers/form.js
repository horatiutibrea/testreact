const INITIAL_STATE = {
    data: []
}

export default function form (state = INITIAL_STATE, action) {
    if(action.type === "CHANGE_FORM") {
        return { data: [...state.data, action.payload] };
    } else {
        return state;
    }
}