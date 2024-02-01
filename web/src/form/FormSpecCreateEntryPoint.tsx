import { Button, Card, Flex, Input, Modal } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons";

import { useState } from "react";
import { useParams } from "react-router-dom";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery, useMutation } from "react-relay";
import { FormSpecCreateEntryPointQuery } from "./__generated__/FormSpecCreateEntryPointQuery.graphql";
import { QuestionType } from "./__generated__/FormSpecCardFragment.graphql";
import { FormSpecCreateEntryPointMutation } from "./__generated__/FormSpecCreateEntryPointMutation.graphql";
import { FormSpecCreateEntryPointUpdateQuestionGroupMutation } from "./__generated__/FormSpecCreateEntryPointUpdateQuestionGroupMutation.graphql";
import GeneralQuestion from "./GeneralQuestion";

type QuestionMetadata = {
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
          setPendingQuestions([
            ...pendingQuestions,
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
      {pendingQuestions.map((q) => {
        const fragmentKey = (data.node?.questionGroups ??
          [])[0].question?.filter((qq) => q.label === qq.label)[0];
        if (fragmentKey == null || fragmentKey == undefined) {
          return <div>wrong information</div>;
        }
        return (
          <GeneralQuestion
            mode="design"
            generalQuestionFragmentKey={fragmentKey}
          />
        );
      })}
      <Button
        onClick={() => {
          pendingQuestions
            .filter((q) => q.createdAt == null)
            .map((q) => {
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
            ...GeneralQuestionFragment
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
