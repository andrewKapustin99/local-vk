import React from "react"
import classes from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    

    let postElemetns = props.posts.map( (element) => {
        return <Post message={element.postContent} likesCount={element.likesCount} key={element.id}/>
    })

    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
                <button onClick={ onAddPost }>Add Post</button>
            </div>
            <div className={classes.posts}>
                {postElemetns}
            </div>
        </div>
    )
}

export default MyPosts