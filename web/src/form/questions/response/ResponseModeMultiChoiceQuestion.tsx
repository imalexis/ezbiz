import { Card, Radio, RadioChangeEvent, Space } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useContext, useState } from "react";
import { useFragment, useLazyLoadQuery, useMutation } from "react-relay";
import { useParams } from "react-router-dom";
import FormInstanceContext from "../../FormInstanceContext";
import { ResponseModeMultiChoiceQuestionResponseQuery } from "./__generated__/ResponseModeMultiChoiceQuestionResponseQuery.graphql";
import { ResponseModeMultiChoiceQuestionUpdateMutation } from "./__generated__/ResponseModeMultiChoiceQuestionUpdateMutation.graphql";
import { Parser } from "../../../lib/expr/parser";
import { ResponseModeMultiChoiceQuestionFragment$key } from "./__generated__/ResponseModeMultiChoiceQuestionFragment.graphql";
import { Evaluator } from "../../../lib/expr/evaluator";

type Props = {
  fragmentKey: ResponseModeMultiChoiceQuestionFragment$key;
  localSharedValues?: Map<string, string>;
  setLocalSharedValues?: React.Dispatch<
    React.SetStateAction<Map<string, string>>
  >;
};

export function DynamicResponseModeMultiChoiceQuestion({
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
      <ResponseModeMultiChoiceQuestion
        fragmentKey={fragmentKey}
        localSharedValues={localSharedValues}
        setLocalSharedValues={setLocalSharedValues}
      />
    );
  }
  return null;
}

export function ResponseModeMultiChoiceQuestion({ fragmentKey }: Props) {
  const { status } = useContext(FormInstanceContext);
  const question = useFragment(fragment, fragmentKey);
  const { instanceID } = useParams();
  const data = useLazyLoadQuery<ResponseModeMultiChoiceQuestionResponseQuery>(
    query,
    {
      questionID: question.id,
      formInstanceID: instanceID ?? "",
    }
  );
  const responseID = (data.questionResponses.edges ?? [])[0]?.node?.id ?? "";
  const initialResponseValue =
    (data.questionResponses.edges ?? [])[0]?.node?.value ?? "";
  const [value, setValue] = useState(initialResponseValue);
  const [commitUpdate] =
    useMutation<ResponseModeMultiChoiceQuestionUpdateMutation>(updateMutation);
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
    rule
    dependencies
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
