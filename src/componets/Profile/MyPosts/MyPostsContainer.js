import React from "react"
import { connect } from "react-redux";
import { addPost, updateNewPostText } from '../../../redux/profile-reducer'
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
            let action = updateNewPostText(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPost())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts)

export default MyPostsContainer
