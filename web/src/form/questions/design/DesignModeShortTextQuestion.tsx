import { Flex, Input, Tabs, Typography } from "antd";
import { useState } from "react";
import { GeneralQuestionMetadata } from "../../GeneralQuestionMetadata";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";

type Props = {
  questionMetadata: GeneralQuestionMetadata;
};

const { Title, Text } = Typography;

export function DesignModeShortTextQuestion({ questionMetadata }: Props) {
  const [value, setValue] = useState("Short-answer text");
  const [activeTab, setActiveTab] = useState("1");

  const labels = ["Default", "Metadata"];
  const items = [
    <Flex vertical>
      <Flex>
        <Input
          type="text"
          placeholder={questionMetadata.type}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Flex>
    </Flex>,

    <Flex gap={6}>
      <Flex align="center">
        <Text>Rule </Text>
      </Flex>
      <Flex>
        <Input value={questionMetadata.rule} />
      </Flex>
    </Flex>,
  ];

  return (
    <Tabs
      defaultActiveKey={activeTab}
      onChange={(activeKey) => {
        console.log("activeKey", activeKey);
        setActiveTab(activeKey);
      }}
      items={[EditOutlined, SettingOutlined].map((Icon, index) => {
        const id = String(index);
        return {
          key: id,
          label: labels[Number(index)],
          children: items[Number(activeTab)],
          icon: <Icon />,
        };
      })}
    />
  );
}
