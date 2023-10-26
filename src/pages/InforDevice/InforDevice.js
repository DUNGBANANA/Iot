import React from "react";
import './main.scss'
import { useLocation} from "react-router-dom";
import Header from "../../components/component/Header";

export default function InforDevice() {


  const location = useLocation();
  console.log(location)
  const  item  = location.state.item;

  console.log("CHECK====>", item)
  return (
    <div>
      <Header/>
      <div className="main-content">
      <h1>{item.device_id}</h1>
      </div>
    </div>
  );
}
