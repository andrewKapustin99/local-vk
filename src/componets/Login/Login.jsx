import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { requiredField } from '../../utils/validators/validators'
import { Input } from '../Common/FormsControls/FormsControls'
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router'
import classes from '../Common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component = {Input} name={"email"} placeholder={'login'} validate={[requiredField]} />
            </div>
            <div>
                <Field component = {Input} name={"password"} placeholder={'password'} validate={[requiredField]} type={'password'} />
            </div>
            <div>
                <Field component = {Input} name={"rememberMe"} type={'checkbox'} /> remember me
            </div>
           { props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
// с помощью HOC (LoginReduxForm) в LoginForm прокидывается handleSubmit, form вызывает этот handleSubmit

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login} )(Login)