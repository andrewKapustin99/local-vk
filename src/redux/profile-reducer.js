import { profileAPI } from "../api/profile-api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState = {
    posts: [],
    newPostText: 'local-vk.com',
    profile: null,
    status: ""
}

let createUniqId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: 
            let postContentBody = state.newPostText;
            let newPost = {
                // id: 5,
                id: createUniqId(),
                postContent: postContentBody,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS: 
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}


export const addPost = () => ({ type: ADD_POST })

export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile }) 

export const setStatus = (status) => ({type: SET_STATUS, status})

// THUNK
export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
} 
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then( response => {
            debugger
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then( response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer
