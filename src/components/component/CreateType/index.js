import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import { Alert, Space } from 'antd';

// import useFetch from "../../../hook/usefetch";
import axios from "axios";
import { apiList } from "../../../api/api";

export default function NewDevice({ show, handleClose }) {


  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [deviceName, setDeviceName] = useState("");
  const [type, setType] = useState(1);
  const [description, setDescription] = useState("");
//   const [location, setLocation] = useState("");

  const [validated, setValidated] = useState(false);
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // else if(form.checkValidity() === true){
      setValidated(true);
    // }
    if(form.checkValidity() === true){
      // console.log("DV===>", deviceName, "LC===>", location, "DES===>", description, "Type==> ", type);
      try {
        const res = await axios.post(
          apiList.createTypeDevice ,
          {
            session_id: "fd55e244-695a-46e3-9f06-512eb21bdcd2",
            type_name: deviceName,
            type_id: description,
            org_id: 1
          }
        );
        if (res.data.code === 200) {
         alert("Success");
        } else {
         alert("Error");
        }
      } catch (err) {
        setError(true);
      }
  };
}

  return (
    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới loại thiết bị</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Tên loại thiết bị</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Tên loại thiết bị"
                defaultValue=""
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
              <Form.Label>Mã loại thiết bị</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Type Id"
                defaultValue=""
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group as={Col} md="5" controlId="validationCustom06">
              <Form.Label>Địa điểm</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Địa điểm"
                defaultValue=""
                onChange={(e) => setLocation(e.target.value)}
              />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group> */}
          </Row>

          <br />
          <Button
            type="submit"
            style={{
              backgroundColor: "#49cea1",
              color: "black",
              borderColor: "transparent",
              // marginLeft: "auto",
              // marginRight: "auto",
            }}
          >
            Thêm mới loại thiết bị
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
    {success && (
      <Modal show={success} onHide={() => setSuccess(false)}>
        <Modal.Body>
          <p>Thêm thiết bị thành công!</p>
        </Modal.Body>
      </Modal>
    )}
    
    {error && (
      <Modal show={error} onHide={() => setError(false)}>
        <Modal.Body>
          <p>Thêm thiết bị thất bại!</p>
        </Modal.Body>
      </Modal>
    )}
    </>
  )
}
