import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                
                <div className={classes.dialogItem}>
                    <div className={classes.userPhoto}>
                        <img src="https://www.meme-arsenal.com/memes/f829154b6247042d8821a19015eb2f7c.jpg" />
                    </div>
                    <div className={classes.userName}>Ivan</div>
                </div>

                <div className={classes.dialogItem}>
                    <div className={classes.userPhoto}>
                        <img src="https://www.meme-arsenal.com/memes/36b78c8b7cd957e082f53148b74787ea.jpg" />
                    </div>
                    <div className={classes.userName}>Viktor</div>
                </div>

                <div className={classes.dialogItem}>
                    <div className={classes.userPhoto}>
                        <img src="https://sun9-33.userapi.com/impf/c849036/v849036354/1ec0a/dtPb-s7DRM8.jpg?size=604x503&quality=96&sign=91276460e2bcbaac1b208b198d9d541c&type=album" />
                    </div>
                    <div className={classes.userName}>Dima</div>
                </div>

                <div className={classes.dialogItem}>
                    <div className={classes.userPhoto}>
                        <img src="https://hypeava.ru/uploads/posts/2020-06/1592687813_4.jpg" />
                    </div>
                    <div className={classes.userName}>Gena</div>
                </div>

            </div>

            <div className={classes.messagesWrapper}>
                <div className={classes.statusInfo}>
                    <div className={classes.info}>
                        <h5>Ivan</h5>
                        <span>status</span>
                    </div>
                    <img src="https://www.meme-arsenal.com/memes/f829154b6247042d8821a19015eb2f7c.jpg" />
                </div>
                <div className={classes.messages}>
                    <div className={classes.message}>Hi</div>
                    <div className={classes.message}>What's up</div>
                    <div className={classes.message}>)))</div>
                    <div className={classes.message}>LOL</div>

                </div>
            </div>
        </div>
    )
}

export default Dialogs;