const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state, action) => {
    
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            postContent: this._state.profilePage.newPostText,
            likesCount: 0
        };
        if (this._state.profilePage.newPostText) {
            this._state.profilePage.posts.push(newPost);
        } else {
            alert('write more symbols')
        }
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
    }
    
    return state;
}