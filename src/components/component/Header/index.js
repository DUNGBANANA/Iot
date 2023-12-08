import React, { useState } from "react";
import "./main.scss";

import Dropdown from "react-bootstrap/Dropdown";
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";

import { useDispatch } from "react-redux";
import { logout } from "../../../slices/authSlice";

export default function Header({list}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("checkTrue");
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleLogout = () => {
    // dispatch(logout());
    navigate("/", {replace: true});
  };

  return (
    <>
      <div className="navbar">
        <h2 className="header-name">CMS IOT</h2>
        {list==true && <div>
          <Link to="/listDevices">
            <Button
              className={`button-btn ${
                selectedItem === "checkTrue" ? "item-selected" : ""
              }`}
              onClick={() => handleItemClick("checkTrue")}
            >
              Tất cả
            </Button>
          </Link>
          <Link to="/listDeviceOn">
            <Button
              className={`button-btn ${
                selectedItem === "checkTrue1" ? "item-selected" : ""
              }`}
              onClick={() => handleItemClick("checkTrue1")}
            >
              Đang hoạt động
            </Button>
          </Link>
          <Link to="/listDeviceOff">
            <Button
              className={`button-btn ${
                selectedItem === "checkTrue2" ? "item-selected" : ""
              }`}
              onClick={() => handleItemClick("checkTrue2")}
            >
              Không hoạt động
            </Button>
          </Link>
          <Link to="/listType">
            <Button
              className={`button-btn ${
                selectedItem === "checkTrue3" ? "item-selected" : ""
              }`}
              onClick={() => handleItemClick("checkTrue3")}
            >
              Phân loại
            </Button>
          </Link>
        </div>
        }
        <div className="navbar-right">
          {/* <Link to="">
          <i className="icon icon-bell">
            <GoBell size={25} color="black" />
          </i>
        </Link> */}

          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <i className="icon">
                <RxAvatar size={30} color="black" />
              </i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
              <Dropdown.Item>
                <Link to="/inforUser">
                  <h4 style={{ color: "black", fontSize: 16 }}>Xem thông tin</h4>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}
