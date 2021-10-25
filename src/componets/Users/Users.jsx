import React from "react";
import classes from './Users.module.css'
import Paginator from "../Common/Paginator/Paginator";
import User from './User'


let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    console.log(props);
    return (
        <div>
            <div className={classes.wrap_element}>
                {users.map(u => {
                    return <User key={u.id}
                        user={u}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />
                })}
            </div>

            <div className={classes.paginator_wrap}>
                <Paginator currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    totalItemsCount={totalUsersCount}
                    pageSize={pageSize}
                />
            </div>
        </div>
    )
}

export default Users;