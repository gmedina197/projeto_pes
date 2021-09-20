import React from "react";
import { Form, Input, Button, Row, notification } from "antd";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { createUser } from "../../utils/calls";

const Box = styled.div`
  background-color: white;
  text-align: center;
`;

function SignUp() {
  const history = useHistory();

  const onFinish = async ({ name, email, password }) => {
    try {
      await createUser(name, email, password);

      notification.success({
        message: "User created sucessfully!",
      });

      setTimeout(() => {
        history.push("/login");
      }, 1000);
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Error while trying to create an user!",
      });
    }
  };

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
    >
      <Box>
        <h3 style={{ margin: "5px" }}>SIGNUP</h3>

        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ margin: "2rem" }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

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
            <Button type="primary" htmlType="submit" block>
              Create User
            </Button>
          </Form.Item>
        </Form>
      </Box>
    </Row>
  );
}

export default SignUp;
