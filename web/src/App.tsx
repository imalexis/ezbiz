import React from "react";
import "./App.css";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { Button, Card, Checkbox, Flex, Form, Input, Typography } from "antd";
const { Title } = Typography;

function App() {
  const onFinish = (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {};

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  return (
    <GoogleOAuthProvider clientId="298503030203-3juclr58aibqqvr6isbs6o3shvf7eeq8.apps.googleusercontent.com">
      <Flex vertical align="center">
        <Card
          className="login-wrapper"
          style={{ width: "30%", display: "flex", margin: "20px" }}
        >
          <Title style={{ color: "#287D7D", textAlign: "center" }}>
            Please Log In
          </Title>

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
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Flex align="center">
                <div
                  className="custom-checkbox"
                  style={{
                    width: "16px",
                    height: "16px",
                    backgroundColor: "#91C46C",
                    borderRadius: "4px",
                    marginRight: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  {/* Add a checkmark or any other content inside the custom checkbox */}
                  {/* For example, you can add a checkmark SVG or text */}
                  <span style={{ color: "#fff", fontWeight: "bold" }}>✓</span>
                </div>
                <label htmlFor="remember_me">Remember me</label>
                <br />
              </Flex>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "#91C46C" }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <SignIn />
      </Flex>
    </GoogleOAuthProvider>
  );
}

function SignIn() {
  const navigate = useNavigate();
  return (
    <GoogleLogin
      size="large"
      onSuccess={(credentialResponse) => {
        navigate("/admin/forms");
      }}
      onError={() => {}}
    />
  );
}

export default App;
