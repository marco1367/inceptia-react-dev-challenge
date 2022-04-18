import { PRUEBA_TYPE } from "./types";
const initialState = {};

const pruebaReducer = (state = initialState, action) => {
    switch (action.type) {
        //----------------------//
        case PRUEBA_TYPE:
            return {
                ...state,
                prueba: action.payload,
            }
        //----------------------//

        default: return state
    }
}

export default pruebaReducer;