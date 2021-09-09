import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map((d) => {
        return <DialogItem key={d.id} name={d.name} id={d.id} photo={d.photo} />
    });
    let messageElements = props.state.messages.map((m) => {
        return <Message key={m.id} message={m.message} />
    })




    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessage(text);
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
                            <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText} />
                            {/* <button onClick={addMessage} >Отправить</button> */}
                            <FontAwesomeIcon icon={faPaperPlane} className={classes.sendBtn} onClick={addMessage} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;