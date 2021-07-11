import React from "react";
import { Form, Input, Button } from "antd";

function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form>
      <Form.Item>
        <Input />
      </Form.Item>
    </Form>
  );
}

export default Login;
