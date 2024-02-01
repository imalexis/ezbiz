import { Button, Card, Flex, Input } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons";

import { PendingQuestion } from "./PendingQuestion";
import { useState } from "react";

export function FormSpecCreateEntryPoint() {
  const [pendingQuestions, setPendingQuestions] = useState([
    <PendingQuestion />,
  ]);

  return (
    <Flex vertical align="center">
      <Button
        icon={<PlusCircleOutlined />}
        onClick={() => {
          setPendingQuestions([...pendingQuestions, <PendingQuestion />]);
        }}
      ></Button>
      <Card style={{ width: "60%", margin: "1vw" }}>
        <Input placeholder="Untitled form" size="large"></Input>
        <Input placeholder="Form description" style={{ border: "0" }}></Input>
      </Card>
      {pendingQuestions.map((q) => q)}
    </Flex>
  );
}
