//import
import React from "react";

//react router dom 
import { useNavigate } from 'react-router-dom';

//main function
function Footer() {

    //react router dom 
    const navigate = useNavigate();
    return (
        <footer className="navbarFooterMyContainer bgDark">
            <div className="d-flex justify-content-between align-items-end">
                <div className="d-flex flex-column mt-2">
                    <p className="my-1 h4">DiabetesGuard</p>
                    <p className="my-1 h6">Empowering your health with AI-driven diabetes insights.</p>
                </div>
                <div className="mt-3">
                    <button className="whiteTextButton h-5" onClick={()=> navigate("/")}>Home</button>
                    <button className="whiteTextButton h-5" onClick={()=> navigate("/about")}>About</button>
                </div>
            </div>
            <p className="my-1 h6 text-center mt-3 mb-1">© 2024 DiabetesGuard</p>
        </footer>
    );
}

export default Footer;
