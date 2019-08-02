import {NEW_USER} from '../Action/ActionType';

const initState = {
    username : 'Anonymous'
}

const UserNameReducer = (state = initState, action) => {
    switch(action.type) {
        case NEW_USER : 
        console.log(action.payload, 'payload')
        return {
            ...state,
            username : action.payload !== '' ? action.payload : 'Anonymous'
        }
        default :
        return state
    }
}

export default UserNameReducer;