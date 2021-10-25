import React from "react";
import classes from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";


let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={classes.wrapper}>
            <div>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                </NavLink>
            </div>
            <div className={classes.wrap_padding}>
                <div className={classes.info_wrap}>
                    <h4>{user.name}</h4>
                    <p>{user.status}</p>
                </div>
                {user.followed
                    ? <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        className={classes.unfollow}
                        onClick={() => { unfollow(user.id) }}>
                        Unfollow</button>

                    : <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        className={classes.follow}
                        onClick={() => { follow(user.id) }}>
                        Follow</button>
                }
            </div>
        </div>
    )
}

export default User;