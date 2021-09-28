import React from "react";
import * as axios from "axios";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { addPostAC, updateNewPostTextAC, setUserProfileAC } from '../../redux/profile-reducer'

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}


let mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = dispatch => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextAC(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostAC())
        },
        setUserProfile: (userProfile) => {
            dispatch(setUserProfileAC(userProfile))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)