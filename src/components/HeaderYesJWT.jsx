//react
import React from "react";

//react router dom 
import { useNavigate } from 'react-router-dom';

//toast
import { toast } from 'sonner'

//redux
import { useDispatch,useSelector} from 'react-redux';
import {updateJwtStore} from "../redux/jwtStore";

function HeaderYesJWT() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name = useSelector((state) => state.dataStore.name);
    return (
      <header className="navbarFooterMyContainer headerFix bgDark d-flex align-items-center justify-content-between">
        <button className="noBtn h-2" onClick={()=> navigate("/DiabetesGuard_Frontend")}>DiabetesGuard</button>
        <div className="d-flex">
          <p className="h-5 m-0 p-0 mt-1">{name}</p>
          <button className="whiteButton h-5 mx-3" onClick={()=>{navigate("/DiabetesGuard_Frontend"); dispatch(updateJwtStore("")); toast.success("Account Logout")}}>Logout</button>
        </div>
    </header>
    );
}

export default HeaderYesJWT;
