const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SEND_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, postContent: "Waht's up!!!", likesCount: 2 },
                { id: 2, postContent: "It's my first post", likesCount: 5 },
                { id: 3, postContent: "Just a prank bro", likesCount: 4 },
                { id: 4, postContent: "I LOVE IT", likesCount: 78 },
            ],
            newPostText: 'local-vk.com'
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Andrew', activeStatus: true, photo: 'https://assets2.rappler.com/2021/03/Screen-Shot-2021-03-31-at-2.00.48-PM-1617170588015-546.png' },
                { id: 2, name: 'Dima', activeStatus: true, photo: 'https://www.denofgeek.com/wp-content/uploads/2021/02/Attack-On-Titan-Season-4-Episode-11-Gabi-Horse.jpg?fit=1200%2C675' },
                { id: 3, name: 'Gena', activeStatus: true, photo: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5d812809a7f726806ded7cdeebc018bbbc3346af284b6560e84fe48f3762ccf6._SX1080_.jpg' },
                { id: 4, name: 'Sveta', activeStatus: true, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVdRh_V6V3ymGVkqd8-QerhbXTZm04eHvFA&usqp=CAU' },
                { id: 5, name: 'Sasha', activeStatus: true, photo: 'https://i.redd.it/sui0nkpcauj61.jpg' },
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "What's up !!!!" },
                { id: 3, message: "LOL" },
                { id: 5, message: "sdsdsadsdsd" },

            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('state was changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // {type: 'ADD-POST'}
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
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.messagesPage.newMessageText
            };
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}


export const addPostActionCreator = () => ( {type: ADD_POST} )
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const sendMessageActionCreator = () => ( {type: SEND_MESSAGE} )
export const uppdateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    newText: text
})

export default store;
