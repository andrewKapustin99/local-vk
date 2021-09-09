import React from "react"
import classes from './MyPosts.module.css'

import Post from './Post/Post'

const MyPosts = (props) => {

    let postElemetns = props.posts.map( (element) => {
        return <Post message={element.postContent} likesCount={element.likesCount} key={element.id}/>
    })

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updatePost(text);
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={ addPost }>Add Post</button>
            </div>
            <div className={classes.posts}>
                {postElemetns}
            </div>
        </div>
    )
}

export default MyPosts