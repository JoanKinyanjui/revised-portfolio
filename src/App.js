import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import Contact from './Components/Contact/Contact';
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Project from "./Components/Projects/Project";
import Resume from "./Components/Resume/Resume";

function App() {
  return (
  <>
    <Router>
<div className='App'>
  <Nav />
  <Routes>
    <Route exact path='/'  element={<Home />}/>
    <Route exact path='/about'  element={<About/>}/>
    <Route exact path='/projects'  element={<Project />}/>
    <Route exact path='/contact'  element={<Contact />}/>
    <Route exact path='/resume'  element={<Resume />}/>
  </Routes>
</div>
</Router>
  
    </>
  );
}

export default App;
