import React, { useEffect, useState } from "react";
import "./main.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/component/Header";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ChartData from "../../components/component/ChartData";
import axios from "axios";
import { apiList } from "../../api/api";

export default function InforDevice() {
  const params = useLocation();
  const item = params?.state?.item;
  const navigate = useNavigate();
  const [deviceName, setDeviceName] = useState(item?.device_name);
  const [description, setDescription] = useState(item?.desc);


  const [validated, setValidated] = useState(false);


  const handleSubmit = async (e) => {
    try {
      e.preventDefault(); // Prevent the default form submission behavior
      const response = await axios.post(apiList.settingDevice, {
        session_id: "fd55e244-695a-46e3-9f06-512eb21bdcd2",
        device_id: item?.ID,
        device_name: deviceName,
        state: 1,
        desc: description,
      });
  
      // Handle the response or perform additional actions as needed
      // console.log('Response from POST request:', response.data);
      response.data.code === 200 && alert('Sửa thông tin thành công')

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div>
      <Header />
      <div className="main-content">
        {/* <h1>{item.device_id}</h1> */}
        <div className="modal-device">
          <h4>Thông tin thiết bị</h4>
          <Form validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Tên thiết bị</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Tên thiết bị"
                  defaultValue={item?.device_name}
                  onChange={(e) => setDeviceName(e.target.value)}
                />
                <Form.Control.Feedback>Valid</Form.Control.Feedback>
              </Form.Group>
              {/* {


            } */}
            </Row>
            {/* <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Loại</Form.Label>
                <Form.Select onChange={handleTypeChange} value={type}>
                  <option value="1">Thiết bị cảm biến</option>
                  <option value="2">Thiết bị điều khiển</option>
                  <option value="3">Thiết bị công suất điện</option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  Please provide a valid Function.
                </Form.Control.Feedback>
              </Form.Group>
            </Row> */}
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Mô tả</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Mô tả"
                  defaultValue={item?.desc}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Form.Control.Feedback>Valid</Form.Control.Feedback>
              </Form.Group>
            </Row>
            {/* <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom06">
                <Form.Label>Địa điểm</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Địa điểm"
                  defaultValue=""
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Form.Control.Feedback>Valid</Form.Control.Feedback>
              </Form.Group>
            </Row> */}

            <br />
            <Button
              type="submit"
             
              style={{
                backgroundColor: "#49cea1",
                color: "black",
                borderColor: "transparent",
              }}
            >
              Cập nhật thông tin
            </Button>
          </Form>
        </div>

        <ChartData dataDetails={item} />
      </div>
    </div>
  );
}
