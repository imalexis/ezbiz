import { Input } from "antd";
import { useState } from "react";
import { GeneralQuestionMetadata } from "../../GeneralQuestionMetadata";

type Props = {
  questionMetadata: GeneralQuestionMetadata;
};

export function DesignModeShortTextQuestion({ questionMetadata }: Props) {
  const [value, setValue] = useState("Short-answer text");
  return (
    <>
      <Input
        type="text"
        placeholder={questionMetadata.type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
}
