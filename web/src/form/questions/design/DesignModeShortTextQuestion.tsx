import { Card, Input } from "antd";
import { useState } from "react";
import { QuestionMetadata } from "../../FormSpecCreateEntryPoint";

type Props = {
  questionMetadata: QuestionMetadata;
};

export function DesignModeShortTextQuestion({ questionMetadata }: Props) {
  const [value, setValue] = useState("");
  return (
    <Card
      title={questionMetadata.title}
      bordered={false}
      style={{ margin: "8px", width: "100%" }}
    >
      <Input
        type="text"
        placeholder={questionMetadata.type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </Card>
  );
}
