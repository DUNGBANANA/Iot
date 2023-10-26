import React from "react";
import './main.scss'
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";


export default function FormLogin({ login, signUp, formValue }) {
  const onFinish = (values) => {
    formValue(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h6 className="login-title">Tên đăng nhập</h6>
      <Form.Item
        // label="Username"
        name="username"
        rules={[{ required: true, message: "Chưa nhập tên đăng nhập" }]}
      >
        <Input />
      </Form.Item>

      {signUp && (
        <>
          <h6 className="login-title">Email</h6>
          <Form.Item
            name="mail"
            rules={[{ required: true, message: "Chưa nhập Email" }]}
          >
            <Input />
          </Form.Item>
          <h6 className="login-title">Số điện thoại</h6>
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Chưa nhập số điện thoại" },
            ]}
          >
            <Input />
          </Form.Item>
        </>
      )}

      <h6 className="login-title">Mật khẩu</h6>
      <Form.Item
        // label="Password"
        name="password"
        rules={[{ required: true, message: "Chưa nhập mật khẩu" }]}
      >
        <Input.Password />
      </Form.Item>

      {login && (
        <>
          <Link to="/signUp">
            <h6 className="signup">Đăng kí</h6>
          </Link>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </>
      )}

      {signUp && (
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Tạo tài khoản
          </Button>
        </Form.Item>
      )}
    </Form>
  );
}
