import { Col, Flex, InputNumber, Slider } from "antd";
import { useState } from "react";
import { GeneralQuestionMetadata } from "../../GeneralQuestionMetadata";

type Props = {
  questionMetadata: GeneralQuestionMetadata;
  setLocalQuestionExtraData: (idx: number, extraData: string) => void;
  questionIndex: number;
};

type Range = {
  minValue: number;
  maxValue: number;
};

export default function DesignModeLinearScaleQuestion({
  questionMetadata,
  setLocalQuestionExtraData,
  questionIndex,
}: Props) {
  console.log("questionMetadata", questionMetadata);
  const initialExtraData = questionMetadata.extraData;
  const range =
    initialExtraData !== ""
      ? (JSON.parse(initialExtraData ?? "") as Range)
      : {
          minValue: 1,
          maxValue: 100,
        };

  const [minValue, setMinValue] = useState(range.minValue);
  const [maxValue, setMaxValue] = useState(range.maxValue);
  const [inputValue, setInputValue] = useState(minValue);
  return (
    <Flex
      vertical
      gap="middle"
      onBlur={() => {
        const extraData = JSON.stringify({
          minValue: minValue,
          maxValue: maxValue,
        });
        setLocalQuestionExtraData(questionIndex, extraData);
      }}
    >
      <Flex>
        <Col span={12}>
          <Slider
            min={minValue}
            max={maxValue}
            value={inputValue}
            onChange={setInputValue}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={minValue}
            max={maxValue}
            style={{ margin: "0 16px" }}
            value={inputValue}
            onChange={(v) => {
              setInputValue(v ?? 0);
            }}
          />
        </Col>
      </Flex>
      <Flex>
        min:{" "}
        <InputNumber value={minValue} onChange={(e) => setMinValue(e ?? 0)} />
      </Flex>
      <Flex>
        max:{" "}
        <InputNumber
          type="text"
          value={maxValue}
          onChange={(e) => setMaxValue(e ?? 10)}
        />
      </Flex>
    </Flex>
  );
}

// 为了支持配置 minValue, maxValue
// minValue: _____
// maxValue: _____

// 调用updateExtraData 来将这两个属性存储到后端即可
// setLocalExtraData(JSON.stringfy({minValue: , maxValue: }))
