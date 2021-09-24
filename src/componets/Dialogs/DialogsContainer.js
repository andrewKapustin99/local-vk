import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, uppdateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

// данные из state
let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
// callbak для отправки 
let masDispatchToProps = (dispatch) => {
    return {
        uppdateNewMessageText: (text) => {
            let action = uppdateNewMessageActionCreator(text)
            dispatch(action)
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }

}

// компонента Dialogs перерисуется если в messagesPage: state.messagesPage будет новый объект
const DialogsContainer = connect(mapStateToProps, masDispatchToProps)(Dialogs)

export default DialogsContainer;