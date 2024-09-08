//react
import React, { useState } from "react";

//react router dom
import { useNavigate } from 'react-router-dom';

//toast
import { toast } from 'sonner'

//axios
import axios from 'axios';

function Signup() {
  //react router dom
  const navigate = useNavigate();

  //data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    file:null
  });

  //handel input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0] // Store the selected file
    }));
  };

  //handel submit
  const handleSubmit = async () => {
    const data = new FormData();
    data.append("data[email]", formData.email);
    data.append("data[password]", formData.password);
    data.append("data[name]", formData.name);
    if (formData.file) {
      data.append("file", formData.file); // Add file to FormData
    }

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: process.env.REACT_APP_SIGNUP,
      headers: { 
        'Content-Type': 'multipart/form-data'
      },
      data : data
    };

    try{
      const response = await axios(config);
      toast.success('Acount Created');
      navigate("/signin");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <main className="row nav100vh m-0">
      <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center p-5">
        <p className="h-2">Create Account</p>
        <input
          className="signInUpInput"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="signInUpInput"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="signInUpInput"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          className="signInUpInput"
          type="file"
          name="file"
          onChange={handleFileChange}
          placeholder="Upload Profile Photo"
        />
        <button className="blackButton h-4 mt-5" onClick={handleSubmit}>Sign Up</button>
      </div>
      <div className="col-md-6 d-md-flex d-none bgDark d-flex flex-column justify-content-center align-items-center">
        <p className="h-1 m-0">Hello, Friend!</p>
        <p className="h-5">Enter your personal details and start journey with us or else</p>
        <button className="whiteButton h-4 mt-5" onClick={()=> navigate("/signin")}>SignIn</button>
      </div>
    </main>
  );
}

export default Signup;
