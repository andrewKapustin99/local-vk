import React from "react"
import Preloader from "../../Common/Preloader/Preloader"
import classes from './ProfileInfo.module.css'
import basicPhoto from '../../../assets/images/user.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'


const ProfileInfo = ({ profile, status, updateStatus }) => {
    
    
    if(!profile) {
        return <Preloader/>
    } else {
        

        return (
            <div>
            
                <div className={classes.profile_info_wrap}>

                    <div className={classes.img_wrap}>
                        { profile.photos.large
                        ? <img src={profile.photos.large} /> 
                        : <img src={basicPhoto} /> }
                    </div>

                    <div className={classes.info_wrap}>
                        <div className={classes.infoItem}>
                            <h3>{profile.fullName}</h3>
                            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                        </div>

                        { profile.lookingForAJob ? <div className={classes.infoJob}>
                            <span>Looking for a job</span>
                            <span>status 2</span>
                        </div> : null }
                        
                        <div className={classes.socialNet}>
                            social networks
                            {/* <div className={classes.logo_wrap}>
                                <a href={'https://'+profile.contacts.instagram}>
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