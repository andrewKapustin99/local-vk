import React from "react";
import classes from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/users-api";


let Users = (props) => {
    console.log(props);

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => { props.onPageChanged(p) }} key={p} className={props.currentPage === p && classes.selectedPage} >{p}</span>
                })}
            </div>
            <div className={classes.wrap_element}>
                {props.users.map(u => <div className={classes.wrapper} key={u.id} >
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div className={classes.wrap_padding}>
                        <div className={classes.info_wrap}>
                            <h4>{u.name}</h4>
                            <p>{u.status}</p>
                        </div>
                        {u.followed
                            ? <button disabled={props.followingInProgress} onClick={() => {
                                
                                props.toggleFollowingProgress(true)
                                usersAPI.unfollowUser(u.id).then(response => {
                                    debugger
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingProgress(false)
                                    })
                            }} >Unfollow</button>
                            // }} className={classes.unfollow}>Unfollow</button>

                            : <button disabled={props.followingInProgress} onClick={() => {
                                
                                props.toggleFollowingProgress(true)
                                usersAPI.followUser(u.id).then(response => {
                                    debugger
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false)
                                    })
                            }} >Follow</button>
                            // }} className={classes.follow}>Follow</button>
                        }
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Users;