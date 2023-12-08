import React, { useState } from "react";
import "./main.scss";
import IMAGE from "../../constants/image";
import FormLogin from "../../components/component/FormLogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Spin } from "antd";
import { apiList } from "../../api/api";
import { useDispatch } from "react-redux";
import { useAuth } from "../../features/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login } = useAuth(); // Sử dụng useAuth để lấy hàm login từ context
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginFinish = async (values) => {
    setIsLoading(true);
    try {
      const response = await axios.post(apiList.login, values);
      if (response.data.code === 200) {
        if (response.data.role === 1) {
          navigate("/listDevices", { replace: true });
        } else {
          alert("Sai thông tin đăng nhập");
          navigate("/", { replace: true });
        }

        // Gọi hàm login từ context để cập nhật trạng thái đăng nhập
        login(response.data);
        setIsLoading(false);
      } else {
        alert("Sai thông tin đăng nhập");
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      {isLoading === false ? null : (
        <Spin size="large" fullscreen="true" delay={500} />
      )}
      <div>
        <img src={IMAGE.p1} alt="" className="wave" />
        <div className="container">
          <div className="img">
            <img src={IMAGE.p2} alt="" />
          </div>
          <div className="login-content">
            <div className="login-content-main">
              <img src={IMAGE.p3} alt="/" />
              <FormLogin login={true} formValue={handleLoginFinish} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
