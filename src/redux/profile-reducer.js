const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const LIKE_POST = 'LIKE-POST'
const REMOVE_LIKE_POST = 'REMOVE-LIKE-POST'

let initialState = {
    // posts: [
    //     { id: 1, postContent: "Waht's up!!!", likesCount: 2 },
    //     { id: 2, postContent: "It's my first post", likesCount: 5 },
    //     { id: 3, postContent: "Just a prank bro", likesCount: 4 },
    //     { id: 4, postContent: "I LOVE IT", likesCount: 78 },
    // ],
    // initialValue: 'local-vk.com'
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


export const addPostAC = () => ({ type: ADD_POST })

export const updateNewPostTextAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile }) 

export default profileReducer