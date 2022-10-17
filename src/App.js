import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./component/Home";
import Contact from "./component/Contact";
import Navbar from './component/Navbar';
// import './Css/style.css';
import Studentform from './component/Student_Form';
import Data from "./component/Data"
import AddStudent from './component/AddStudent';
import Edit from './component/Edit'
function App() {
  return (
   <Data> 
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Studentform' element={<Studentform/>}/>
    <Route path='/AddStudent' element={<AddStudent/>}/>
    <Route path='/Edit' element={<Edit/>}/>
    <Route path='/Contact' element={<Contact/>}/>
   </Routes>

   </BrowserRouter>
   </Data>
  );
}

export default App;
