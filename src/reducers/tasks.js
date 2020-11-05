import * as type from '../constants/ActionType';
import { v4 as uuidv4 } from 'uuid';

let initialSate = [{
    id: uuidv4(),
    name: "minh",
    status: 0
}];

const myReducer = (state = initialSate, action ) => { 
    switch (action.type) {
        case type.LIST_ALL :
                return state;
            break;
        case type.ADD_TASK :
            console.log(action.tasks)
                let newTask = {
                    id: uuidv4(),
                    name: action.tasks.job_name,
                    status: action.tasks.status
                }
                state.push(newTask);
                return [...state];
            break;
        default:
                return state;
            break;
    }
}

export default myReducer;