import { SET_DATES } from "./types";
const initialState = {
    date_Start : '',
    date_End : '',
};

const casesReducer = (state = initialState, action) => {
    switch (action.type) {
        //----------------------//
        case SET_DATES:
            return action.payload
        //----------------------//

        default: return state
    }
}

export default casesReducer;