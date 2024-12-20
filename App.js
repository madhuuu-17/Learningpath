import { Route,Routes } from "react-router-dom";

import { Auth } from './Component/Auth';
import Home from './Component/Home';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Contact from './Component/Contact';

import Adminhome from "./Component/Adminhome";
import AdmFac from "./Component/AdmFac";
import AdmStud from "./Component/AdmStud";
import AdmParent from "./Component/AdmParent";

import Fachome from "./Component/Fachome";
import Facprofile from "./Component/Facprofile";

import Result from "./Component/Result";
import Markdetails from "./Component/Markdetails";

import StudentProfile from "./Component/StudentProfile";
import Studentmain from "./Component/Studentmain";
import Profile from "./Component/Profile";

import Login from "./Component/Login";
import Logout from "./Component/Logout";

import Timetable from "./Component/Timetable";
import FacDisplayprofile from "./Component/FacDisplayprofile";
import ParentDisplayprofile from "./Component/ParentDisplayprofile";
import Parentprofile from "./Component/Parentprofile";
import Protect from "./Component/Protect";
// import Protect from "./Protect";

function App() {

  return (
    <div className="App">
      <Auth>
      <Header/>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>

      <Route path="/home" element={ <Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>

      <Route path="/admin" element={<Adminhome/> }/>
      <Route path="/admin-faculty" element={<AdmFac/>}/>
      <Route path="/admin-student" element={<AdmStud/>}/>
      <Route path="/admin-parent" element={<AdmParent/>}/>

      <Route path="/faculty-home" element={<Fachome/>}/>   
      <Route path="/fac-profile" element={<Facprofile/>}/>
      <Route path="/faculty-profile" element={<FacDisplayprofile/>}/>
     
      <Route path="/studentmain" element={<Studentmain/>}/>     
      <Route path="/stud-profile" element={<StudentProfile/>}/>
      <Route path="/profile" element={<Protect><Profile/></Protect>}/>
  
      <Route path="/timetable" element={<Protect><Timetable/></Protect>}/>
      <Route path="/result" element={<Protect><Result/></Protect>}/>
      <Route path="/markdetails" element={<Protect><Markdetails/></Protect>}/>

      <Route path="/par-profile" element={<Parentprofile/>}/>
      <Route path="/parent-profile" element={<ParentDisplayprofile/>}/>

      </Routes>
      </Auth>

    </div>
  );
}

export default App;
