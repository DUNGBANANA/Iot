import React, { useState } from "react";
import "./main.scss";
import { Table } from "react-bootstrap";
import data from "../../../Data/data";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";

export default function TableDevice() {
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate("/inforDevice", { state: { item } });
  };

  // phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    
    <>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Device Name</th>
            <th>Device Owner</th>
            <th>Device Code</th>
            <th>Description</th>
            <th>Function</th>
            <th>State</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr
              key={item.device_id}
              className="tr"
              onClick={() => handleClick(item)}
            >
              {/* <Link> */}
              <td>{item.device_id}</td>
              <td>{item.device_name}</td>
              <td>{item.device_owner}</td>
              <td>{item.device_code}</td>
              <td>{item.description}</td>
              <td>{item.function}</td>
              <td>{item.state}</td>
              <td>{item.time}</td>
              {/* </Link> */}
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        current={currentPage}
        onChange={handleChangePage}
        total={data.length}
        pageSize={10}
        showSizeChanger={false}
      />
    </>
  );
}
