import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function NewDevice({ show, handleClose }) {


  
  const [deviceName, setDeviceName] = useState("");
  const [deviceCode, setDeviceCode] = useState("");
  const [functionValue, setFunctionValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(deviceName, deviceCode, functionValue, stateValue, description, time);
    console.log("CHECK=====>", event);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Device name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Device name"
                defaultValue=""
                onChange={(e) => setDeviceName(e.target.value)}
              />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="validationCustom02">
              <Form.Label>Device Code</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Device code"
                defaultValue=""
                onChange={(e) => setDeviceCode(e.target.value)}
              />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Function</Form.Label>
              <Form.Select onChange={(e) => setFunctionValue(e.target.value)}>
                <option>Function 1</option>
                <option>Function 2</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid Function.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Select onChange={(e) => setStateValue(e.target.value)}>
                <option>On</option>
                <option>Off</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Description"
                defaultValue=""
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="validationCustom06">
              <Form.Label>Time</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Time"
                defaultValue=""
                onChange={(e) => setTime(e.target.value)}
              />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
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
            Add New Device
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
