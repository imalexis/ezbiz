import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { Card, Dropdown, MenuProps, Space, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ResponseModeDropdownQuestionFragment$key } from "./__generated__/ResponseModeDropdownQuestionFragment.graphql";

type Props = {
  fragmentKey: ResponseModeDropdownQuestionFragment$key;
};

export function ResponseModeDropdownQuestion({ fragmentKey }: Props) {
  const question = useFragment(fragment, fragmentKey);

  const onClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const items: MenuProps["items"] = Array.from(
    JSON.parse(question.extraData)
  ).map((item, index) => ({
    label: item as string,
    key: index.toString(),
  }));

  return (
    <Card
      title={question.title}
      bordered={false}
      style={{ margin: "8px", width: "100%" }}
    >
      <Dropdown menu={{ items, onClick }}>
        <Space>
          {question.label}
          <DownOutlined />
        </Space>
      </Dropdown>
    </Card>
  );
}

const fragment = graphql`
  fragment ResponseModeDropdownQuestionFragment on Question {
    id
    label
    title
    type
    required
    extraData
    __typename
  }
`;
