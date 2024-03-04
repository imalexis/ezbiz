import { Card, DatePicker, DatePickerProps } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useFragment, useLazyLoadQuery, useMutation } from "react-relay";
import { useContext, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DateQuestionUpdateMutation } from "./__generated__/DateQuestionUpdateMutation.graphql";
import { useParams } from "react-router-dom";
import { DateQuestionResponseQuery } from "./__generated__/DateQuestionResponseQuery.graphql";
import FormInstanceContext from "../../FormInstanceContext";
import { ResponseModeDateQuestionFragment$key } from "./__generated__/ResponseModeDateQuestionFragment.graphql";

type Props = {
  fragmentKey: ResponseModeDateQuestionFragment$key;
};
export default function ResponseModeDateQuestion({ fragmentKey }: Props) {
  const question = useFragment(fragment, fragmentKey);
  const { instanceID } = useParams();

  const handleChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDate(date);
  };
  const [updateQuestion] = useMutation<DateQuestionUpdateMutation>(mutation);
  const data = useLazyLoadQuery<DateQuestionResponseQuery>(query, {
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
