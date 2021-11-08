import React from 'react'
import { Col, Container, Progress, Row } from 'reactstrap';
import SectionHeader from '../SectionHeaders/sectionHeader';
import './Skill.scss';


const data={
    programming:[
        {
            name:'Python',
            icon:'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'
        },
        {
            name:'Javascript',
            icon:'https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg'
        },
        {
            name:'C++',
            icon:'https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png'
        },
        {
            name:'TypeScript',
            icon:'https://cdn-icons-png.flaticon.com/512/919/919832.png'
        }
    ],

    webDev:[
        {
            name:'HTML',
            icon:"https://cdn-icons-png.flaticon.com/512/919/919827.png",

        },
        {
            name:'CSS',
            icon:"https://toppng.com//public/uploads/preview/html-css-js-icons-11563328364gmstz4ubs9.png",
            
        },
        {
            name:"REACT",
            icon:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        },
        {
            name:"REDUX",
            icon:'http://assets.stickpng.com/thumbs/5848309bcef1014c0b5e4a9a.png'
        },
        {
            name:"NODE JS",
            icon:"https://cdn4.iconfinder.com/data/icons/logos-3/454/nodejs-new-pantone-white-512.png"  
        },
        {
            name:"EXPRESS JS",
            icon:"https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png",
            
        },
        {
            name:"MONGO DB",
            icon:"https://icon2.cleanpng.com/20180402/cjw/kisspng-mongodb-inc-computer-software-business-software-d-bay-leaves-5ac2915d780ea2.2723311115227006374918.jpg",

        },
        {
            name:"MYSQL",
            icon:"https://mpng.subpng.com/20180824/ktx/kisspng-mysql-workbench-computer-icons-logo-portable-netwo-thezedt-tech-tips-and-random-thoughts-5b80352110ca84.1955496015351288650688.jpg",
            
        },
        {
            name:"RESTful API's",
            icon:"https://www.clipartmax.com/png/middle/279-2792293_rest-api-icon-api-icon.png",
            
        },
        {
            name:"GRAPHQL",
            icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
            
        },
        
        {
            name:"MATERIAL UI",
            icon:"https://www.pngitem.com/pimgs/m/577-5779757_react-material-ui-logo-hd-png-download.png",
        },
        {
            name:"Bootstrap",
            icon:"https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg",
        },
        {
            name:"SASS",
            icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
        },
        {
            name:"JWT",
            icon:"",
        },

    ],
    ml:[
        {
            name:"PYTORCH",
            icon:"https://www.clipartmax.com/png/middle/288-2883061_pytorch-logo-empty-background.png",

        },
        {
            name:"SCIKIT LEARN",
            icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1280px-Scikit_learn_logo_small.svg.png",
            
        },
        {
            name:"OPENCV",
            icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/OpenCV_Logo_with_text.png/487px-OpenCV_Logo_with_text.png",
            
        },
        // {
        //     name:"",
        //     icon:"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
            
        // },
        // {
        //     name:"",
        //     icon:"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
            
        // }
    ],
    devOps:[
        {
            name:"DOCKER",
            icon:"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",

        },
        {
            name:"KUBERNETES",
            icon:"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
            
        },
        // {
        //     name:"",
        //     icon:"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
            
        // },
        // {
        //     name:"",
        //     icon:"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
            
        // },
        // {
        //     name:"",
        //     icon:"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
            
        // }
    ],
    general:[
    {
        name:"GIT",
        icon:"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",

    },
    {
        name:"GITHUB",
        icon:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",
        
    },
    {
        name:"DATA STRUCTURES AND ALGORITHMS",
        icon:"https://img.favpng.com/6/17/18/data-structures-and-algorithms-algorithms-data-structures-programs-computer-science-png-favpng-WLB6bjNKJudwXf5EVbHqwXNsF.jpg",
        
    },
    {
        name:"OS",
        icon:"data:image/jpeg;base64,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"
    },
    {
        name:"SQL",
        icon:"https://w7.pngwing.com/pngs/167/148/png-transparent-microsoft-azure-sql-database-microsoft-sql-server-database-blue-text-logo-thumbnail.png",
        
    }],

}

const Skill = () => {
    return (
        <>
        
        <section className="skill-wrapper" id='skill'>
            <SectionHeader sectionName=" My Skills"   color='#fff'/>


            <div className="content">   
             {/* <div className="skill-cards">
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

             </div> */}
             <div className="skill-bars">
                <div  className='skillSection'>
                    <div className='heading'>
                        {'Programming Languages'}
                    </div>
                    <ul>{data.programming.map(skill=>(
                        <li key={skill.name}>
                            {skill.icon&&<span><img  src={skill.icon} alt=''></img></span>}
                            {skill.name}

                        </li>
                    ))}
                    </ul>                    


                </div>
                <div  className='skillSection'>
                    <div className='heading'>
                        {'Web Development'}
                    </div>
                    <ul>{data.webDev.map(skill=>(
                        <li key={skill.name}>
                            {skill.icon&& <span><img src={skill.icon} alt=''></img></span>}
                            {skill.name}

                        </li>
                    ))}
                    </ul>                    
                </div>
                <div  className='skillSection'>
                    <div className='heading'>
                        {'Machine Learning'}
                    </div>
                    <ul>{data.ml.map(skill=>(
                        <li key={skill.name}>
                            {skill.icon&& <span><img src={skill.icon} alt=''></img></span>}
                            {skill.name}

                        </li>
                    ))}
                    </ul>                    
                </div>
                <div  className='skillSection'>
                    <div className='heading'>
                        {'Core Skills'}
                    </div>
                    <ul>{data.general.map(skill=>(
                        <li key={skill.name}>
                            {skill.icon&& <span><img src={skill.icon} alt=''></img></span>}
                            {skill.name}

                        </li>
                    ))}
                    </ul>                    
                </div>

             </div>    
                 
                
            </div>
            
        </section>
        </>
    )
}

export default Skill