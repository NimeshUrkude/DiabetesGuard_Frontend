//react
import React from "react";

//css
import './App.css';

//react router dom
import {Route,Routes,useLocation} from "react-router-dom";

//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

import { Toaster} from 'sonner';
//pages
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import About from "./pages/About.jsx";


function App() {
    //navigation
    const location = useLocation();
  return (
    <>
      <Toaster />
      <Header/>
      <Routes location={location} key={location.pathname}>
        <Route path="/DiabetesGuard_Frontend" element={<Home/>}/>
        <Route path="/DiabetesGuard_Frontend/admin" element={<Admin/>}/>
        <Route path="/DiabetesGuard_Frontend/signin" element={<Signin/>}/>
        <Route path="/DiabetesGuard_Frontend/signup" element={<Signup/>}/>
        <Route path="/DiabetesGuard_Frontend/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
