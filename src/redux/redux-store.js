import { combineReducers, createStore } from "redux";
import dialogReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'

let reducers = combineReducers({
    // store._state : reducer
    profilePage: profileReducer,
    messagesPage: dialogReducer
});

let store = createStore(reducers);

export default store