import { Card, Input } from "antd";
import graphql from "babel-plugin-relay/macro";
import { ShortTextQuestionFragment$key } from "./__generated__/ShortTextQuestionFragment.graphql";
import { useFragment, useLazyLoadQuery, useMutation } from "react-relay";
import { useContext, useState } from "react";
import { ShortTextQuestionUpdateMutation } from "./__generated__/ShortTextQuestionUpdateMutation.graphql";
import FormInstanceContext from "./FormInstanceContext";
import { useParams } from "react-router-dom";
import { ShortTextQuestionResponseQuery } from "./__generated__/ShortTextQuestionResponseQuery.graphql";

type Props = {
  fragmentKey: ShortTextQuestionFragment$key;
};

export function ShortTextQuestion({ fragmentKey }: Props) {
  const question = useFragment(fragment, fragmentKey);
  const { instanceID } = useParams();
  const data = useLazyLoadQuery<ShortTextQuestionResponseQuery>(query, {
    questionID: question.id,
    formInstanceID: instanceID ?? "",
  });
  const responseID = (data.questionResponses.edges ?? [])[0]?.node?.id ?? "";
  const initialResponseValue =
    (data.questionResponses.edges ?? [])[0]?.node?.value ?? "";
  const [questionInput, setQuestionInput] = useState(initialResponseValue);
  const [commit] = useMutation<ShortTextQuestionUpdateMutation>(mutation);
  const { status } = useContext(FormInstanceContext);
  return (
    <Card
      title={question.title}
      bordered={false}
      style={{ margin: "8px", width: "100%" }}
    >
      <Input
        type="text"
        placeholder={question.type}
        value={questionInput}
        onChange={(event) => setQuestionInput(event.target.value)}
        onBlur={() => {
          commit({
            variables: {
              input: {
                questionID: question.id,
                value: questionInput,
              },
              id: responseID,
            },
            onCompleted: (resp, err) => {
              alert("ok");
            },
          });
        }}
        disabled={status === "submiited"}
      />
    </Card>
  );
}

const fragment = graphql`
  fragment ShortTextQuestionFragment on Question {
    id
    label
    title
    type
    required
    extraData
  }
`;

const query = graphql`
  query ShortTextQuestionResponseQuery($questionID: ID!, $formInstanceID: ID!) {
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

// update questionResponse
const mutation = graphql`
  mutation ShortTextQuestionUpdateMutation(
    $input: UpdateQuestionResponseInput!
    $id: ID!
  ) {
    updateQuestionResponse(input: $input, id: $id) {
      id
    }
  }
`;
