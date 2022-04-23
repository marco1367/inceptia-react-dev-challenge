import { GET_CLIENTS } from "./types";

const initialState = null;

const clientsReducer = (state = initialState, action) => {
    switch (action.type) {
        //----------------------//
        case GET_CLIENTS:
            return action.payload
        //----------------------//

        default: return state
    }
}

export default clientsReducer;