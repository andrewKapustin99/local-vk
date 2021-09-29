import React from "react";
import classes from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import { followUser, unfollowUser } from "../../api/api";


let Users = (props) => {

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
                            ? <button onClick={() => {
                                // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                //     withCredentials: true,
                                //     headers: {
                                //         "API-KEY": '457ce42a-eb34-4037-8307-e0a6a834256e'
                                //     }
                                // })
                                unfollowUser(u.id).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }} className={classes.unfollow}>Unfollow</button>

                            : <button onClick={() => {
                                // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                                //     withCredentials: true,
                                //     headers: {
                                //         "API-KEY": '457ce42a-eb34-4037-8307-e0a6a834256e'
                                //     }
                                // })
                                followUser(u.id).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                            }} className={classes.follow}>Follow</button>
                        }
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Users;