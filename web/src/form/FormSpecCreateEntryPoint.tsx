import { Button, Card, Flex, Input, Modal } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons";

import { useState } from "react";
import { useParams } from "react-router-dom";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery, useMutation } from "react-relay";
import GeneralQuestion from "./questions/GeneralQuestion";
import { QuestionType } from "./questions/design/__generated__/DesignModeShortTextQuestionFragment.graphql";
import { FormSpecCreateEntryPointMutation } from "./__generated__/FormSpecCreateEntryPointMutation.graphql";
import { FormSpecCreateEntryPointUpdateQuestionGroupMutation } from "./__generated__/FormSpecCreateEntryPointUpdateQuestionGroupMutation.graphql";
import { FormSpecCreateEntryPointQuery } from "./__generated__/FormSpecCreateEntryPointQuery.graphql";

export type QuestionMetadata = {
  title: string;
  label: string;
  type: QuestionType;
  createdAt: string | null;
};

export function FormSpecCreateEntryPoint() {
  const [create] = useMutation<FormSpecCreateEntryPointMutation>(mutation);
  const [addQuestion] =
    useMutation<FormSpecCreateEntryPointUpdateQuestionGroupMutation>(
      updateQuestionGroup
    );
  const { formID } = useParams();
  const data = useLazyLoadQuery<FormSpecCreateEntryPointQuery>(query, {
    id: formID ?? "",
  });
  const defaultGroupID = (data.node?.questionGroups ?? [])[0].id;
  const [pendingQuestions, setPendingQuestions] = useState<
    Array<QuestionMetadata>
  >(
    ((data.node?.questionGroups ?? [])[0].question ?? []).map((q) => {
      return {
        title: q.title,
        label: q.label,
        type: q.type,
        createdAt: q.createdAt,
      };
    })
  );
  const [localQuestions, setLocalQuestions] = useState<Array<QuestionMetadata>>(
    []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // question state
  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("");
  const [questionType, setQuestionType] = useState("");

  return (
    <Flex vertical align="center">
      <Modal
        title="create a new question"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        onOk={() => {
          setLocalQuestions([
            ...localQuestions, // come from database
            // local state
            {
              title,
              label,
              type: "short_text",
              createdAt: null,
            },
          ]);

          setIsModalOpen(false);
        }}
      >
        <p>
          label:{" "}
          <input
            type="text"
            value={label}
            onChange={(e) => {
              setLabel(e.target.value);
            }}
          />
        </p>
        <p>
          title:{" "}
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </p>
        <p>
          type:{" "}
          <input
            type="text"
            value={questionType}
            onChange={(e) => {
              setQuestionType(e.target.value);
            }}
          />
        </p>
      </Modal>
      <h1>formID: {formID}</h1>
      <h1>defaultGroupID: {defaultGroupID}</h1>
      <Button
        icon={<PlusCircleOutlined />}
        onClick={() => {
          setIsModalOpen(true);
        }}
      ></Button>
      <Card style={{ width: "60%", margin: "1vw" }}>
        <Input placeholder="Untitled form" size="large"></Input>
        <Input placeholder="Form description" style={{ border: "0" }}></Input>
      </Card>
      {/* The question stream is composed by pendingQuestions(database) and localQuestions */}
      {pendingQuestions.map((q) => {
        return <GeneralQuestion mode="design" questionMetadata={q} />;
      })}
      {localQuestions.map((q) => {
        // <input type="text" placeholder={q.label} />
        return <GeneralQuestion mode="design" questionMetadata={q} />;
      })}
      <Button
        onClick={() => {
          localQuestions.forEach((q) => {
            create({
              variables: {
                input: {
                  title: q.title,
                  label: q.label,
                  type: q.type,
                  createdBy: 1,
                  required: true,
                },
              },
              onCompleted: (resp, err) => {
                addQuestion({
                  variables: {
                    id: defaultGroupID,
                    input: {
                      addQuestionIDs: [resp.createQuestion.id],
                    },
                  },
                });
              },
            });
          });
        }}
      >
        Submit
      </Button>
    </Flex>
  );
}

const query = graphql`
  query FormSpecCreateEntryPointQuery($id: ID!) {
    node(id: $id) {
      ... on FormSpec {
        questionGroups {
          id
          question {
            label
            title
            type
            createdAt
            ...QuestionFragment
          }
        }
      }
    }
  }
`;

const mutation = graphql`
  mutation FormSpecCreateEntryPointMutation($input: CreateQuestionInput!) {
    createQuestion(input: $input) {
      id
      title
      label
    }
  }
`;

const updateQuestionGroup = graphql`
  mutation FormSpecCreateEntryPointUpdateQuestionGroupMutation(
    $id: ID!
    $input: UpdateQuestionGroupInput!
  ) {
    updateQuestionGroup(id: $id, input: $input) {
      id
    }
  }
`;
