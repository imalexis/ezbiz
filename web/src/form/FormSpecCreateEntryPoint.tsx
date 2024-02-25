import { Button, Card, Dropdown, Flex, Input, MenuProps, Modal } from "antd";

import { DownOutlined, PlusCircleOutlined } from "@ant-design/icons";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery, useMutation } from "react-relay";
import GeneralQuestion, { QuestionMetadata } from "./questions/GeneralQuestion";
import { QuestionType } from "./questions/design/__generated__/DesignModeShortTextQuestionFragment.graphql";
import { FormSpecCreateEntryPointMutation } from "./__generated__/FormSpecCreateEntryPointMutation.graphql";
import { FormSpecCreateEntryPointUpdateQuestionGroupMutation } from "./__generated__/FormSpecCreateEntryPointUpdateQuestionGroupMutation.graphql";
import { FormSpecCreateEntryPointQuery } from "./__generated__/FormSpecCreateEntryPointQuery.graphql";
import { FormSpecCreateEntryPointUpdateFormSpecMutation } from "./__generated__/FormSpecCreateEntryPointUpdateFormSpecMutation.graphql";
import { FormSpecCreateEntryPointUpdateQuestionMutation } from "./__generated__/FormSpecCreateEntryPointUpdateQuestionMutation.graphql";

export function FormSpecCreateEntryPoint() {
  const navigate = useNavigate();
  const [createQuestion] = useMutation<FormSpecCreateEntryPointMutation>(
    createQuestionMutation
  );
  const [updateQuestion] =
    useMutation<FormSpecCreateEntryPointUpdateQuestionMutation>(
      updateQuestionMutaiton
    );
  const [addQuestion] =
    useMutation<FormSpecCreateEntryPointUpdateQuestionGroupMutation>(
      updateQuestionGroup
    );
  const [updateFormSpec] =
    useMutation<FormSpecCreateEntryPointUpdateFormSpecMutation>(
      updateFormSpecMutation
    );
  const { formID } = useParams();
  const data = useLazyLoadQuery<FormSpecCreateEntryPointQuery>(query, {
    id: formID ?? "",
  });
  const defaultGroupID = (data.node?.questionGroups ?? [])[0].id;
  const persistentQuestions = (
    (data.node?.questionGroups ?? [])[0].question ?? []
  ).map((q) => {
    return {
      id: q.id,
      title: q.title,
      label: q.label,
      type: q.type,
      createdAt: q.createdAt,
      extraData: q.extraData,
    };
  });
  const [localQuestions, setLocalQuestions] =
    useState<Array<QuestionMetadata>>(persistentQuestions);
  const [newQuestions, setNewQuestions] = useState<Array<string>>([]);
  const setLocalQuestionExtraData = (idx: number, extraData: string) => {
    if (idx >= 0 && idx < localQuestions.length) {
      const newArray = [...localQuestions];
      newArray[idx].extraData = extraData;
      setLocalQuestions(newArray);
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("");
  const [questionType, setQuestionType] = useState("short_text");
  const items: MenuProps["items"] = [
    { label: "short_text", key: "short_text" },
    { label: "multi_choice", key: "multi_choice" },
    { label: "checkboxes", key: "checkboxes" },
    { label: "file", key: "file" },
    { label: "date", key: "date" },
    { label: "time", key: "time" },
    { label: "paragraph", key: "paragraph" },
  ];
  const [formTitle, setFormTitle] = useState(data.node?.name);
  const [formDescription, setFormDescription] = useState(
    data.node?.description
  );
  const onCreateNewQuestion = () => {
    setLocalQuestions([
      ...localQuestions,
      {
        title,
        label,
        type: questionType as QuestionType,
        createdAt: null,
        extraData: "",
        id: "",
      },
    ]);
    setNewQuestions([...newQuestions, label]);
    setIsModalOpen(false);
  };
  const onSubmit = () => {
    updateFormSpec({
      variables: {
        id: formID ?? "",
        input: { name: formTitle, description: formDescription },
      },
    });
    localQuestions
      .filter((q) => !newQuestions.includes(q.label))
      .forEach((q) => {
        updateQuestion({
          variables: {
            id: q.id,
            input: {
              title: q.title,
              label: q.label,
              type: q.type,
              createdBy: 1,
              required: true,
              extraData: q.extraData,
            },
          },
        });
      });
    localQuestions
      .filter((q) => newQuestions.includes(q.label))
      .forEach((q) => {
        createQuestion({
          variables: {
            input: {
              title: q.title,
              label: q.label,
              type: q.type,
              createdBy: 1,
              required: true,
              extraData: q.extraData,
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
            localQuestions.length = 0;
            navigate("/admin/forms");
          },
        });
      });
  };
  return (
    <Flex vertical align="center">
      <Modal
        title="create a new question"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        onOk={onCreateNewQuestion}
      >
        <Flex vertical>
          <Flex justify="space-between">
            label:
            <input
              type="text"
              value={label}
              onChange={(e) => {
                setLabel(e.target.value);
              }}
            />
          </Flex>
          <Flex justify="space-between">
            title:
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Flex>
          <Flex justify="space-around">
            question type:
            <Dropdown.Button
              icon={<DownOutlined />}
              menu={{
                items,
                onClick: (e) => {
                  setQuestionType(e.key);
                },
              }}
            >
              {questionType}
            </Dropdown.Button>
          </Flex>
        </Flex>
      </Modal>
      <Flex align="center" gap={20}>
        <Flex>formID: {formID} </Flex>
        <Flex>defaultGroupID: {defaultGroupID}</Flex>
        <Button
          icon={<PlusCircleOutlined />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
      </Flex>
      <Card style={{ width: "60%", margin: "1vw" }}>
        <Input
          size="large"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
        ></Input>
        <Input
          style={{ border: "0" }}
          value={formDescription}
          onChange={(e) => {
            setFormDescription(e.target.value);
          }}
        ></Input>
      </Card>
      {localQuestions.map((q, idx) => {
        return (
          <Card key={idx} title={q.title} style={styles.card}>
            <GeneralQuestion
              mode="design"
              questionMetadata={q}
              setLocalQuestionExtraData={setLocalQuestionExtraData}
              questionIndex={idx}
            />
          </Card>
        );
      })}
      <Button onClick={onSubmit}>Submit</Button>
    </Flex>
  );
}

const query = graphql`
  query FormSpecCreateEntryPointQuery($id: ID!) {
    node(id: $id) {
      ... on FormSpec {
        name
        description
        questionGroups {
          id
          question {
            id
            label
            title
            type
            createdAt
            extraData
            ...QuestionFragment
          }
        }
      }
    }
  }
`;

const createQuestionMutation = graphql`
  mutation FormSpecCreateEntryPointMutation($input: CreateQuestionInput!) {
    createQuestion(input: $input) {
      id
      title
      label
    }
  }
`;

const updateQuestionMutaiton = graphql`
  mutation FormSpecCreateEntryPointUpdateQuestionMutation(
    $id: ID!
    $input: UpdateQuestionInput!
  ) {
    updateQuestion(id: $id, input: $input) {
      id
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

const updateFormSpecMutation = graphql`
  mutation FormSpecCreateEntryPointUpdateFormSpecMutation(
    $id: ID!
    $input: UpdateFormSpecInput!
  ) {
    updateFormSpec(id: $id, input: $input) {
      id
    }
  }
`;

const styles = {
  card: {
    width: "60%",
    margin: "1vw",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e8e8e8",
    backgroundColor: "#fff",
  },
};
