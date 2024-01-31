import { Avatar, Button, Flex, Input } from "antd";
import { MenuOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";

export default function FormEntrypoint() {
  const navigate = useNavigate();
  return (
    <Flex vertical>
      <Flex justify="space-evenly" gap={24} align="center">
        <Flex flex={1} align="center" justify="center">
          <Button
            icon={<MenuOutlined />}
            onClick={() => navigate("/admin/forms")}
          />
        </Flex>
        <Flex flex={8} align="center" justify="center">
          <Input
            size="large"
            placeholder="Search"
            prefix={<SearchOutlined />}
          />
        </Flex>
        <Flex flex={1}>
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
        </Flex>
      </Flex>

      <Outlet />
    </Flex>
  );
}
