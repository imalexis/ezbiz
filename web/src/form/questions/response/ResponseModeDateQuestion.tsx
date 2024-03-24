import { Card, DatePicker, DatePickerProps } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useFragment, useLazyLoadQuery, useMutation } from "react-relay";
import { useContext, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useParams } from "react-router-dom";
import FormInstanceContext from "../../FormInstanceContext";
import { ResponseModeDateQuestionFragment$key } from "./__generated__/ResponseModeDateQuestionFragment.graphql";
import { ResponseModeDateQuestionUpdateMutation } from "./__generated__/ResponseModeDateQuestionUpdateMutation.graphql";
import { ResponseModeDateQuestionResponseQuery } from "./__generated__/ResponseModeDateQuestionResponseQuery.graphql";
import { Parser } from "../../../lib/expr/parser";
import { Evaluator } from "../../../lib/expr/evaluator";

type Props = {
  fragmentKey: ResponseModeDateQuestionFragment$key;
  localSharedValues?: Map<string, string>;
  setLocalSharedValues?: React.Dispatch<
    React.SetStateAction<Map<string, string>>
  >;
};

export function DynamicResponseModeDateQuestion({
  fragmentKey,
  localSharedValues,
  setLocalSharedValues,
}: Props) {
  const question = useFragment(fragment, fragmentKey);
  const parser = new Parser(question.rule);
  const program = parser.parse();
  const evaluator = new Evaluator();
  const deps = JSON.parse(question.dependencies) as Array<string>;
  deps.forEach((dep) => {
    evaluator.env.set(dep, parseInt(localSharedValues?.get(dep) ?? "0"));
  });
  const output = evaluator.eval(program);
  const isVisible = (output.get("visible") ?? 0) > 0;
  if (isVisible) {
    return <ResponseModeDateQuestion fragmentKey={fragmentKey} />;
  }
  return null;
}

export default function ResponseModeDateQuestion({ fragmentKey }: Props) {
  const question = useFragment(fragment, fragmentKey);
  const { instanceID } = useParams();

  const handleChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDate(date);
  };
  const [updateQuestion] =
    useMutation<ResponseModeDateQuestionUpdateMutation>(mutation);
  const data = useLazyLoadQuery<ResponseModeDateQuestionResponseQuery>(query, {
    questionID: question.id,
    formInstanceID: instanceID ?? "",
  });
  const initialResponseValue = (data.questionResponses.edges ?? [])[0]?.node
    ?.value;
  const [date, setDate] = useState<Dayjs | null>(dayjs(initialResponseValue));
  const responseID = (data.questionResponses.edges ?? [])[0]?.node?.id ?? "";
  const handleBlur = () => {
    updateQuestion({
      variables: {
        input: { questionID: question.id, value: date?.toISOString() },
        id: responseID,
      },
    });
  };
  const { status } = useContext(FormInstanceContext);

  return (
    <Card
      title={question.title}
      bordered={false}
      style={{ margin: "8px", width: "100%" }}
    >
      <DatePicker
        onChange={handleChange}
        value={date}
        onBlur={handleBlur}
        disabled={status === "submiited"}
      />
    </Card>
  );
}

const fragment = graphql`
  fragment ResponseModeDateQuestionFragment on Question {
    id
    label
    title
    type
    required
    extraData
    rule
    dependencies
  }
`;

const mutation = graphql`
  mutation ResponseModeDateQuestionUpdateMutation(
    $input: UpdateQuestionResponseInput!
    $id: ID!
  ) {
    updateQuestionResponse(input: $input, id: $id) {
      id
    }
  }
`;
const query = graphql`
  query ResponseModeDateQuestionResponseQuery(
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
