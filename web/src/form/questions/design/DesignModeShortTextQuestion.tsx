import { Flex, Input, Typography } from "antd";
import { useState } from "react";
import { GeneralQuestionMetadata } from "../../GeneralQuestionMetadata";

type Props = {
  questionMetadata: GeneralQuestionMetadata;
};

const { Title } = Typography;

export function DesignModeShortTextQuestion({ questionMetadata }: Props) {
  const [value, setValue] = useState("Short-answer text");
  return (
    <Flex vertical>
      <Title>{questionMetadata.rule}</Title>
      <Input
        type="text"
        placeholder={questionMetadata.type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </Flex>
  );
}
