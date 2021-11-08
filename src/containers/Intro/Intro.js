import React, { Component }from 'react';
import { withRouter } from 'react-router';
import { Button } from 'reactstrap';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import  './Intro.scss';

const Intro = props => {
    return (
        <div className="intro-wrapper" id='home'>
            <section className="intro-section">
                <div className="text">Hi I'm
                    <span className="highlight"> Jatin Khemchandani</span>
                </div>
                <div className="text">
                    I am a Full Stack Developer
                </div>
                
                <Button  className='viewProfileBtn'
                    style={{ marginTop:'1rem', width:'60%'}}
                >
                   <a href='#about'> View My Profile</a>
                </Button>
                


            </section>
            
        </div>
    )
}


export default withRouter(Intro);