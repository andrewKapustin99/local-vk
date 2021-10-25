import React from "react"
import classes from './FormsControls.module.css'
import { Field } from 'redux-form'


// const FormControl = ({input, meta, child, ...props}) => {
//     const hasErorr = meta.touched && meta.error

//     return(
//         <div className={classes.formControl + ' ' + (hasErorr ? classes.error : '') }>
//             <div>
//                 {props.child}
//             </div>
//            { hasErorr && <span>{meta.error}</span>}
//         </div>
//     )
// }

export const Textarea = ({ input, meta, ...props }) => {

    const hasErorr = meta.touched && meta.error

    return (
        <div className={classes.formControl + ' ' + (hasErorr ? classes.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasErorr && <span>{meta.error}</span>}
        </div>
    )
}


export const Input = ({ input, meta, ...props }) => {

    const hasErorr = meta.touched && meta.error

    return (
        <div className={classes.formControl + ' ' + (hasErorr ? classes.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasErorr && <span>{meta.error}</span>}
        </div>
    )
}


export const createField = (component, name, placeholder, validators, type) => {
    return (
        <Field component={component}
            name={name}
            placeholder={placeholder}
            validate={validators}
            type={type}
        />
    )
}