import React from "react"
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state'





const MyPosts = (props) => {

    let postElemetns = props.posts.map( (element) => {
        return <Post message={element.postContent} likesCount={element.likesCount} key={element.id}/>
    })

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
                <button onClick={ addPost }>Add Post</button>
            </div>
            <div className={classes.posts}>
                {postElemetns}
            </div>
        </div>
    )
}

export default MyPosts