import { Card, Checkbox, Space } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useContext, useState } from "react";
import { useFragment, useLazyLoadQuery, useMutation } from "react-relay";
import { useParams } from "react-router-dom";
import FormInstanceContext from "../../FormInstanceContext";
import { CheckboxQuestionFragment$key } from "./__generated__/CheckboxQuestionFragment.graphql";
import { CheckboxQuestionResponseQuery } from "./__generated__/CheckboxQuestionResponseQuery.graphql";
import { CheckboxQuestionUpdateMutation } from "./__generated__/CheckboxQuestionUpdateMutation.graphql";
import { CheckboxValueType } from "antd/es/checkbox/Group";

type Props = {
  fragmentKey: CheckboxQuestionFragment$key;
};
export function CheckboxQuestion({ fragmentKey }: Props) {
  const { status } = useContext(FormInstanceContext);
  const question = useFragment(fragment, fragmentKey);
  const { instanceID } = useParams();
  const data = useLazyLoadQuery<CheckboxQuestionResponseQuery>(query, {
    questionID: question.id,
    formInstanceID: instanceID ?? "",
  });
  const responseID = (data.questionResponses.edges ?? [])[0]?.node?.id ?? "";
  const initialResponseValue =
    (data.questionResponses.edges ?? [])[0]?.node?.value ?? "";
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(
    initialResponseValue !== ""
      ? (JSON.parse(initialResponseValue) as CheckboxValueType[])
      : []
  );
  const [commitUpdate] = useMutation<CheckboxQuestionUpdateMutation>(
    updateQuestionResponseMutation
  );
  const handleChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    commitUpdate({
      variables: {
        input: { questionID: question.id, value: JSON.stringify(list) },
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
      <Checkbox.Group
        onChange={handleChange}
        value={checkedList}
        disabled={status === "submiited"}
      >
        <Space direction="vertical">
          {Array.from(JSON.parse(question.extraData)).map((option, index) => (
            <Checkbox value={option} key={index}>
              {option as string}
            </Checkbox>
          ))}
        </Space>
      </Checkbox.Group>
    </Card>
  );
}

const fragment = graphql`
  fragment CheckboxQuestionFragment on Question {
    id
    label
    title
    type
    required
    extraData
    __typename
  }
`;

const updateQuestionResponseMutation = graphql`
  mutation CheckboxQuestionUpdateMutation(
    $input: UpdateQuestionResponseInput!
    $id: ID!
  ) {
    updateQuestionResponse(input: $input, id: $id) {
      id
    }
  }
`;

const query = graphql`
  query CheckboxQuestionResponseQuery($questionID: ID!, $formInstanceID: ID!) {
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
