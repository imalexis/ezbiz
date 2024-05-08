import { Card, Col, Flex, InputNumber, Slider } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useFragment, useLazyLoadQuery, useMutation } from "react-relay";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ResponseModeLinearScaleQuestionFragment$key } from "./__generated__/ResponseModeLinearScaleQuestionFragment.graphql";
import { ResponseModeLinearScaleQuestionUpdateMutation } from "./__generated__/ResponseModeLinearScaleQuestionUpdateMutation.graphql";
import { ResponseModeLinearScaleQuestionResponseQuery } from "./__generated__/ResponseModeLinearScaleQuestionResponseQuery.graphql";
import { Parser } from "../../../lib/expr/parser";
import { Evaluator } from "../../../lib/expr/evaluator";

type Props = {
  fragmentKey: ResponseModeLinearScaleQuestionFragment$key;
  localSharedValues?: Map<string, string>;
  setLocalSharedValues?: React.Dispatch<
    React.SetStateAction<Map<string, string>>
  >;
};

type Range = {
  minValue: number;
  maxValue: number;
};

export function DynamicResponseModeLinearScaleQuestion({
  fragmentKey,
  localSharedValues,
  setLocalSharedValues,
}: Props) {
  const question = useFragment(fragment, fragmentKey);
  let isVisible = true;
  const parser = new Parser(question.rule);
  const program = parser.parse();
  const evaluator = new Evaluator();
  const deps = JSON.parse(question.dependencies) as Array<string>;
  deps.forEach((dep) => {
    evaluator.env.set(dep, parseInt(localSharedValues?.get(dep) ?? "0"));
  });
  const output = evaluator.eval(program);
  if (output.get("visible") != null) {
    isVisible = output.get("visible") as boolean;
  }
  if (isVisible) {
    return (
      <ResponseModeLinearScaleQuestion
        fragmentKey={fragmentKey}
        localSharedValues={localSharedValues}
        setLocalSharedValues={setLocalSharedValues}
      />
    );
  }
  return null;
}

export default function ResponseModeLinearScaleQuestion({
  fragmentKey,
  localSharedValues,
  setLocalSharedValues,
}: Props) {
  const { instanceID } = useParams();
  const question = useFragment(fragment, fragmentKey);
  const extraData = JSON.parse(
    question.extraData === ""
      ? JSON.stringify({
          minValue: 0,
          maxValue: 100,
        })
      : question.extraData
  ) as Range;
  const [updateQuestionResponse] =
    useMutation<ResponseModeLinearScaleQuestionUpdateMutation>(updateMutation);
  const data = useLazyLoadQuery<ResponseModeLinearScaleQuestionResponseQuery>(
    query,
    {
      questionID: question.id,
      formInstanceID: instanceID ?? "",
    }
  );

  const responseID = (data.questionResponses.edges ?? [])[0]?.node?.id ?? "";
  const initialValue =
    (data.questionResponses.edges ?? [])[0]?.node?.value ?? "";
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
    const newLocalSharedValues: Map<string, string> = new Map(
      localSharedValues
    );
    newLocalSharedValues.set(question.label, inputValue.toString());
    if (setLocalSharedValues != null) {
      setLocalSharedValues(newLocalSharedValues);
    }
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
    rule
    dependencies
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
