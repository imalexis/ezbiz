import { Card, Flex, Input, Select, Typography } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useNavigate, useParams } from "react-router-dom";
import { FormSpecCreateEntryPointMutation } from "./__generated__/FormSpecCreateEntryPointMutation.graphql";
import { useLazyLoadQuery, useMutation } from "react-relay";
import { FormSpecCreateEntryPointUpdateMutation } from "./__generated__/FormSpecCreateEntryPointUpdateMutation.graphql";
import { useState } from "react";
import { FormSpecCreateEntryPointQuery } from "./__generated__/FormSpecCreateEntryPointQuery.graphql";
import { QuestionType } from "./__generated__/FormSpecCardFragment.graphql";
import { PendingQuestionPointMutation } from "./__generated__/PendingQuestionPointMutation.graphql";
import { PendingQuestionPointUpdateMutation } from "./__generated__/PendingQuestionPointUpdateMutation.graphql";
import { PendingQuestionPointQuery } from "./__generated__/PendingQuestionPointQuery.graphql";

const { Text } = Typography;

export function PendingQuestion() {
  const { formID } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [commitCreateQuestion] =
    useMutation<PendingQuestionPointMutation>(mutation);
  const [commitUpdateQuestionGroup] =
    useMutation<PendingQuestionPointUpdateMutation>(mutation2);
  const dataSource = useLazyLoadQuery<PendingQuestionPointQuery>(query, {
    id: formID ?? "",
  });

  const [selectedValue, setSelectedValue] = useState("short_text");
  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  const renderCardContent = () => {
    switch (selectedValue) {
      case "short_text":
        return (
          <Flex>
            <Text type="secondary">Short-answer text</Text>
          </Flex>
        );
      case "paragraph":
        return (
          <Flex>
            <Text type="secondary">Long-answer text</Text>
          </Flex>
        );
      default:
        return (
          <Flex>
            <Text type="secondary">Short-answer text</Text>
          </Flex>
        );
    }
  };

  return (
    <Card
      style={{ width: "60%" }}
      onBlur={() => {
        commitCreateQuestion({
          variables: {
            input: {
              label: title,
              type: selectedValue as QuestionType,
              required: true,
              createdBy: 1,
            },
          },
          onCompleted: (response, errors) => {
            console.log(selectedValue as QuestionType);
            if (dataSource.node?.questionGroups != null) {
              commitUpdateQuestionGroup({
                variables: {
                  id: dataSource.node?.questionGroups[0].id,
                  input: { addQuestionIDs: [response.createQuestion.id] },
                },
              });
            }
          },
        });
      }}
    >
      <Flex vertical gap={"middle"}>
        <Flex justify="space-between">
          <Input
            placeholder="Question"
            style={{ width: "60%" }}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Select
            style={{ width: "25%" }}
            value={selectedValue}
            onChange={handleChange}
            options={[
              { value: "short_text", label: "Short answer" },
              { value: "paragraph", label: "Paragraph" },
            ]}
          />
        </Flex>
        {renderCardContent()}
      </Flex>
    </Card>
  );
}

// create "pending question"
const mutation = graphql`
  mutation PendingQuestionPointMutation($input: CreateQuestionInput!) {
    createQuestion(input: $input) {
      __typename
      id
    }
  }
`;

// update "pending question"
const mutation2 = graphql`
  mutation PendingQuestionPointUpdateMutation(
    $input: UpdateQuestionGroupInput!
    $id: ID!
  ) {
    updateQuestionGroup(input: $input, id: $id) {
      id
    }
  }
`;

const query = graphql`
  query PendingQuestionPointQuery($id: ID!) {
    node(id: $id) {
      ... on FormSpec {
        questionGroups {
          id
        }
      }
    }
  }
`;
