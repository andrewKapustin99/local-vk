import React from "react"
import classes from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    
    const hasErorr = meta.touched && meta.error

    return(
        <div className={classes.formControl + ' ' + (hasErorr ? classes.error : '') }>
            <div>
                <textarea {...input} {...props} />
            </div>
           { hasErorr && <span>{meta.error}</span>}
        </div>
    )
}