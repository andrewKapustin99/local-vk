import { applyMiddleware, combineReducers, createStore, compose } from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware) ));

window.__store__ = store

export default store