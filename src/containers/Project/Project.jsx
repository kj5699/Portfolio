import React, { useEffect, useState } from 'react'
import './Project.scss';
import './ProjectModal.scss';
import { Button, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import SectionHeader from '../SectionHeaders/sectionHeader';
import { NavLink } from 'react-router-dom';

const projects=[
        
    {
        id:'3',
        title:'EzyMenu',
        coverImage:'/images/RP/RP-Cover.PNG',
        description:'Restraw Portal',
        detailedDiscription:'Multi Tenant Application . Clients (Restaurants/ Cafes/ Hotels) can register , create their customized menu.Track Live orders , trace order , accept/reject orders. manage order History. Create Custom QR - Codes and Discount Offers.',
        images:[
            {src:'/images/RP/RP-1.PNG', caption:'RP-1', altText:''},
            {src:'/images/RP/RP-2.PNG', caption:'RP-2', altText:''},
            {src:'/images/RP/RP-3.PNG', caption:'RP-3', altText:''},
            {src:'/images/RP/RP-4.PNG', caption:'RP-4', altText:''},
            {src:'/images/RP/RP-5.PNG', caption:'RP-5', altText:''},
            {src:'/images/RP/RP-6.PNG', caption:'RP-6', altText:''},
            {src:'/images/RP/RP-7.PNG', caption:'RP-7', altText:''},
            {src:'/images/RP/RP-8.PNG', caption:'RP-8', altText:''},
            {src:'/images/RP/RP-9.PNG', caption:'RP-9', altText:''},
            {src:'/images/RP/RP-11.PNG', caption:'RP-11', altText:''},

        
        ],
        filter:'React'
    },{
        id:'2',
        title:'EzyMenu',
        coverImage:'/images/CP/CP-3.PNG',
        description:'Customer Portal',
        detailedDiscription:'A QR code based food ordering web app. Can be used in cafes, restaurants, and hotels. Pay using UPI or Pay later. Customize your dishes and order without waiting for waiters to attend. Get live updates of your orders.',
        images:[
            {src:'/images/CP/CP-1.PNG', caption:'CP-1', altText:''},
            {src:'/images/CP/CP-2.PNG', caption:'CP-2', altText:''},
            {src:'/images/CP/CP-3.PNG', caption:'CP-3', altText:''},
            {src:'/images/CP/CP-4.PNG', caption:'CP-4', altText:''},
            {src:'/images/CP/CP-5.PNG', caption:'CP-5', altText:''},
            {src:'/images/CP/CP-6.PNG', caption:'CP-6', altText:''},
            {src:'/images/CP/CP-7.PNG', caption:'CP-7', altText:''},
            {src:'/images/CP/CP-8.PNG', caption:'CP-8', altText:''},
            {src:'/images/CP/CP-9.PNG', caption:'CP-9', altText:''}
        
        ],
        filter:'React'
        
    },

    {
        id:'1',
        title:'BookShop',
        coverImage:'/images/BS/Bs-1.PNG',
        description:'MERN STACK',
        detailedDiscription:'E-commerce App for Books (MERN tech based full stack application). Role Based Authentication.(Admin Login and User Lo',
        images:[
            {src:'/images/BS/Bs-1.PNG', caption:'BS-1', altText:''},
            {src:'/images/BS/Bs-2.PNG', caption:'BS-2', altText:''},
            {src:'/images/BS/Bs-3.PNG', caption:'BS-3', altText:''},
            {src:'/images/BS/Bs-4.PNG', caption:'BS-4', altText:''},
            {src:'/images/BS/Bs-5.PNG', caption:'BS-5', altText:''},
            {src:'/images/BS/Bs-6.PNG', caption:'BS-6', altText:''},
            {src:'/images/BS/Bs-7.PNG', caption:'BS-7', altText:''},
            {src:'/images/BS/Bs-8.PNG', caption:'BS-8', altText:''},
            {src:'/images/BS/Bs-9.PNG', caption:'BS-9', altText:''}
        ],
        siteLink:'https://bookstore-3b245.web.app/',
        filter:'React',
    },
    {
        id:'4',
        title:'Place Share',
        coverImage:'/images/PS/Ps-2.PNG',
        description:'',
        detailedDiscription:'',
        images:[
            {src:'/images/PS/Ps-1.PNG', caption:'BS-1', altText:''},
            {src:'/images/PS/Ps-2.PNG', caption:'BS-1', altText:''},
            {src:'/images/PS/Ps-3.PNG', caption:'BS-1', altText:''}

        ],
        filter:'React'
    },
    {
        id:'5',
        title:'Face Mask Detector',
        coverImage:'https://www.ideas2it.com/wp-content/uploads/2020/09/Facemask-Detection-Blog.jpg',
        description:'Pytorch | Python | Deep Learning',
        detailedDiscription:'',
        images:[
            {src:'/images/FMD.GIF', caption:'BS-1', altText:''},
        ],
        filter:'Python/ML'
    },
    // {
    //     id:'6',
    //     title:'Facebook Clone',
    //     coverImage:'',
    //     description:'React',
    //     detailedDiscription:'',
    //     images:[
    //          {src:'/images/BS/Bs-1.PNG', caption:'BS-1', altText:''},
    //         {src:'/images/BS/Bs-2.PNG', caption:'BS-2', altText:''},
    //         {src:'/images/BS/Bs-3.PNG', caption:'BS-3', altText:''},
    //         {src:'/images/BS/Bs-4.PNG', caption:'BS-4', altText:''},
    //         {src:'/images/BS/Bs-5.PNG', caption:'BS-5', altText:''},
    //         {src:'/images/BS/Bs-6.PNG', caption:'BS-6', altText:''},
    //         {src:'/images/BS/Bs-7.PNG', caption:'BS-7', altText:''},
    //         {src:'/images/BS/Bs-8.PNG', caption:'BS-8', altText:''},
    //         {src:'/images/BS/Bs-9.PNG', caption:'BS-9', altText:''}
        
    //     ]
    // },
    

];



const ProjectModal= ({isOpen,project})=>{

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === project.images.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? project.images.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    } 

      const slides = project?.images.map((item) => {
        console.log(project?.images)
        return (
          <CarouselItem 
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item}
          >
            <img src={item.src} className='d-block w-100 h-100' alt={item.altText} />
            <CarouselCaption style={{color:'black'}} captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });
        const [open, setOpen]= useState(isOpen)
        const toggle=()=>{
            setOpen(prev=>!prev)
        }
        useEffect(()=>{
            setOpen(isOpen)
        },[isOpen, project])
        return <Modal isOpen={open} toggle={toggle} unmountOnClose 
        size="md"   >
            {/*  style={{maxWidth: '60vw', maxHeight: '80vh', width: '100%', height: '80vh'}}  */}
                
            <ModalBody className={'carousal-container'}>
            
            <Carousel 
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                enableTouch

                >
                <CarouselIndicators items={project.images} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            </ModalBody>
            <ModalBody>    
                <div className='project-title'>
                    <h4>{project.title}</h4>
                    <h6> {project.description}</h6>

                </div>
                <div className='project-description'>
                    {project.detailedDiscription}
                </div>
            </ModalBody>
            <ModalFooter toggle={toggle} charCode="X">
                
                <Button outline color="info" >

                    <a href={project?.siteLink} target="_blank" >Visit My site</a>
                </Button>
                
            </ModalFooter>
        </Modal>

}

const Project = () => {


    const [filter, setfilter]= useState('All');
    const [modal, setModal] = useState([false,null])
    const [filteredProjects, setfilteredProjects] =useState([])

    const openProject=(e,project)=>{
        e.preventDefault();
        setModal([true, project])
    }
    useEffect(()=>{
        console.log('Project Modal', modal);
    },[modal])
    useEffect(()=>{
        setfilteredProjects(projects)
    },[])
    useEffect(()=>{
        if(filter!=='All'){
            const p= projects.filter(project=>project.filter===filter);
            setfilteredProjects(p);
        }else{
            setfilteredProjects(projects);
        }
        
    },[filter])
    return (
            <section className='project-section' id='project'>
                <SectionHeader sectionName={'Projects'} />
                <div className="filter-wrap">
                    <div className="flex row">
                        <div className={`filter ${filter==='All'?'active':''}`}  onClick={()=>setfilter('All')}> All </div>
                        <div className={`filter ${filter==='React'?'active':''}`}   onClick={()=>setfilter('React')}> Web Apps</div>
                        <div className={`filter ${filter==='Python/ML'?'active':''}`}   onClick={()=>setfilter('Python/ML')}> Python/ML </div>
                        {/* <div className={`filter ${filter==='OpenCv'?'active':''}`}   onClick={()=>setfilter('OpenCv')}> OpenCv </div> */}
                    </div>
                </div>

                <div id='gallary' className= {' animated'}>
                    {
                        filteredProjects.map(p=>(
                            <div className="mix" >
                                    <div>
                                        <div className="card" style={{
                                        background:p.coverImage=== ''? `url(https://unsplash.it/1000/1000/?random&pic=${p.id}) center center/cover`: `url('${p.coverImage}') center/cover` }}/>
                                        <div className='text'>
                                            <div>
                                                <div className="bold">
                                                    {p.title}
                                                </div>
                                                <span className="highlighted" >
                                                    {p.description}
                                                </span>
                                            </div>
                                            <div>
                                                <Button onClick={(e)=>openProject(e,p)}>
                                                    Take A Look
                                                </Button>
                                            </div>

                                        </div>
                                    </div>
                            </div>
                        ))
                    }
                </div>

                {
                    modal[0]?
                    <ProjectModal isOpen={true} project={modal[1]}/>:null
                }
                
                
            </section>
            
        
    )
}

export default Project
