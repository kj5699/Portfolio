import React from 'react'
import { Col, Container, Progress, Row } from 'reactstrap';
import SectionHeader from '../SectionHeaders/sectionHeader';
import './Skill.scss';

const Skill = () => {
    return (
        <>
        
        <section className="skill-wrapper" id='skill'>
            <SectionHeader sectionName=" My Skills"   color='#fff'/>


            <div className="content">   
             <div className="skill-cards">
                 <div className="card">
                     <div className='card-content'><p>
                         Competetive Coding
                     </p>
                     </div>

                 </div>
                 <div className="card">
                    <div className='card-content'><p>
                         Frontend Development
                     </p></div>

                 </div>
                 <div className="card">
                    <div className='card-content'><p>
                         Backend Development
                    </p></div>

                 </div>
                 <div className="card">
                    <div className='card-content'><p>
                         DevOps 
                    </p></div>

                 </div>

             </div>
             <div className="skill-bars">
                <Progress multi>
                    <Progress bar className='name' value="20">React</Progress>
                    <Progress bar className='percentage' value="30">Wow!</Progress>
                    
                </Progress>
                <Progress multi>
                    <Progress bar className='name' value="20">Python</Progress>
                    <Progress bar className='percentage' value="70">Wow!</Progress>
                    
                </Progress>
                <Progress multi>
                    <Progress bar className='name' value="20">JavaScript</Progress>
                    <Progress bar className='percentage' value="80">Wow!</Progress>
                    
                </Progress>
                <Progress multi>
                    <Progress bar className='name' value="20">HTML</Progress>
                    <Progress bar className='percentage' value="65">Wow!</Progress>
                    
                </Progress>
                <Progress multi>
                    <Progress bar className='name' value="20">CSS</Progress>
                    <Progress bar className='percentage' value="80">Wow!</Progress>
                    
                </Progress>
                <Progress multi>
                    <Progress bar className='name' value="20">Meh</Progress>
                    <Progress bar className='percentage' value="35">Wow!</Progress>
                    
                </Progress>
                <Progress multi>
                    <Progress bar className='name' value="20">Meh</Progress>
                    <Progress bar className='percentage' value="45">Wow!</Progress>
                    
                </Progress>

                
                <Progress multi>
                    <Progress bar className='name' value="20">Meh</Progress>
                    <Progress bar className='percentage' value="30">Wow!</Progress>
                    
                </Progress>
                </div>
            </div>
            
        </section>
        </>
    )
}

export default Skill