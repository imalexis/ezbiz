import { Button, Flex, Radio, Space } from "antd";
import { useState } from "react";
import { EZBizRadio } from "./EzbizRadio";
import { QuestionMetadata } from "../GeneralQuestion";

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
  const initialOptions: Array<string> =
    initialExtraData !== ""
      ? (JSON.parse(initialExtraData ?? "") as Array<string>)
      : [];
  const [options, setOptions] = useState(initialOptions);
  const deleteOption = (idx: number) => {
    if (idx >= 0 && idx < options.length) {
      setOptions(options.filter((v, index) => idx !== index));
    }
  };
  const updateOption = (idx: number, modifiedOption: string) => {
    if (idx >= 0 && idx < options.length) {
      const newOptions = [...options];
      newOptions[idx] = modifiedOption;
      setOptions(newOptions);
    } else {
      console.error("invalid option index.");
    }
  };
  const handleAddOption = () => {
    setOptions([...options, "option"]);
  };
  return (
    <Flex vertical>
      <Radio.Group
        onBlur={() => {
          const extraData = JSON.stringify(options);
          setLocalQuestionExtraData(questionIndex, extraData);
        }}
      >
        <Space direction="vertical">
          {options.map((opt, idx) => (
            <EZBizRadio
              index={idx}
              option={opt}
              key={idx}
              setOption={updateOption}
              deleteOption={deleteOption}
            />
          ))}
        </Space>
      </Radio.Group>

      <Button style={{ margin: "10px" }} onClick={handleAddOption}>
        Add option
      </Button>
    </Flex>
  );
}
