import React from "react"
import { connect } from "react-redux";
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts"


// конетенерная компонента - обертка для обычной компоненты

let mapStateToProps = state => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let masDispatchToProps = dispatch => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextAC(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, masDispatchToProps)(MyPosts)

export default MyPostsContainer