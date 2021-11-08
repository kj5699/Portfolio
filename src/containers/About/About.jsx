import React from 'react'
import './About.scss'
// import profileImage from '/images/profile.jpeg';
import SectionHeader from '../SectionHeaders/sectionHeader';

const About = () => {
    return (
        <div className='about-wrapper constainer-fluid py-2' id='about'>
           
            <SectionHeader  sectionName="Who's This Guy?" color='#fff'/>
            <div className='row justify-content-center my-5'>
            <div className='col-md-4 mx-4 my-3'>
                    <img  src={'/images/profile.jpeg'} alt='Profile'></img>

                </div>
            
            <div className='my-3 col-md-4 ml-3 text-center'>
                
                <p className='px-3 mb-2' style={{color: 'white'}}>
                Frontend Developer - React  | Node Js Developer | Machine Learning Novice
                </p>
                <p className='px-3'>
                    Inspired to code and create something that adds value to life of millions.
                </p>
                <p className='px-3'> 
                    I'm B.TECH in computer science engineering (2020) and 
                    currently working with TCS as a System Engineer. 
                    My Skills aligns as MERN Stack Developer.
                </p>
                <p className='px-3'>
                    I usually spend my leisure time jamming with my guitar, playing cricket or
                    learning new skills ,Recently  I started learning Spanish online. 
                </p>
            </div>
            
            </div>
            
        </div>
    )
}

export default About
