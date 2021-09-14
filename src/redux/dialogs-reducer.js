const SEND_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

const dialogReducer = (state, action) => {
    
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ( {type: SEND_MESSAGE} )
export const uppdateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    newText: text
})

export default dialogReducer