import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import clientsReducer from "./clients/clientsReducer";
import casesReducer from "./cases/casesReducer";
import casesListReducer from "./casesList/casesListReducer";

const rootReducer = combineReducers({
    user: userReducer,
    clients: clientsReducer,
    casesDates: casesReducer,
    casesList: casesListReducer,
});

export default rootReducer;