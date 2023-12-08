import React from "react";
// import "./main.scss";

import IMAGE from "../../constants/image";

import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/component/FormLogin";
import axios from "axios";
import { apiList } from "../../api/api";

export default function SignUp() {
  const navigate = useNavigate();
  const handleLoginFinish = async (values) => {
    console.log("Received values from FormLogin:", values);
   

    try {
      const res = await axios.post(apiList.signUp, {
        type: 2,
        fullname: values.fullname,
        username: values.username,
        package: values.password,
      });

      if (res.data.code === 200) alert("Tạo tài khoản thành công");
      else alert("Thất bại");
      navigate("/");
    } catch (error) {}
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
