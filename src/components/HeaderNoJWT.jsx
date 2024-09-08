//react
import React from "react";

//react router dom 
import { useNavigate } from 'react-router-dom';

function  HeaderNoJWT() {
    const navigate = useNavigate();
    return (
        <header className="navbarFooterMyContainer headerFix bgDark d-flex align-items-center justify-content-between">
          <button className="noBtn h-2" onClick={()=> navigate("/")}>DiabetesGuard</button>
          <div>
            <button className="whiteTextButton h-5 mx-3" onClick={()=> navigate("/about")}>About</button>
            <button className="whiteButton h-5 mx-3" onClick={()=> navigate("/signIn")}>SignIn</button>
            <button className="blackButton h-5 mx-3" onClick={()=> navigate("/signup")}>SignUp</button>
          </div>
        </header>
  
    );
}

export default HeaderNoJWT;
