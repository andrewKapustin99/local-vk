import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sendMessageActionCreator, uppdateNewMessageActionCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;
    
    let dialogElements = state.dialogs.map((d) => {
        return <DialogItem key={d.id} name={d.name} id={d.id} photo={d.photo} />
    });
    let messageElements = state.messages.map((m) => {
        return <Message key={m.id} message={m.message} />
    })


    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }
    let onMessageChange = (e) => {
        
        let text = e.target.value
        props.dispatch(uppdateNewMessageActionCreator(text))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogElements}
            </div>

            <div className={classes.massagesBlock}>

                <div className={classes.massagesBlockWrapp}>
                    <div className={classes.messageHeader}>
                        <p></p>
                    </div>

                    <div className={classes.messageBody}>
                        {messageElements}
                    </div>

                    <div className={classes.writeMessage}>
                        <div className={classes.writeMessageWrapp}>
                            <textarea 
                                placeholder={'Введите новое сообщение'} 
                                onChange={ onMessageChange } 
                                value={props.state.newMessageText} 
                            />
                            <button onClick={ onSendMessageClick }>Отправить</button>
                            {/* <FontAwesomeIcon icon={faPaperPlane} className={classes.sendBtn} onClick={addMessage} /> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Dialogs;