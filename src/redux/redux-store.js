import { applyMiddleware, combineReducers, createStore } from "redux";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import dialogReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import usersReducer from "./Users-reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware) );

window.store = store

export default store