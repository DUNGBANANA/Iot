import React, { useEffect, useState } from "react";

import "./main.scss";

import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Pagination, Modal } from "antd";

import useFetch from "../../../hook/usefetch";

export default function TableType({ endpoint, getListDelete }) {
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch(endpoint, {
    session_id: "fd55e244-695a-46e3-9f06-512eb21bdcd2",
  });

  console.log("DATA======>", data);
  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    getListDelete(selectedItems);
    if (data?.list_type?.length > prevLength) {
      alert("Thêm mới loại thiết bị thành công");
    } else if (data?.list_type?.length < prevLength) {
      alert("Xóa loại thiết bị thành công");
    }
    setPrevLength(data?.list_type?.length);
    return () => {
      getListDelete(selectedItems);
    };
  }, [data?.list_type?.length, selectedItems]);

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleOk = () => {
    // Call Api xóa hết
  };

  const handleCancel = () => {
    setOpen(false);
  };

  //   const handleClick = (item) => {
  //     navigate("/inforDevice", { state: { item } });
  //   };

  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;
  const currentItems = data?.list_type?.slice(
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
            <th>Loại thiết bị</th>
            <th>
              <Button onClick={() => handleCheckboxChange("select-all")}>
                Xóa tất cả
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((item) => (
            <tr key={item.ID} className="tr">
              <td>{item.ID}</td>
              <td>{item.name}</td>

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
        total={data?.list_type?.length}
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
        <p>Tất cả thông tin loại thiết bị sẽ được xóa</p>
      </Modal>
    </>
  );
}
