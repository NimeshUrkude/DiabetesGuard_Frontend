//react
import React, { useState, useEffect } from 'react';

//tensorflow
import * as tf from '@tensorflow/tfjs';

//toast
import { toast } from 'sonner';

//axios
import axios from 'axios';

//redux
import { useSelector } from "react-redux";

function PredictionModal({ onClose, setCurrentPrediction ,setFullData}) {

    //data
    const [formData, setFormData] = useState({});

    //model
    const [fmodel, setFmodel] = useState(null);

    //token
    const token = useSelector((state) => state.jwtStore.token);

    //load model
    useEffect(() => {
        const loadModel = async () => {
            const model = await tf.loadLayersModel("https://raw.githubusercontent.com/NimeshUrkude/DiabetesGuard_Model/main/model.json");
            setFmodel(model);
        };
        loadModel();
    }, []);

    //handel predict
    const handlePredict = async () => {
        if (fmodel && formData) {
            const input_data = [parseFloat(formData.pregnancies), parseFloat(formData.glucose), parseFloat(formData.bloodPressure), parseFloat(formData.skinThickness), parseFloat(formData.insulin), parseFloat(formData.bmi), parseFloat(formData.diabetesPedigreeFunction), parseFloat(formData.age)];

            if (input_data.some(isNaN)) {
                toast.error("Invalid input data");
                return;
            }

            const input_data_reshaped = tf.tensor2d([input_data], [1, 8]);

            try {
                const prediction = await fmodel.predict(input_data_reshaped).data();
                const currentDate = new Date();

                let data = JSON.stringify({
                    "data": {
                      "score": prediction[0] * 100
                    }
                });

                let config = {
                    method: 'put',
                    url: process.env.REACT_APP_PUT_SCORE,
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    data: data
                };

                const response = await axios(config);
                toast.success('Saved new data');
                setCurrentPrediction(prediction[0] * 100);
                setFullData(prevData => ({
                    ...prevData,
                    scores: [
                        ...(prevData?.scores || []),
                        { date: currentDate.toISOString(), score: prediction[0] * 100 }
                    ]
                }));

                onClose();
            } catch (error) {
                toast.error("Error during prediction: " + error.message);
            }
        } 
    };

    //input data
    const handleInput = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    return (
        <main className="row">
            <p className="h-3">Predict</p>
            {["pregnancies", "glucose", "bloodPressure", "skinThickness", "insulin", "bmi", "diabetesPedigreeFunction", "age"].map((field, index) => (
                <div className="mb-4 col-md-6 col-12" key={index}>
                    <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}<span className="redColor">*</span></label>
                    <input
                        type="text"
                        className="form-control mt-1"
                        id={field}
                        placeholder={`Enter ${field}`}
                        onChange={handleInput}
                    />
                </div>
            ))}
            <div className="d-flex flex-column align-items-center">
                <button onClick={handlePredict} className="w-75 blackButton h-3 my-3">Calculate Risk</button>
            </div>
        </main>
    );
}

export default PredictionModal;
