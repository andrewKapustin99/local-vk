import React from "react"
import { connect } from "react-redux";
import { compose } from "redux";
import { addPost, updateNewPostText } from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts"


// конетенерная компонента - обертка для обычной компоненты

let mapStateToProps = state => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}


export default compose(
    connect(mapStateToProps, {updateNewPostText, addPost})
)(MyPosts)
