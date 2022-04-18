import { USER_LOG_IN, USER_LOG_OUT } from "./types"
const initialState = {};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        //----------------------//
        case USER_LOG_IN:
            return {
                ...action.payload
            }
        //----------------------//
        case USER_LOG_OUT:
            localStorage.removeItem('user');
            return {}
        //----------------------//

        default: return state
    }
}

export default userReducer;