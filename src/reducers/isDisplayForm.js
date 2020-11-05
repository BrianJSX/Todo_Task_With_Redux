import * as type from '../constants/ActionType';
let inititalState = false;

const myReducer = (state = inititalState, action ) => {

    switch (action.type) {
        case type.OPEN_FORM:
                state = true;
                return state;
            break;
        case type.CLOSE_FORM:
                state = false;
                return state;
            break;
        default:
            return state
            break;
    }
    
}

export default myReducer;