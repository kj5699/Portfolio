import React from 'react'
import './Contact.scss';
import {SiGmail, SiLinkedin, SiGithub,SiInstagram, SiFacebook,SiDocusign } from "react-icons/si";
import SectionHeader from '../SectionHeaders/sectionHeader';



const Contact = () => {
    return (
        <div className="contact-wrapper container-fluid" id='contact'>
            <SectionHeader sectionName='Lets Connect' color='white' / >

            {/* <div className="section-header mt-2 py-3">
                <h3>
                    Lets Connect
                </h3>
                <div>
                    I am available for hire and open to any ideas of cooperation.
                </div>

            </div> */}
            <div className="profiles mt-2 py-3">
                <div className='link-btn'>
                    
                    <span className='highlighted'>
                        <SiDocusign style={{ marginRight :'10px'}} />
                        <a href="https://drive.google.com/file/d/1STbSRHoxaNVebF7UsJnVEuUe1nwLl74m/view?usp=sharing" download>Resume</a>
                    </span>
                </div>
                <div className='link-btn'>
                    
                    <span className='highlighted'>
                        
                        <SiGmail style={{ marginRight :'10px', marginTop:'1px'}} />
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kjatin6599@gmail.com">Gmail</a>
                    </span>
                </div>
                <div className='link-btn'>
                     
                    <span className='highlighted'>
                        <SiLinkedin style={{ marginRight :'10px'}} />
                        <a href="https://in.linkedin.com/in/jatin-khemchandani-468376140"> LinkedIn</a>
                    </span>
                </div>
                <div className='link-btn'>
                    
                    <span className='highlighted'>
                        <SiGithub style={{ marginRight :'10px'}} />
                        <a href="https://github.com/kj5699">Github </a>
                    </span>
                </div>
                <div className='link-btn'>
                    
                    <span className='highlighted'>
                        <SiInstagram style={{ marginRight :'10px'}} />
                        <a href="https://www.instagram.com/jatinkhemchandani_/">Instagram</a>
                    </span>
                </div>
                <div className='link-btn'>
                    
                    <span className='highlighted'>
                    <SiFacebook style={{ marginRight :'10px'}} />
                        <a href="https://www.instagram.com/jatinkhemchandani_/">Facebook</a>
                    </span>
                </div>
               
                

            </div>
            <div className="footer mt-2 py-3">
                <p>I designed this From Scratch</p>
                <p>Based In Jaipur</p>
            </div>

            
        </div>
    )
}

export default Contact
