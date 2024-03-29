import React from "react";
import { useContext } from "react";
import AlertContext from "../context/Alert/AlertContext";
const Alert =()=>{
    
    const alertContext = useContext (AlertContext);
    const {alert}= alertContext;
    return(
        alert !== null &&(
            <div className={`alert alert-${alert.type}`}>
                <i className='fas fa-info-circle'> {alert.msg}</i>
            </div>
        )
    )
}
export default Alert;