import React from 'react';
import classes from './Name.module.css';


const name = props => {
    return(
        <div className={classes.Name}>
            {props.children}
        </div>
    )
}

export default name;