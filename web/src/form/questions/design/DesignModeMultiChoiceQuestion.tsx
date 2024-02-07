import { Button, Flex, Radio, Space } from "antd";
import { QuestionMetadata } from "../../FormSpecCreateEntryPoint";
import { useState } from "react";
import { EZBizRadio } from "./EzbizRadio";

type Props = {
  questionMetadata: QuestionMetadata;
  setLocalQuestionExtraData: (idx: number, extraData: string) => void;
  questionIndex: number;
};

export default function DesignModeMultiChoiceQuestion({
  questionMetadata,
  setLocalQuestionExtraData,
  questionIndex,
}: Props) {
  const initialExtraData = questionMetadata.extraData;
  const initialOptions = JSON.parse(initialExtraData ?? "") as Array<string>;
  const [options, setOptions] = useState(initialOptions);
  const setOption = (idx: number, modifiedOption: string) => {
    // Check if the index is valid.
    if (idx >= 0 && idx < options.length) {
      // Create a newOptions array where the element at index idx is replaced with newOption.
      const newOptions = [...options];
      newOptions[idx] = modifiedOption;
      // Update the state using setOptions.
      setOptions(newOptions);
    } else {
      console.error("invalid option index.");
    }
  };

  const extraData = JSON.stringify(options);

  return (
    <Flex vertical>
      <Radio.Group
        onBlur={() => {
          setLocalQuestionExtraData(questionIndex, extraData);
        }}
      >
        <Space direction="vertical">
          {options.map((opt, idx) => (
            <EZBizRadio index={idx} option={opt} setOption={setOption} />
          ))}
        </Space>
      </Radio.Group>

      <Button
        style={{ margin: "10px" }}
        onClick={() => {
          setOptions([...options, "option"]);
        }}
      >
        Add option
      </Button>
    </Flex>
  );
}
