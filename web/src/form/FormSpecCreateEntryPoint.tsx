import {
  Button,
  Card,
  Dropdown,
  Flex,
  Image,
  Input,
  MenuProps,
  Modal,
  Typography,
} from "antd";

import { DownOutlined, PlusCircleOutlined } from "@ant-design/icons";

import "./FormSpecCreateEntryPointStyle.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery, useMutation } from "react-relay";
import GeneralQuestion from "./questions/GeneralQuestion";
import { QuestionType } from "./questions/design/__generated__/DesignModeShortTextQuestionFragment.graphql";
import { FormSpecCreateEntryPointMutation } from "./__generated__/FormSpecCreateEntryPointMutation.graphql";
import { FormSpecCreateEntryPointUpdateQuestionGroupMutation } from "./__generated__/FormSpecCreateEntryPointUpdateQuestionGroupMutation.graphql";
import { FormSpecCreateEntryPointQuery } from "./__generated__/FormSpecCreateEntryPointQuery.graphql";
import { FormSpecCreateEntryPointUpdateFormSpecMutation } from "./__generated__/FormSpecCreateEntryPointUpdateFormSpecMutation.graphql";
import { FormSpecCreateEntryPointUpdateQuestionMutation } from "./__generated__/FormSpecCreateEntryPointUpdateQuestionMutation.graphql";
import { GeneralQuestionMetadata } from "./GeneralQuestionMetadata";
import { FormSpecCreateEntryPointUploadFileMutation } from "./__generated__/FormSpecCreateEntryPointUploadFileMutation.graphql";

const { Text } = Typography;

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
      rule: q.rule,
    };
  });
  const [localQuestions, setLocalQuestions] =
    useState<Array<GeneralQuestionMetadata>>(persistentQuestions);
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
    // { label: "time", key: "time" },
    { label: "paragraph", key: "paragraph" },
    { label: "linear_scale", key: "linear_scale" },
    // { label: "drop_down", key: "drop_down" },
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
        rule: "",
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
      onCompleted: () => {
        if (localQuestions.length === 0) {
          navigate("/admin/forms");
        }
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

  const modal = (
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
  );

  const [file, setFile] = useState<File | null>(null);
  const [uploadFileStatus, setUploadFileStatus] = useState<
    "success" | "failed" | null
  >(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      setFile(e.target.files[0]);
    }
  };
  const [uploadFile, uploadFileInFlight] =
    useMutation<FormSpecCreateEntryPointUploadFileMutation>(uploadFileMutation);

  return (
    <Flex>
      <Flex flex={1}>
        <div></div>
      </Flex>
      <Flex
        vertical
        align="center"
        flex={8}
        style={{ width: "100%" }}
        justify="center"
      >
        {modal}
        <Header
          formTitle={formTitle ?? ""}
          formDescription={formDescription ?? ""}
          setFormDescription={setFormDescription}
          setFormTitle={setFormTitle}
        />
        <Flex style={{ width: "80%" }}>
          <Image src={data.node?.cover ?? ""} alt="Image not found" />
        </Flex>

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

      <Flex flex={1} vertical>
        <Button
          icon={<PlusCircleOutlined />}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
        <form id="myform" encType="multipart/form-data">
          {/* <input type="file" id="file" onChange={handleFileChange} multiple /> */}
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="file-input"
          />
          {file != null && (
            <div>
              <p>filename: {file.name}</p>
              <p>filesize: {file.size}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (file == null) {
                    return;
                  }
                  const form = document.getElementById(
                    "myform"
                  ) as HTMLFormElement;
                  if (form == null) {
                    return;
                  }
                  const formData = new FormData(form);
                  formData.append("file", file);
                  uploadFile({
                    variables: {
                      file: formData,
                    },
                    uploadables: {
                      file,
                    },
                    onCompleted: (resp, err) => {
                      if (err != null) {
                        setUploadFileStatus("failed");
                      } else {
                        setUploadFileStatus("success");
                        updateFormSpec({
                          variables: {
                            id: formID ?? "",
                            input: {
                              cover:
                                "http://localhost:8100/public/image/" +
                                resp.singleUpload.name,
                            },
                          },
                        });
                      }
                    },
                    onError: (err) => {
                      setUploadFileStatus("failed");
                    },
                  });
                }}
                disabled={uploadFileInFlight}
              >
                Upload
              </button>
            </div>
          )}
        </form>
      </Flex>
    </Flex>
  );
}

const query = graphql`
  query FormSpecCreateEntryPointQuery($id: ID!) {
    node(id: $id) {
      ... on FormSpec {
        name
        description
        cover
        questionGroups {
          id
          question {
            id
            label
            title
            type
            createdAt
            extraData
            rule
            ...ResponseModeQuestionFragment
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
    width: "80%",
    margin: "1vw",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e8e8e8",
    backgroundColor: "#fff",
  },
};

type HeaderProps = {
  formTitle: string;
  setFormTitle: (formTitle: string) => void;
  formDescription: string;
  setFormDescription: (formDescription: string) => void;
};

function Header({
  formTitle,
  formDescription,
  setFormDescription,
  setFormTitle,
}: HeaderProps) {
  return (
    <Card style={styles.card} tabIndex={1}>
      <Flex vertical gap={12}>
        <Flex>
          <Flex flex={2}>
            <Text>Form Title</Text>
          </Flex>
          <Flex flex={8}>
            <Input
              size="large"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
            />
          </Flex>
        </Flex>
        <Flex>
          <Flex flex={2}>
            <Text>Form Description</Text>
          </Flex>
          <Flex flex={8}>
            <Input
              value={formDescription}
              onChange={(e) => {
                setFormDescription(e.target.value);
              }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

const uploadFileMutation = graphql`
  mutation FormSpecCreateEntryPointUploadFileMutation($file: Upload!) {
    singleUpload(file: $file) {
      name
    }
  }
`;
