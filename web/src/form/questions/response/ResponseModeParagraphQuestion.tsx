import { Card } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useFragment, useLazyLoadQuery, useMutation } from "react-relay";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ResponseModeParagraphQuestionFragment$key } from "./__generated__/ResponseModeParagraphQuestionFragment.graphql";
import { ResponseModeParagraphQuestionResponseQuery } from "./__generated__/ResponseModeParagraphQuestionResponseQuery.graphql";
import { ResponseModeParagraphQuestionUpdateMutation } from "./__generated__/ResponseModeParagraphQuestionUpdateMutation.graphql";

type Props = {
  fragmentKey: ResponseModeParagraphQuestionFragment$key;
};
export function RespondModeParagraphQuestion({ fragmentKey }: Props) {
  const { instanceID } = useParams();
  const question = useFragment(fragment, fragmentKey);
  const data = useLazyLoadQuery<ResponseModeParagraphQuestionResponseQuery>(
    query,
    {
      questionID: question.id,
      formInstanceID: instanceID ?? "",
    }
  );
  const responseID = (data.questionResponses.edges ?? [])[0]?.node?.id ?? "";
  const [updateParagraph] =
    useMutation<ResponseModeParagraphQuestionUpdateMutation>(
      updateParagraphMutation
    );
  const [value, setValue] = useState(
    (data.questionResponses.edges ?? [])[0]?.node?.value ?? ""
  );
  const handleBlur = () => {
    updateParagraph({
      variables: {
        input: { questionID: question.id, value: value },
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
      <TextArea
        placeholder={question.type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onBlur={handleBlur}
      />
    </Card>
  );
}

const fragment = graphql`
  fragment ResponseModeParagraphQuestionFragment on Question {
    id
    label
    title
    type
    required
    extraData
    __typename
  }
`;

const query = graphql`
  query ResponseModeParagraphQuestionResponseQuery(
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
          ... on QuestionResponse {
            id
            value
          }
        }
      }
    }
  }
`;

const updateParagraphMutation = graphql`
  mutation ResponseModeParagraphQuestionUpdateMutation(
    $input: UpdateQuestionResponseInput!
    $id: ID!
  ) {
    updateQuestionResponse(input: $input, id: $id) {
      id
    }
  }
`;
