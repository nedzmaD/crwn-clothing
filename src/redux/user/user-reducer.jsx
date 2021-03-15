import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

const userReducer= (state=INITIAL_STATE, action)=>{
    //Every function gets the agtion so swith is necessary to check if this function shoul
    //make some changes or just do default
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload
            };
    
        default:
            return state;
    }
}

export default userReducer;