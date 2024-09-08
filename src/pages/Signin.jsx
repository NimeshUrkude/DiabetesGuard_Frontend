//react
import React, { useState } from "react";

//react router dom
import { useNavigate } from 'react-router-dom';

//toast
import { toast } from 'sonner'

//axios
import axios from 'axios';

//redux
import {useDispatch} from "react-redux";
import {updateJwtStore} from "../redux/jwtStore";

function SignUpForm() {
  //redux
  const dispatch = useDispatch();

  //react router dom
  const navigate = useNavigate();

  //data
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  //handel input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }));
};

//handel submit
const handleSubmit = async () => {
  let data = JSON.stringify({
    "data": {
      "email": formData.email,
      "password": formData.password
    }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: process.env.REACT_APP_SIGNIN,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  try {
    const response = await axios(config);
    toast.success('Acount Login');
    dispatch(updateJwtStore(response.data.token));
    navigate("/admin");
  } catch (error) {
    toast.error(error.response.data.error);
  }
  };

  return (
    <main className="row nav100vh m-0">
      <div className="col-md-6 d-md-flex d-none bgDark d-flex flex-column justify-content-center align-items-center">
        <p className="h-1 m-0">Welcome Back!</p>
        <p className="h-5">To keep connected with us please login with your personal info</p>
        <button className="whiteButton h-4 mt-5" onClick={()=> navigate("/signup")}>SignUp</button>
      </div>
      <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center p-5">
        <p className="h-2">Create Account</p>
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
        <button className="blackButton h-4 mt-5" onClick={handleSubmit}>Sign In</button>
      </div>
    </main>
  );
}

export default SignUpForm;
