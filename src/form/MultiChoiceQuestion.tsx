import { Card, Radio, RadioChangeEvent, Space } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useState } from "react";
import { useFragment, useMutation } from "react-relay";
import { MultiChoiceQuestionFragment$key } from "./__generated__/MultiChoiceQuestionFragment.graphql";
import { MultiChoiceQuestionUpdateMutation } from "./__generated__/MultiChoiceQuestionUpdateMutation.graphql";

type Props = {
  fragmentKey: MultiChoiceQuestionFragment$key;
};
export function MultiChoiceQuestion({ fragmentKey }: Props) {
  const question = useFragment(fragment, fragmentKey);
  const [value, setValue] = useState(1);
  const [createdResponseId, setCreatedResponseId] = useState<string | null>(
    null
  ); // A state to store created response ID by the mutation commit function [commitCreate]

  const [commitUpdate] =
    useMutation<MultiChoiceQuestionUpdateMutation>(updateMutation);

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
  fragment MultiChoiceQuestionFragment on Question {
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
  mutation MultiChoiceQuestionUpdateMutation(
    $input: UpdateQuestionResponseInput!
    $id: ID!
  ) {
    updateQuestionResponse(input: $input, id: $id) {
      id
    }
  }
`;
