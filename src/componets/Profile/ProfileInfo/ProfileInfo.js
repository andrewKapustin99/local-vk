import React from "react"
import Preloader from "../../Common/Preloader/Preloader"
import classes from './ProfileInfo.module.css'
import basicPhoto from '../../../assets/images/user.png'
import { NavLink } from "react-router-dom"
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileStaus from './ProfileStatus'

const ProfileInfo = (props) => {
    
    
    if(!props.profile) {
        return <Preloader/>
    } else {
        

        return (
            <div>
            
                <div className={classes.profile_info_wrap}>

                    <div className={classes.img_wrap}>
                        { props.profile.photos.large
                        ? <img src={props.profile.photos.large} /> 
                        : <img src={basicPhoto} /> }
                    </div>

                    <div className={classes.info_wrap}>
                        <div className={classes.infoItem}>
                            <h3>{props.profile.fullName}</h3>
                            <ProfileStaus status={props.status} />
                            {/* <span>{props.profile.aboutMe}</span> */}
                        </div>

                        { props.profile.lookingForAJob ? <div className={classes.infoJob}>
                            <span>Looking for a job</span>
                            <span>status 2</span>
                        </div> : null }
                        
                        <div className={classes.socialNet}>
                            social networks
                            {/* <div className={classes.logo_wrap}>
                                <a href={'https://'+props.profile.contacts.instagram}>
                                    <FontAwesomeIcon icon={faFacebookF} className={classes.logoIcon}/>
                                </a>
                            </div> */}
                            

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo