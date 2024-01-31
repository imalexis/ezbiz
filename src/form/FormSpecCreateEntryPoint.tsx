import { Button, Flex } from "antd";

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
      {pendingQuestions.map((q) => q)}
    </Flex>
  );
}
