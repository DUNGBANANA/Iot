import React, { useState } from "react";
import "./main.scss"; 
import {AiOutlineSetting, AiOutlineSearch, AiOutlineFileSearch} from "react-icons/ai"
import {IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Drawer() {
  const [selectedItem, setSelectedItem] = useState('manageDevice');
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="drawer">
      <ul className="drawer-menu">
        <Link to="/manageDevice">
          <li
            className={`menu-item ${
              selectedItem === "manageDevice" ? "menu-item-selected" : ""
            }`}
            onClick={() => handleItemClick("manageDevice")}
          >
            <AiOutlineSearch size={30} color="black" />
          </li>
        </Link>
        <Link to="/manageInfor">
          <li
            className={`menu-item ${
              selectedItem === "manageInfor" ? "menu-item-selected" : ""
            }`}
            onClick={() => handleItemClick("manageInfor")}
          >
            <AiOutlineFileSearch size={30} color="black" />
          </li>
        </Link>
        <li className="menu-item">
          <Link to="#">
            <IoIosSend size={30} color="black" />
          </Link>
        </li>
        <li className="menu-item">
          <Link to="#">
            <AiOutlineSetting size={30} color="black" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
