const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    posts: [
        { id: 1, postContent: "Waht's up!!!", likesCount: 2 },
        { id: 2, postContent: "It's my first post", likesCount: 5 },
        { id: 3, postContent: "Just a prank bro", likesCount: 4 },
        { id: 4, postContent: "I LOVE IT", likesCount: 78 },
    ],
    newPostText: 'local-vk.com'
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
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer