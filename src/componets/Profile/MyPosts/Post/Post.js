import React from "react"
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://images.immediate.co.uk/production/volatile/sites/3/2021/04/Attack-on-Titan-091343d.jpg?quality=45&resize=768,574"></img>
            <p>{props.message}</p>
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post