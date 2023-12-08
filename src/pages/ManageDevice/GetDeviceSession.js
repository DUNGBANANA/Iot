import React, { useEffect, useState } from "react";
import TableDevice from "../../components/component/TableDevice";
import NewDevice from "../../components/component/NewDevice";




import {BsTrash3} from "react-icons/bs"
import axios from "axios";

export default function GetDeviceSession() {

  const [listDelete, setListDelete] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    console.log(listDelete)
    try {
      // Kiểm tra xem listDelete có phải là mảng hay không
      if (Array.isArray(listDelete)) {
        for (const deviceId of listDelete) {
          const res = await axios.post("http://1.55.212.49:8098/IoTPlatformCDIT_API/device/deleteDevice", {
            
          session_id:"fd55e244-695a-46e3-9f06-512eb21bdcd2",
          device_id: deviceId,
          });
  
          if (res.data.code === 200) {
            alert(`Xóa thành công thiết bị số ${deviceId}`);
            window.location.reload();
          } else {
            console.error(`Error deleting device with ID ${deviceId}`);
          }
        }
      } else {
        console.error('listDelete is not an array');
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error deleting");
    }
  };
  

  const getListDelete = res =>{
    setListDelete(res);
  }
  return (
    <div>
      {/* Header  */}
      <div className="layout-content-header">
        <h3 className="search-dash-name">Danh sách các type được đăng kí</h3>
        <button className="button-new-device" onClick={handleShow}>
          <span style={{ fontSize: 17 }}>+Thêm mới</span>
        </button>
      </div>

      {/* Modal-new-device */}
      <NewDevice show={show} handleClose={handleClose} />

      {/* Infor-Device */}
      <div className="search-filter-dash-header">
        <div className="wrap">
          <h6 className="search-filter-dash-header-count">1 Device</h6>
          <button className="button-new-device" onClick={()=>handleDelete()}>          
            <span style={{ fontSize: 17 }}><BsTrash3/>  Xóa</span>
          </button>
        </div>
        {/* <TableDevice endpoint="/device/listDevice"  getListDelete={getListDelete}/> */}
      </div>
    </div>
  );
}
