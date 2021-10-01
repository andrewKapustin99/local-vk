import { profileAPI } from "../api/profile-api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: [],
    newPostText: 'local-vk.com',
    profile: null
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
        default:
            return state;
    }
}


export const addPost = () => ({ type: ADD_POST })

export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile }) 

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export default profileReducer
