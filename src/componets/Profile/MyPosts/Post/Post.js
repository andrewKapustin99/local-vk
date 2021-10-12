import React from "react"
import classes from './Post.module.css'
import userPhoto from '../../../../assets/images/Wa4vBSHaZI4(1).jpg'

const Post = (props) => {
    return (
        <div className={classes.item}>
            {/*  */}
            
            <img src={userPhoto}></img>
            {/*  */}
            <p>{props.message}</p>
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post