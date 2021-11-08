
import React from 'react';
import classes from './Main.module.css';
import Header from '../../containers/Header/Header';
import Intro from '../../containers/Intro/Intro';


const Main = props => {
    return(
        <div className={classes.Main}>

            <Header /> 
            <main className={classes.Main}>
                {props.children}
            </main>

        </div>
    )
}

export default Main;