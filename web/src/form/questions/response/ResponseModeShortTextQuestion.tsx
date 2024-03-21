import { Card, Input } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useFragment, useLazyLoadQuery, useMutation } from "react-relay";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import FormInstanceContext from "../../FormInstanceContext";
import { ResponseModeShortTextQuestionFragment$key } from "./__generated__/ResponseModeShortTextQuestionFragment.graphql";
import { ResponseModeShortTextQuestionResponseQuery } from "./__generated__/ResponseModeShortTextQuestionResponseQuery.graphql";
import { ResponseModeShortTextQuestionUpdateMutation } from "./__generated__/ResponseModeShortTextQuestionUpdateMutation.graphql";

type Props = {
  fragmentKey: ResponseModeShortTextQuestionFragment$key;
};

export function RespondModeShortTextQuestion({ fragmentKey }: Props) {
  const question = useFragment(fragment, fragmentKey);
  const { instanceID } = useParams();
  const data = useLazyLoadQuery<ResponseModeShortTextQuestionResponseQuery>(
    query,
    {
      questionID: question.id,
      formInstanceID: instanceID ?? "",
    }
  );
  const responseID = (data.questionResponses.edges ?? [])[0]?.node?.id ?? "";
  const initialResponseValue =
    (data.questionResponses.edges ?? [])[0]?.node?.value ?? "";
  const [questionInput, setQuestionInput] = useState(initialResponseValue);
  const [commit] =
    useMutation<ResponseModeShortTextQuestionUpdateMutation>(mutation);
  const { status } = useContext(FormInstanceContext);
  //   const responseContext =
  //     useLazyLoadQuery<ResponseModeShortTextQuestionFormResponseContextQuery>(
  //       formResponseQuery,
  //       {
  //         id: instanceID ?? "",
  //       }
  //     );
  //   const responseContextFragment =
  //     useFragment<ResponseModeShortTextQuestionFormResponseContextFragment$key>(
  //       formResponseFragment,
  //       responseContext.node
  //     );
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
            onCompleted: () => {},
          });
        }}
        disabled={status === "submiited"}
      />
    </Card>
  );
}

const fragment = graphql`
  fragment ResponseModeShortTextQuestionFragment on Question {
    id
    label
    title
    type
    required
    extraData
  }
`;

const query = graphql`
  query ResponseModeShortTextQuestionResponseQuery(
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

// update questionResponse
const mutation = graphql`
  mutation ResponseModeShortTextQuestionUpdateMutation(
    $input: UpdateQuestionResponseInput!
    $id: ID!
  ) {
    updateQuestionResponse(input: $input, id: $id) {
      id
    }
  }
`;

const formResponseQuery = graphql`
  query ResponseModeShortTextQuestionFormResponseContextQuery($id: ID!) {
    node(id: $id) {
      __typename
      ...ResponseModeShortTextQuestionFormResponseContextFragment
    }
  }
`;

const formResponseFragment = graphql`
  fragment ResponseModeShortTextQuestionFormResponseContextFragment on FormInstance {
    id
    questionResponse {
      label
      value
    }
  }
`;
