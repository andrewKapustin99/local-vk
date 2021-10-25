import React from "react";
import preloader from '../../../assets/images/Spinner-1s-200px.svg'
import classes from './Preloader.module.css'


let Preloader = (props) => {
    return (
        <div className={classes.preloader_wrap}>
            <div className={classes.preloader}>
                <img src={preloader} alt={'preloader'} />
            </div>
        </div>
    )
}

export default Preloader;