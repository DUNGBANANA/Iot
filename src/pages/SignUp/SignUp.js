import React from "react";
// import "./main.scss";

import IMAGE from "../../constants/image";


import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/component/FormLogin";

export default function SignUp() {
    const navigate = useNavigate();
    const handleLoginFinish = (values) => {
        console.log("Received values from FormLogin:", values);
        navigate("/login");
      };
  
  return (
    <div>
      <img src={IMAGE.p1} alt="" className="wave" />

      <div className="container">
        <div className="img">
          <img src={IMAGE.p2} alt="" />
        </div>
        <div className="login-content">
          <div className="login-content-main">
            <img src={IMAGE.p3} alt="/" />
            
            <FormLogin signUp={true} formValue={handleLoginFinish} />
          </div>
        </div>
      </div>
    </div>
  );
}
