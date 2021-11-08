import React, { Component }from 'react';
import './Header.scss';
import Name from './Name/Name'
import Navigation from '../../components/Navigation/Navigation'
import DrawerToggler from '../../components/Navigation/DrawerToggler/DrawerToggler';

// class Header extends Component{
    
//     render(){
//         return(
//             <div className={classes.Header}>
//                 <Name className={classes.Name}>JK</Name> 
//                 <nav className={classes.DesktopOnly}>
                    
//                         <Navigation />   
                    
//                 </nav>
//                 <DrawerToggler ></DrawerToggler>
            
//             </div>
//         )
        
//     }
// }

// export default Header;



const Header = () => {
    return (
        <div className ="header-wrapper">
            
            <Navigation />
            <DrawerToggler></DrawerToggler>
        </div>
    )
}

export default Header
