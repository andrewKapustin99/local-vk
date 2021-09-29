import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import usersReducer from "./Users-reducer";

let reducers = combineReducers({
    // store._state : reducer
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store

export default store