import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Dialogs.module.css';


const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <NavLink activeClassName={classes.active} className={classes.dialog} to={path} >
            <img src={props.photo} className={classes.DialogItemPhoto} />
            <div className={classes.dialogItemInfo}>
                <h4>
                    {props.name}
                </h4>
                <p>lorem lorem lorem ...</p>
            </div>
        </NavLink>
    )
}

export default DialogItem;