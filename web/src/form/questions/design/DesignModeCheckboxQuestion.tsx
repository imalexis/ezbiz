import { Button, Checkbox, Flex, Space } from "antd";
import { useState } from "react";
import EzbizCheckbox from "./EzbizCheckbox";
import { GeneralQuestionMetadata } from "../../GeneralQuestionMetadata";

type Props = {
  questionMetadata: GeneralQuestionMetadata;
  setLocalQuestionExtraData: (idx: number, extraData: string) => void;
  questionIndex: number;
};

export default function DesignModeCheckboxQuestion({
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
    <Flex
      vertical
      onBlur={() => {
        const extraData = JSON.stringify(options);
        setLocalQuestionExtraData(questionIndex, extraData);
      }}
    >
      <Checkbox.Group>
        <Space direction="vertical">
          {options.map((opt, idx) => (
            <EzbizCheckbox
              key={idx}
              index={idx}
              option={opt}
              setOption={updateOption}
              deleteOption={deleteOption}
            />
          ))}
        </Space>
      </Checkbox.Group>

      <Button style={{ margin: "10px" }} onClick={handleAddOption}>
        Add option
      </Button>
    </Flex>
  );
}
