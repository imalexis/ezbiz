import { Button, Card, Flex, Form, Input } from "antd";
import Title from "antd/es/typography/Title";

export function HomePage() {
  return (
    <Flex vertical align="center">
      <Card className="login-wrapper" style={{ width: "30%" }}>
        <Title>Please Log In</Title>

        <Form>
          <Form.Item label="Field A">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Field B">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
}
