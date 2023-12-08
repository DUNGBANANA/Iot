import React, { useEffect, useState } from "react";
import TableDevice from "../../components/component/TableDevice";
import NewDevice from "../../components/component/NewDevice";




import {BsTrash3} from "react-icons/bs"
import useFetch from "../../hook/usefetch";
import axios from "axios";

export default function ListDeviceOnline() {

  const [listDelete, setListDelete] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async() =>{
    try {
      for(const deviceId of listDelete){
        const res = await axios.post("http://10.171.17.47:8081/IoTPlatformCDIT_API/device/deleteDevice", {
          device_id: deviceId,
        });

        if(res.data.code === 200){
          alert("Delete Success")
        }
        else{
          console.error(`Error deleting device with ID ${deviceId}`);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error deleting");
    }
  }

  const getListDelete = res =>{
    setListDelete(res);
  }
  return (
    <div>
      {/* Header  */}
      <div className="layout-content-header">
        <h3 className="search-dash-name">Danh sách thiết bị đang hoạt động</h3>
        {/* <button className="button-new-device" onClick={handleShow}>
          <span style={{ fontSize: 17 }}>+Thêm mới</span>
        </button> */}
      </div>

      {/* Modal-new-device */}
      {/* <NewDevice show={show} handleClose={handleClose} /> */}

      {/* Infor-Device */}
      <div className="search-filter-dash-header">
        <div className="wrap">
          <h6 className="search-filter-dash-header-count">1 Device</h6>
          <button className="button-new-device" onClick={()=>handleDelete}>          
            <span style={{ fontSize: 17 }}><BsTrash3/>  Xóa</span>
          </button>
        </div>
        <TableDevice endpoint="/device/listDeviceOnline"  getListDelete={() => getListDelete()}/>
      </div>
    </div>
  );
}
