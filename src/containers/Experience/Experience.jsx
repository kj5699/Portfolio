import React from 'react'
import './Experience.scss';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeader from '../SectionHeaders/sectionHeader';

const Experience = () => {

    const experiences=[
        {
            id:1,
            jobTitle:'System Engineer',
            company:'Tata Consultancy Services',
            location:'Pune, Maharashtra',
            date:' Oct 2020 - Present',
            description:''

        },
        {
            id:2,
            jobTitle: 'Software Developer Intern' ,
            company:'Airavath Foundation',
            location:'Jaipur, Rajasthan',
            date:' May 2019 - July 2019',
            description:''

        },
        {
            id:3,
            jobTitle:'Data Science Intern',
            company:'Airavath Foundation',
            location:'Jaipur, Rajasthan',
            date:' Dec 2018 - Feb 2019',
            description:''

        },
        {
            id:4,
            jobTitle:'Django Developer',
            company:'HouseHelp',
            location:'Jaipur, Rajasthan',
            date:' Aug 2019 - Oct-2019 ',
            description:''

        }


    ]
    return (

        <div className="experience-wrapper" id='experience'>

            <SectionHeader sectionName={'Work Experience'} color='#fff' />
                <div className="experience-timeline-container">

                    
                    <VerticalTimeline layout={'1-column-left'}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#77966D', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #77966D' }}
                        date={`${experiences[0].date}`}
                        iconStyle={{ background: '#77966D', color: '#fff' }}
                        // icon={<WorkIcon />}
                        >
                        <h4 className="vertical-timeline-element-title my-2">{experiences[0].jobTitle}</h4>
                        <h6 className="vertical-timeline-element-subtitle">{experiences[0].company}</h6>
                        <span  style={{ fontSize:'12px', opacity:0.8, marginTop:'0.6em'}}>{` ${experiences[0].location}`}</span>
                        <p>
                           {experiences[1].description}
                        </p>
                    </VerticalTimelineElement>

                    {experiences.slice(1,).map((e)=>(
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#eee' }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                        date={`${e.date}`}
                        iconStyle={{ background: 'rgb(114, 115, 135)', color: '#fff' }}
                        // icon={<WorkIcon />}
                        >
                        <h4 className="vertical-timeline-element-title my-2">{e.jobTitle}</h4>
                        <h6 className="vertical-timeline-element-subtitle">{e.company}</h6>
                        <span  style={{ fontSize:'12px', opacity:0.8, marginTop:'0.6em'}}>{` ${e.location}`}</span>
                        <p>
                        {e.description}
                        </p>
                        </VerticalTimelineElement>
                        ))
                    }
                    {/* <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Art Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2008 - 2010"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                        <p>
                        User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2006 - 2008"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                        User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2013"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                        <p>
                        Strategy, Social Media
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2012"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                        <p>
                        Creative Direction, Visual Design
                        </p>
                    </VerticalTimelineElement> */}
                    {/* <VerticalTimelineElement
                        iconStyle={{ background: '#89ee68', color: '#fff' }}
                        // icon={<StarIcon />}
                    /> */}
                    </VerticalTimeline>
                </div>
            
        </div>
    )
}

export default Experience