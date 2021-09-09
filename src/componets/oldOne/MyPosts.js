import React from "react"
import classes from './MyPosts.module.css'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyPosts = () => {
    return (
        <div>
            <div>
                <h4>My Posts</h4>
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    <div className={classes.item__header}>
                        <img src="https://images.immediate.co.uk/production/volatile/sites/3/2021/04/Attack-on-Titan-091343d.jpg?quality=45&resize=768,574" />
                        <h5>Name</h5>
                    </div>
                    <div className={classes.item__content}>
                        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                    </div>
                </div>
                
                <div className={classes.item}>
                    <div className={classes.item__header}>
                        <img src="https://images.immediate.co.uk/production/volatile/sites/3/2021/04/Attack-on-Titan-091343d.jpg?quality=45&resize=768,574" />
                        <h5>Name</h5>
                    </div>
                    <div className={classes.item__content}>
                        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                    </div>
                </div>

                <div className={classes.item}>
                    <div className={classes.item__header}>
                        <img src="https://images.immediate.co.uk/production/volatile/sites/3/2021/04/Attack-on-Titan-091343d.jpg?quality=45&resize=768,574" />
                        <h5>Name</h5>
                    </div>
                    <div className={classes.item__content}>
                        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                    </div>
                </div>

                <div className={`${classes.item} ${classes.addNewItem}`} id="addPost">
                    <div className={classes.addItem}>
                        <FontAwesomeIcon icon={faPlus} className={classes.plusItem}/>
                        {/* <p>Add new post</p> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyPosts