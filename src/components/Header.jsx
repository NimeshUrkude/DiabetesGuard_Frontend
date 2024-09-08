//react
import React, { useEffect, useState } from "react";
//toast
import { toast } from 'sonner'

//axios
import axios from 'axios';

//redux
import { useDispatch,useSelector} from 'react-redux';
import {updateDataStore} from "../redux/dataStore";

//components
import HeaderNoJWT from "./HeaderNoJWT";
import HeaderYesJWT from "./HeaderYesJWT";


function Header() {

  //redux
  const dispatch = useDispatch();

  //token
  const token = useSelector((state) => state.jwtStore.token);

  //have jwt
  const [hasJwt, setHasJwt] = useState(!!token);

  //use effect
  useEffect(() => {
    setHasJwt(!!token);

    //if have token so get data and put in redux
    if (token !== "") {
      const fetchData = async () => {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: process.env.REACT_APP_GET_DATA,
          headers: { 
            'Authorization': `Bearer ${token}`
          },
        };
        try{
          const response = await axios(config);
          dispatch(updateDataStore(response.data));
        } catch (error) {
          toast.error(error.response.data.error);
        }
      };
  
      fetchData();
    }

  }, [token,dispatch]);
  
  //return
  return (
    <>
      {hasJwt ? <HeaderYesJWT /> : <HeaderNoJWT />}
    </>  
  );
}





export default Header;
