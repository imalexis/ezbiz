import { Card, Col, Flex, InputNumber, Slider } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useFragment, useLazyLoadQuery, useMutation } from "react-relay";
import { useState } from "react";
import { LinearScaleQuestionUpdateMutation } from "./__generated__/LinearScaleQuestionUpdateMutation.graphql";
import { LinearScaleQuestionResponseQuery } from "./__generated__/LinearScaleQuestionResponseQuery.graphql";
import { useParams } from "react-router-dom";
import { ResponseModeLinearScaleQuestionFragment$key } from "./__generated__/ResponseModeLinearScaleQuestionFragment.graphql";

type Props = {
  fragmentKey: ResponseModeLinearScaleQuestionFragment$key;
};

type Range = {
  minValue: number;
  maxValue: number;
};

export default function ResponseModeLinearScaleQuestion({
  fragmentKey,
}: Props) {
  const { instanceID } = useParams();
  const question = useFragment(fragment, fragmentKey);
  const extraData = JSON.parse(question.extraData) as Range;
  const [updateQuestionResponse] =
    useMutation<LinearScaleQuestionUpdateMutation>(updateMutation);
  const data = useLazyLoadQuery<LinearScaleQuestionResponseQuery>(query, {
    questionID: question.id,
    formInstanceID: instanceID ?? "",
  });

  const responseID = (data.questionResponses.edges ?? [])[0]?.node?.id ?? "";
  const initialValue =
    (data.questionResponses.edges ?? [])[0]?.node?.value ?? "";
  console.log("v = ", initialValue);
  const [inputValue, setInputValue] = useState<number>(
    parseInt(initialValue) ?? 0
  );

  const handleBlur = () => {
    updateQuestionResponse({
      variables: {
        input: { questionID: question.id, value: inputValue.toString() },
        id: responseID,
      },
    });
  };
  return (
    <Card
      title={question.title}
      bordered={false}
      style={{ margin: "8px", width: "100%" }}
      onBlur={handleBlur}
    >
      <Flex>
        <Col span={1}>Min: {extraData.minValue}</Col>
        <Col span={6}>
          <Slider
            min={extraData.minValue}
            max={extraData.maxValue}
            value={inputValue}
            onChange={(e) => setInputValue(e)}
          />
        </Col>
        <Col span={1}>Max: {extraData.maxValue}</Col>
        <Col span={4}>
          <InputNumber
            min={extraData.minValue}
            max={extraData.maxValue}
            style={{ margin: "0 16px" }}
            value={inputValue}
            onChange={(e) => setInputValue(e ?? 0)}
          />
        </Col>
      </Flex>
    </Card>
  );
}

// query properties about Question
const fragment = graphql`
  fragment ResponseModeLinearScaleQuestionFragment on Question {
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
  mutation ResponseModeLinearScaleQuestionUpdateMutation(
    $input: UpdateQuestionResponseInput!
    $id: ID!
  ) {
    updateQuestionResponse(input: $input, id: $id) {
      id
    }
  }
`;

const query = graphql`
  query ResponseModeLinearScaleQuestionResponseQuery(
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
