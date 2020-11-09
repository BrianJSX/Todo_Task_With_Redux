import * as type from '../constants/ActionType';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

let initialSate = [];

const myReducer = (state = initialSate, action ) => { 
    switch (action.type) {
        case type.LIST_ALL :        //show 
            return state;
        case type.ADD_TASK :        //add
            let newTask = {
                id: uuidv4(),
                name: action.tasks.job_name,
                status: action.tasks.status
            }
            state.push(newTask);
            return [...state];
        case type.UPDATE_TASK: 
            let index =_.findIndex(state, (state) => {
                return state.id == action.data;
            });
            let cloneTask = {...state[index]};
            cloneTask.status = !cloneTask.status;
            state[index] = cloneTask;
            return [...state];
        case type.DESTROY_FORM:     //destroy
            _.remove(state, (state) => {
                return state.id === action.data;
            });
            return [...state];
        default:
                return state;
    }
}

export default myReducer;