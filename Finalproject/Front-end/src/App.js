import logo from './logo.svg';
import './App.css';
import {Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Gallary from './Components/Galary';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
// import Baner from './Components/Baner';

function App() {
  return (
    <div className="App">
      {/* <Baner/> */}
      
   <Navbar/>
      <Routes>
     

      <Route path='/'element={<Home/>} />
      <Route path='/about'element={<About/>} />
      <Route path='/menu'element={<Menu/>} />
      <Route path='/gallary'element={<Gallary/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
 
      </Routes>
    

    </div>
  );
}

export default App;
