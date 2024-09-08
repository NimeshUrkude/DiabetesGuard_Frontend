import React, { useState } from "react";
import ConfusedMatrix from "../vector/confusedMatrix.png";
import DatasetVisual from "../vector/datasetVisual.png";
import LossVsEpochs from "../vector/lossVsEpochs.png";
import Model from "../vector/model.png";
import RecallCurve from "../vector/recallCurve.png";

const images = [
  ConfusedMatrix,
  DatasetVisual,
  LossVsEpochs,
  Model,
  RecallCurve
];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="myContainer">
      <div>
        <p className="h-3 m-0">About DiabetesGuard</p>
        <p className="h-6">Welcome to DiabetesGuard, a cutting-edge platform designed to empower individuals by predicting their risk of diabetes and providing actionable insights based on advanced machine learning techniques.</p>

        <p className="h-3">Our Mission</p>
        <p className="h-6">At DiabetesGuard, our mission is to provide users with accurate and personalized predictions about their diabetes risk. We aim to help you understand where you stand in terms of diabetes risk and offer guidance on potential next steps to maintain or improve your health.</p>

        <p className="h-3">How It Works</p>
        <p className="h-6">Our website leverages a robust combination of technologies to deliver precise predictions:</p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><strong>MERN Stack:</strong> We use the MERN (MongoDB, Express, React, Node.js) stack to build a responsive and user-friendly web application.</li>
          <li><strong>TensorFlow:</strong> Our machine learning model, built with TensorFlow, analyzes various health metrics to predict your likelihood of having diabetes and the potential stage of the condition.</li>
          <li><strong>Kaggle Dataset:</strong> We utilize a comprehensive dataset from Kaggle, which includes key health indicators such as:
            <ul>
              <li>Pregnancies</li>
              <li>Glucose</li>
              <li>Blood Pressure</li>
              <li>Skin Thickness</li>
              <li>Insulin</li>
              <li>BMI</li>
              <li>Diabetes Pedigree Function</li>
              <li>Age</li>
            </ul>
          </li>
        </ul>
        <p className="h-6">By processing these features, our model predicts the probability of having diabetes and classifies it into three stages:</p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><strong>No Diabetes:</strong> The probability is low, indicating a healthy status.</li>
          <li><strong>Pre-Diabetes:</strong> A moderate probability suggesting potential lifestyle changes.</li>
          <li><strong>Diabetes:</strong> A high probability recommending both lifestyle modifications and medical consultation.</li>
        </ul>

        <p className="h-3">Our Approach</p>
        <p className="h-6">DiabetesGuard combines the power of machine learning with practical health insights to provide users with a reliable risk assessment. Our intuitive interface ensures that you can easily input your data and receive clear, actionable feedback.</p>
        <p className="h-6">We are committed to continually improving our platform and incorporating the latest advancements in technology and research to serve you better.</p>

        <p className="h-3">Get Started</p>
        <p className="h-6">To begin assessing your diabetes risk, simply sign up and enter your health metrics. Our model will generate a personalized risk profile, which is saved for future reference and displayed on your dashboard. This allows you to track changes over time and monitor your health progress.</p>
        <p className="h-6">Thank you for choosing DiabetesGuard. We're here to support you every step of the way in your journey towards optimal health.</p>
      </div>
      <div className="col-12 col-6 carousel-container" style={{ position: 'relative', textAlign: 'center' }}>
        <img
          src={images[currentIndex]}
          alt="Carousel"
          style={{ maxWidth: '100%', height: 'auto', objectFit:"cover"}}
        />
        <button
          onClick={prevImage}
          style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
        >
          &gt;
        </button>
      </div>
    </main>
  );
}

export default About;
