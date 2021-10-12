import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../Common/FormsControls/FormsControls';
import { maxLengthCreator, requiredField } from "../../utils/validators/validators"


const maxLength1000 = maxLengthCreator(1000)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.writeMessage}>
            <div className={classes.writeMessageWrapp}>
                <div>
                    <Field
                        component = {Textarea} 
                        name={'newMessageBody'}
                        placeholder={'Введите новое сообщение'}
                        validate={[requiredField, maxLength1000]}
                    />
                </div>

                <div>
                    <button>Отправить</button>
                </div>

            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

const Dialogs = (props) => {

    let dialogElements = props.messagesPage.dialogs.map((d) => {
        return <DialogItem key={d.id} name={d.name} id={d.id} photo={d.photo} />
    });
    let messageElements = props.messagesPage.messages.map((m) => {
        return <Message key={m.id} message={m.message} />
    });

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

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
                            <AddMessageReduxForm onSubmit={addNewMessage} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Dialogs;