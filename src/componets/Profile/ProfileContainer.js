import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile-reducer'
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 19932
        }
        this.props.getProfile(userId)
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


let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getProfile })(WithURLDataContainerComponent)
