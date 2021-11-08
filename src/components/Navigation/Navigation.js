import React, { useState, useEffect } from "react";
import { SiDocusign } from "react-icons/si";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import "./Navigation.scss";

const NavigationBar = props=> {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
//   const [backgroundColor, setBackgroundColor] = useState("#00000094");

  
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting !== true) {
//           setBackgroundColor("#e83e8c");
//         } else {
//           setBackgroundColor("#00000094");
//         }
//       },
//       { threshold: [0.1] }
//     );
//     try {
//       observer.observe(document.getElementById("header"));
//     }catch(err){
//       console.log(err)
//     }

//   }, [backgroundColor]);

  return (
    <>
      <Navbar
        className="navigation"
        expand="sm"
      >
        <NavbarToggler onClick={toggle}>
          <span>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} onClick={toggle} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <SiDocusign style={{ marginRight :'5px'}} />
              <a href="https://drive.google.com/file/d/1GhD_s4IV5r1lF3gc0jPeKHKq5RTKdoli/view?usp=sharing" target="_blank" download>Resume</a>
            </NavItem>
            <NavItem>
              <NavLink href="#about" >About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skill" >Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#experience" >Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#project">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact" >Know Me more</NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>

    </>
  );
};

export default NavigationBar;



// import React from 'react';
// import './Navigation.scss';
// import NavItem from './NavigationItem/NavItem'

// const navigation = props => {
//     return(
//         <div className="Navigation">
//             <NavItem link='/' >Home</NavItem>
//             <NavItem link='/' >About</NavItem>
//             <NavItem link='/' >Contact</NavItem>
//         </div>
//     )
// }

// export default navigation;