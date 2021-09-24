import React from "react";
import Users from "./Users";
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from "../../redux/Users-reducer";


let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
    }
}
 
let masDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, masDispatchToProps)(Users)
