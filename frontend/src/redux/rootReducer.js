import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import clientsReducer from "./clients/clientsReducer";

const rootReducer = combineReducers({
    user: userReducer,
    clients: clientsReducer,
});

export default rootReducer;