const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState =  {
    posts: [
        { id: 1, postContent: "Waht's up!!!", likesCount: 2 },
        { id: 2, postContent: "It's my first post", likesCount: 5 },
        { id: 3, postContent: "Just a prank bro", likesCount: 4 },
        { id: 4, postContent: "I LOVE IT", likesCount: 78 },
    ],
    newPostText: 'local-vk.com'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST : 
            let newPost = {
                id: 5,
                postContent: state.newPostText,
                likesCount: 0
            };
            if (state.newPostText) {
                state.posts.push(newPost);
            } else {
                alert('write more symbols')
            }
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}


export const addPostActionCreator = () => ( {type: ADD_POST} )
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer