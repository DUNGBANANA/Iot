import React, { useEffect, useState } from "react";

import "./main.scss";

import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Pagination, Modal } from "antd";

import useFetch from "../../../hook/usefetch";
import { useSelector } from "react-redux";

export default function TableDevice({ endpoint, getListDelete, listOff }) {
  const navigate = useNavigate();

  // const session_id = useSelector(state => state.getInfor.session_id);
  // console.log(session_id)
  const { data, isLoading, error, refetch } = useFetch(endpoint, {
    session_id: "fd55e244-695a-46e3-9f06-512eb21bdcd2",
  });


  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    getListDelete(selectedItems);
    if (data?.list_device?.length > prevLength) {
      alert("Thêm Device thành công");
    } else if (data?.list_device?.length < prevLength) {
      alert("Xóa Device thành công");
    }
    setPrevLength(data?.list_device?.length);
    return()=>{
      getListDelete(selectedItems);
    }
  }, [data?.list_device?.length, selectedItems]);

  // const LoadData = () => {
  //   const {data ,isLoading, error } = useFetch(endpoint, {
  //     session_id: "fd55e244-695a-46e3-9f06-512eb21bdcd2",})
  // };



  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleOk = () => {
    // Call Api xóa hết
  };



  const handleCancel = () => {
    setOpen(false);
  };

  const handleClick = (item) => {
    navigate("/inforDevice", { state: { item } });
  };

  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;
  const currentItems = data?.list_device?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const [prevLength, setPrevLength] = useState(data?.list_device?.length);

 

  // Xóa Device


  // useEffect(() => {
  //   getListDelete(selectedItems);
  // }, [selectedItems]);


  const handleCheckboxChange = (deviceId) => {
    const updatedSelectedItems = [...selectedItems];
    if (deviceId === "select-all") {
      setOpen(true);
    } else {
      if (updatedSelectedItems.includes(deviceId)) {
        updatedSelectedItems.splice(updatedSelectedItems.indexOf(deviceId), 1);
      } else {
        updatedSelectedItems.push(deviceId);
      }
      setSelectedItems(updatedSelectedItems);
    }
  };

  return (
    <>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên thiết bị</th>
            <th>Chủ sở hữu</th>
            <th>Mã thiết bị</th>
            <th>Mô tả</th>
            <th>Loại</th>
            <th>Trạng thái</th>
            <th>Thời gian</th>
            <th>
              <Button onClick={() => handleCheckboxChange("select-all")}>
                Xóa tất cả
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((item) => (
            <tr
              key={item.ID}
              className="tr"
            >
              <td onClick={() => handleClick(item)}>{item.ID}</td>
              <td onClick={() => handleClick(item)}>{item.device_name}</td>
              <td onClick={() => handleClick(item)}>{item.owner_info}</td>
              <td onClick={() => handleClick(item)}>{item.device_code}</td>
              <td onClick={() => handleClick(item)}>{item.desc}</td>
              {listOff ? <td onClick={() => handleClick(item)}>{item.type.Name}</td> : <td onClick={() => handleClick(item)}>{item.type}</td>}
              <td onClick={() => handleClick(item)}>{item.state}</td>
              <td onClick={() => handleClick(item)}>{item.create_time}</td>
              <td>
                <Checkbox onChange={() => handleCheckboxChange(item.ID)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        current={currentPage}
        onChange={handleChangePage}
        total={data?.list_device?.length}
        pageSize={10}
        showSizeChanger={false}
      />

      <Modal
        title="Bạn có chắc muốn xóa tất cả"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>Tất cả thông tin Device sẽ bị xóa</p>
      </Modal>
    </>
  );
}
