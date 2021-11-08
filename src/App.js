import Main from './hoc/main/Main'
import './App.scss';
import Intro from './containers/Intro/Intro';
import About from './containers/About/About';
import Skill from './containers/Skills2/Skill';
import Project from './containers/Project/Project';
import Experience from './containers/Experience/Experience';
import Contact from './containers/Contact/Contact';
import Header from './containers/Header/Header';
import NavigationBar from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      
      {/* <Header /> */}
      <NavigationBar/>
      {/* <div className="body-wrapper"> */}
        <Intro></Intro>
        <About />
        <Experience />
        <Project />
        <Skill />
        
        
        <Contact />
      {/* </div> */}
    </div>
    

    
    
  );
}

export default App;
