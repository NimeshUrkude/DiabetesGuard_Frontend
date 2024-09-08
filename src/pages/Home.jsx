import React, { useEffect } from "react";
import Landing from "../vector/landing.png";
import { useNavigate } from 'react-router-dom';
import create from "../vector/create.png";
import enter from "../vector/enter.png";
import predict from "../vector/predict.png";
import { useSelector } from "react-redux";

// Main function
function Home() {
    const navigate = useNavigate();
    const token = useSelector((state) => state.jwtStore.token); // Get the token from Redux store

    useEffect(() => {
        // Redirect to /admin if token is present
        if (token) {
            navigate("/admin");
        }
    }, [token, navigate]);

    return(
        <>
        <main className="background d-flex flex-wrap justify-content-between myContainer nav100vh">
            <div className="col-md-6 col-12 d-flex justify-content-center flex-column p-4">
                <p className="h-1 mb-3">Predict Diabetes Risk</p>
                <p className="h-2 m-0">AI-powered diabetes risk tracking and management.</p>
                <p className="h-5 m-0">Using advanced machine learning, we predict your diabetes risk—no diabetes, pre-diabetes, or diabetes—and provide personalized steps to reduce it.</p>
                <div className="d-flex d-flex justify-content-center">
                    <button className="blackButton h-3 mt-5" onClick={()=> navigate("/signup")}>Check Your Risk</button>
                </div>
            </div>
            <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center p-0">
                <img src={Landing} alt="LandingPic" className="landingPic" />
            </div>
        </main>
        <main className="background myContainer">
            <p className="h-3 m-0">Join Our Health Community</p>
            <p className="h-5 m-0 mb-4">Simple steps to a healthier you, offers a simple, effective way to manage diabetes risk through AI-driven predictions and personalized health insights. It helps by providing early detection of potential diabetes, allowing users to take preventive steps before it develops. With tailored assessments based on individual health data, users get a clear understanding of their risk levels. Actionable advice, such as diet and lifestyle changes, is offered to help reduce that risk. The site also allows continuous tracking of health progress, making it easier to see how lifestyle adjustments improve outcomes. Its user-friendly design ensures that anyone can access and understand their health data, empowering users to make informed decisions for better health.</p>
            
            <div className="row">
                <div className="col-md-4 col-12">
                    <div className="timelineCard">
                        <img src={create} className="timelineImg" alt="creatImg"/>
                        <p className="h-4 m-0">Step 1</p>
                        <p className="h-6 ">Create an account or log in</p>
                    </div>
                </div>
                <div className="col-md-4 col-12 ">
                <div className="timelineCard">
                <img src={enter} className="timelineImg" alt="keyboardImg"/>
                <p className="h-4 m-0">Step 2</p>
                <p className="h-6 ">Enter your current health parameters</p>
                </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="timelineCard">
                    <img src={predict} className="timelineImg" alt="predictImg"/>
                    <p className="h-4 m-0">Step 3</p>
                    <p className="h-6 ">Get your diabetes risk percentage</p>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <button className="blackButton h-3 mt-5 mb-5" onClick={()=> navigate("/signup")}>Join Now</button>
            </div>
        </main>
        </>
    );
}

export default Home;
