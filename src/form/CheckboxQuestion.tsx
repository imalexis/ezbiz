import { Card, Radio, RadioChangeEvent, Space } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useState } from "react";
import { useFragment, useMutation } from "react-relay";
import { CheckboxQuestionFragment$key } from "./__generated__/CheckboxQuestionFragment.graphql";
import { CheckboxQuestionUpdateMutation } from "./__generated__/CheckboxQuestionUpdateMutation.graphql";

type Props = {
  fragmentKey: CheckboxQuestionFragment$key;
};
export function CheckboxQuestion({ fragmentKey }: Props) {
  const question = useFragment(fragment, fragmentKey);
  const [value, setValue] = useState(1);
  const [createdResponseId, setCreatedResponseId] = useState<string | null>(
    null
  ); // A state to store created response ID by the mutation commit function [commitCreate]

  const [commitUpdate] =
    useMutation<CheckboxQuestionUpdateMutation>(updateMutation);

  const handleChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    if (createdResponseId) {
      commitUpdate({
        variables: {
          input: { value: value.toString() },
          id: createdResponseId,
        },
      });
    }
  };

  return (
    <Card
      title={question.title}
      bordered={false}
      style={{ margin: "8px", width: "100%" }}
    >
      <Radio.Group onChange={handleChange} value={value}>
        <Space direction="vertical">
          {Array.from(JSON.parse(question.extraData)).map((option, index) => (
            <Radio value={option}>{option as string}</Radio>
          ))}
        </Space>
      </Radio.Group>
    </Card>
  );
}

// query properties about Question
const fragment = graphql`
  fragment CheckboxQuestionFragment on Question {
    id
    label
    title
    type
    required
    extraData
    __typename
  }
`;

// update questionResponse
const updateMutation = graphql`
  mutation CheckboxQuestionUpdateMutation(
    $input: UpdateQuestionResponseInput!
    $id: ID!
  ) {
    updateQuestionResponse(input: $input, id: $id) {
      id
    }
  }
`;
