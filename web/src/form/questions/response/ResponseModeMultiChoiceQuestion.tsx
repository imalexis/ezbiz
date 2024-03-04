import { Card, Radio, RadioChangeEvent, Space } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useContext, useState } from "react";
import { useFragment, useLazyLoadQuery, useMutation } from "react-relay";
import { useParams } from "react-router-dom";
import FormInstanceContext from "../../FormInstanceContext";
import { MultiChoiceQuestionUpdateMutation } from "./__generated__/MultiChoiceQuestionUpdateMutation.graphql";
import { MultiChoiceQuestionResponseQuery } from "./__generated__/MultiChoiceQuestionResponseQuery.graphql";
import { ResponseModeMultiChoiceQuestionFragment$key } from "./__generated__/ResponseModeMultiChoiceQuestionFragment.graphql";

type Props = {
  fragmentKey: ResponseModeMultiChoiceQuestionFragment$key;
};
export function ResponseModeMultiChoiceQuestion({ fragmentKey }: Props) {
  const { status } = useContext(FormInstanceContext);
  const question = useFragment(fragment, fragmentKey);
  const { instanceID } = useParams();
  const data = useLazyLoadQuery<MultiChoiceQuestionResponseQuery>(query, {
    questionID: question.id,
    formInstanceID: instanceID ?? "",
  });
  const responseID = (data.questionResponses.edges ?? [])[0]?.node?.id ?? "";
  const initialResponseValue =
    (data.questionResponses.edges ?? [])[0]?.node?.value ?? "";
  const [value, setValue] = useState(initialResponseValue);
  const [commitUpdate] =
    useMutation<MultiChoiceQuestionUpdateMutation>(updateMutation);
  const handleChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    commitUpdate({
      variables: {
        input: { questionID: question.id, value: e.target.value },
        id: responseID,
      },
    });
  };
  return (
    <Card
      title={question.title}
      bordered={false}
      style={{ margin: "8px", width: "100%" }}
    >
      <Radio.Group
        onChange={handleChange}
        value={value}
        disabled={status === "submiited"}
      >
        <Space direction="vertical">
          {Array.from(JSON.parse(question.extraData)).map((option, index) => (
            <Radio value={option} key={index}>
              {option as string}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </Card>
  );
}

// query properties about Question
const fragment = graphql`
  fragment ResponseModeMultiChoiceQuestionFragment on Question {
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
  mutation ResponseModeMultiChoiceQuestionUpdateMutation(
    $input: UpdateQuestionResponseInput!
    $id: ID!
  ) {
    updateQuestionResponse(input: $input, id: $id) {
      id
    }
  }
`;

const query = graphql`
  query ResponseModeMultiChoiceQuestionResponseQuery(
    $questionID: ID!
    $formInstanceID: ID!
  ) {
    questionResponses(
      where: {
        hasQuestionWith: [{ id: $questionID }]
        hasFormInstanceWith: [{ id: $formInstanceID }]
      }
    ) {
      edges {
        node {
          __typename
          ... on QuestionResponse {
            id
            value
          }
        }
      }
    }
  }
`;
