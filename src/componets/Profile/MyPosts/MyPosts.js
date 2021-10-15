import React from "react"
import classes from './MyPosts.module.css'
import { Field, reduxForm } from 'redux-form'
import Post from './Post/Post'
import { maxLengthCreator, requiredField } from "../../../utils/validators/validators"
import { Textarea } from "../../Common/FormsControls/FormsControls"

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component = {Textarea}
                    name={'newPostText'}
                    placeholder={'Расскажите что у вас происходит ...'}
                    validate={[requiredField, maxLength10]}
                />
            </div>

            <div>
                <button>Отправить</button>
            </div>

        </form>
    )
}

const AddPostReduxForm = reduxForm({ form: 'profileAddPostForm' })(AddNewPostForm)


const MyPosts = (props) => {

    let postElemetns = props.posts.map((element) => {
        return <Post message={element.postContent} likesCount={element.likesCount} key={element.id} />
    })

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            My posts
            <div>
                {/* <textarea onChange={onPostChange} value={props.newPostText}/>
                <button onClick={ onAddPost }>Add Post</button> */}
                <AddPostReduxForm onSubmit={addNewPost} />
            </div>
            <div className={classes.posts}>
                {postElemetns}
            </div>
        </div>
    )
}


export default MyPosts