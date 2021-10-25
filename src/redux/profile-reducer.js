import { profileAPI } from "../api/profile-api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = "DELETE-POST"

let initialState = {
    posts: [
        { id: 1, postContent: "Waht's up!!!", likesCount: 2 },
        { id: 2, postContent: "It's my first post", likesCount: 5 },
        { id: 3, postContent: "Just a prank bro", likesCount: 4 },
        { id: 4, postContent: "I LOVE IT", likesCount: 78 },
    ],
    profile: null,
    status: ""
}

let createUniqId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                // id: 5,
                id: createUniqId(),
                postContent: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
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
        case DELETE_POST: 
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        default:
            return state;
    }
}


export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })

export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile }) 

export const setStatus = (status) => ({type: SET_STATUS, status})

// THUNK
export const getProfile = (userId) => {
    return async(dispatch) => {
        let response = await profileAPI.getProfile(userId)
        
        dispatch(setUserProfile(response.data))
    }
} 
export const getStatus = (userId) => {
    return async(dispatch) => {
        let response = await profileAPI.getStatus(userId)
        
        dispatch(setStatus(response.data))
    }
}
export const updateStatus = (status) => {
    
    return async(dispatch) => {
        let response = await profileAPI.updateStatus(status)
       
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export default profileReducer
