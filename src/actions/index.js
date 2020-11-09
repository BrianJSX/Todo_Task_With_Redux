import * as type from '../constants/ActionType';

//list all
export const listall = () => {
    return {
        type: type.LIST_ALL
    }
}

//add tasks
export const addTask = (tasks) => {
    return {
        type: type.ADD_TASK,
        tasks
    }
}

//destroy form 
export const destroyTask = (data) => {
    return {
        type: type.DESTROY_FORM,
        data
    }
}
//destroy form 
export const updateTask = (data) => {
    return {
        type: type.UPDATE_TASK,
        data
    }
}

//open form 
export const openForm = () => {
    return {
        type: type.OPEN_FORM,
    }
}

//close form 
export const closeForm = () => {
    return {
        type: type.CLOSE_FORM,
    }
}

