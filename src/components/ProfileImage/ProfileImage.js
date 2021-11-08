import React from 'react';
import classes from './ProfileImage.module.css';
import Img from './Me.jpg';


const ProfileImage = props => {
    return(
        <div className={classes.ProfileImage}>
            <img src={Img} alt='Me' />
        </div>


    )
}

export default ProfileImage;