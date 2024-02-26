import { Input } from "antd";
import { useState } from "react";
import { QuestionMetadata } from "../GeneralQuestion";

const { TextArea } = Input;
type Props = {
  questionMetadata: QuestionMetadata;
};

export default function DesignModeParagraphQuestion({
  questionMetadata,
}: Props) {
  const [value, setValue] = useState("Long-answer text");
  return (
    <TextArea
      placeholder={questionMetadata.type}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}
