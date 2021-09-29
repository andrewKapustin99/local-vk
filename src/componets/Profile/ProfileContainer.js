import React from "react";
import * as axios from "axios";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { addPostAC, updateNewPostTextAC, setUserProfileAC } from '../../redux/profile-reducer'
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        
        
        if(!userId) {
            userId = 19932
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataContainerComponent)