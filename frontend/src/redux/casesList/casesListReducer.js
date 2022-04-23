import { GET_CASES_LIST } from "./types";
const initialState = {
    list: null,
};

const casesListReducer = (state = initialState, action) => {
    switch (action.type) {
        //----------------------//
        case GET_CASES_LIST:
            return {
                ...state,
                list: action.payload
            }
        //----------------------//

        default: return state
    }
}

export default casesListReducer;