import React, { useState } from "react";
import { Form, Input, Button, Row, Alert, Divider } from "antd";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";

const Box = styled.div`
  background-color: white;
  text-align: center;
`;

const Login = () => {
  const history = useHistory();

  const { signIn } = useAuth();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await signIn(values.email, values.password);

      setLoading(false);

      history.push("/home");
    } catch (error) {
      console.log(error)
      setError(true);
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
    >
      <Box>
        <h3 style={{ margin: "5px" }}>LOGIN</h3>

        {error && (
          <Alert
            message={"Your authentication information is incorrect."}
            type="error"
          />
        )}

        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ margin: "2rem" }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Submit
            </Button>
          </Form.Item>
          <Divider plain>Or</Divider>

          <Button type="primary" block onClick={() => history.push("/sign-up")}>
            Sign Up
          </Button>
        </Form>
      </Box>
    </Row>
  );
};

export default Login;
