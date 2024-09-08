//react
import React, { useEffect, useState } from "react";

//redux
import { useSelector } from "react-redux";

//modal
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'; 

//components
import PredictionModal from '../components/PredictionModal';

function Admin() {
    //model data
    const [modalIsOpen, setIsOpen] = useState(false);

    //current data
    const [currentPrediction, setCurrentPrediction] = useState(null);

    //data
    const [fullData, setFullData] = useState(null);

    //redux
    const data = useSelector((state) => state.dataStore);
    console.log(data);

    //useeffect
    useEffect(() => {
        if (data && data.scores && data.scores.length > 0) {
            setCurrentPrediction(data.scores[data.scores.length - 1].score);
        } else {
            setCurrentPrediction(null);
        }

        if (data) {
            setFullData(data);
        } else {
            setFullData(null);
        }
    }, [data]);

    //togel model
    const toggleModel = () => {
        setIsOpen(!modalIsOpen);
    };

    //renderHealthStatus
    const renderHealthStatus = () => {
        if (currentPrediction < 33) {
            return (
                <div>
                    <p className="h-3 text-success">No Diabetes - Healthy</p>
                    <p className="h-6">You are currently healthy with no signs of diabetes. Maintain a balanced diet and regular exercise to stay in good health.</p>
                </div>
            );
        } else if (currentPrediction >= 33 && currentPrediction < 66) {
            return (
                <div>
                    <p className="h-3 text-warning">Pre-diabetes - Lifestyle Change Required</p>
                    <p className="h-6">Your health is at risk, and you may develop diabetes if no action is taken. Consider the following lifestyle changes:</p>
                    <ul>
                        <li className="h-7">Adopt a healthy, balanced diet.</li>
                        <li className="h-7">Exercise regularly (at least 30 minutes per day).</li>
                        <li className="h-7">Monitor your blood sugar levels.</li>
                    </ul>
                </div>
            );
        } else if (currentPrediction >= 66) {
            return (
                <div>
                    <p className="h-3 text-danger">Diabetes Detected - Immediate Action Required</p>
                    <p className="h-6">Your results indicate that you have diabetes. You should take immediate steps, including:</p>
                    <ul>
                        <li className="h-7">Consult a doctor for medical advice and potential medication.</li>
                        <li className="h-7">Make significant lifestyle changes, such as adhering to a strict diet and increasing physical activity.</li>
                        <li className="h-7">Regularly monitor blood glucose levels.</li>
                    </ul>
                </div>
            );
        }
    }

    //renderScoreHistory
    const renderScoreHistory = () => {
        if (fullData && fullData.scores && fullData.scores.length > 0) {
            return (
                <div className="mt-4 w-100">
                    <p className="h-5">Score History</p>
                    <ul className="list-group">
                        {fullData.scores.map((entry, index) => {
                            const formattedDate = new Date(entry.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            });
                            const score = Math.min(Math.floor(entry.score), 100);
    
                            return (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <span><strong>Date:</strong> {formattedDate}</span>
                                    <span><strong>Score:</strong> {score}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        } else {
            return <p className="h-5">No score history available.</p>;
        }
    };
    
    //if no data
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <main className="background myContainer d-flex flex-column align-items-center">
                <div className="row">
                    <div className="col-12 col-md-3 d-flex flex-column align-items-center p-4">
                        <img alt="ProfileImg" className="adminPic" src={process.env.REACT_APP_URL+fullData?.image || ""}/>
                        <p className="h-4 m-0 mt-2">{fullData?.name || "Loading..."}</p>
                        <p className="h-4 m-0">{fullData?.email || "Loading..."}</p>
                    </div>
                    <div className="col-12 col-md-9 p-4 d-flex flex-column align-items-center">
                        <p className="h-4 mt-3">
                            Current Diabetic Percentage: {Math.min(Math.floor(currentPrediction || 0), 100)}
                        </p>
                        {renderHealthStatus()}
                        {renderScoreHistory()}
                    </div>
                </div>
                <button onClick={toggleModel} className="blackButton h-4 my-3">Calculate Current Risk</button>
            </main>

            <Modal
                styles={{ modal: { width: "90%", maxWidth: "600px" } }}
                open={modalIsOpen}
                onClose={toggleModel}
                center
                classNames={{ overlay: 'customOverlay', modal: 'customModal' }}
            >
                <PredictionModal onClose={toggleModel} setCurrentPrediction={setCurrentPrediction} setFullData={setFullData}/>
            </Modal>
        </>
    );
}

export default Admin;
