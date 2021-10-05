// JSX не работает без импорта reacr 
import React from "react";
import Users from "./Users";
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from "../../redux/Users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";


// Container -> Class -> Preaent.Comp


// Class
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null }
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

// __________________________________________________________________________________________________________________________

// Container
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }),
    withAuthRedirect,
)(UsersContainer)
