import React, { useState } from "react";
import "./main.scss";

import Dropdown from "react-bootstrap/Dropdown";
import { GoBell } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

export default function Header({getVisibile}) {

  const [visibile, setVisibile] = useState(false)

  const handleClick = () =>{
    setVisibile(!visibile)
    getVisibile(visibile)
    console.log("111")
  }
  return (
    <div className="navbar">
      <i className="icon icon-menu" onClick={handleClick}>
        <HiMenuAlt1 size={27} color="black" />
      </i>
      <div className="navbar-right">
        <Link to="">
          <i className="icon icon-bell">
            <GoBell size={25} color="black" />
          </i>
        </Link>

        {/* <Link to="/inforUser"> */}
        {/* <i className="icon">
          <RxAvatar size={30} color="black" />
        </i> */}
        {/* </Link> */}

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <i className="icon">
              <RxAvatar size={30} color="black" />
            </i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Log Out</Dropdown.Item>
            <Dropdown.Item>
              <Link to="/inforUser">
                <h4 style={{ color: "black", fontSize: 16 }}>Change Infor</h4>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
