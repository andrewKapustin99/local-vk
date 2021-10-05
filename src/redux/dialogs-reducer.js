const SEND_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState = {
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

const dialogReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let messageBody = state.newMessageText;

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 4, message: messageBody }]
            }

        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newText
            }

        default:
            return state;
    }
}

export const sendMessage = () => ({ type: SEND_MESSAGE })
export const uppdateNewMessage = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    newText: text
})

export default dialogReducer