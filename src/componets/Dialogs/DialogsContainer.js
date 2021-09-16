import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, uppdateNewMessageActionCreator } from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let onMessageChange = (text) => {
        let action = uppdateNewMessageActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <Dialogs
            sendMessage={onSendMessageClick}
            uppdateNewMessageText={onMessageChange}

            messagesPage={props.store.getState().messagesPage}
        />
    )

}

export default DialogsContainer;