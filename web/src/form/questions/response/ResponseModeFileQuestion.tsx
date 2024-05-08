import { Card } from "antd";
import { useFragment, useLazyLoadQuery, useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import FormInstanceContext from "../../FormInstanceContext";
import { ResponseModeFileQuestionFragment$key } from "./__generated__/ResponseModeFileQuestionFragment.graphql";
import { ResponseModeFileQuestionUploadFileMutation } from "./__generated__/ResponseModeFileQuestionUploadFileMutation.graphql";
import { ResponseModeFileQuestionUpdateMutation } from "./__generated__/ResponseModeFileQuestionUpdateMutation.graphql";
import { ResponseModeFileQuestionResponseQuery } from "./__generated__/ResponseModeFileQuestionResponseQuery.graphql";
import { Parser } from "../../../lib/expr/parser";
import { Evaluator } from "../../../lib/expr/evaluator";

type Props = {
  fragmentKey: ResponseModeFileQuestionFragment$key;
  localSharedValues?: Map<string, string>;
  setLocalSharedValues?: React.Dispatch<
    React.SetStateAction<Map<string, string>>
  >;
};

export function DynamicResponseModeFileQuestion({
  fragmentKey,
  localSharedValues,
  setLocalSharedValues,
}: Props) {
  const question = useFragment(fragment, fragmentKey);
  let isVisible = true;
  if (question.rule.length === 0) {
    return (
      <ResponseModeFileQuestion
        fragmentKey={fragmentKey}
        localSharedValues={localSharedValues}
        setLocalSharedValues={setLocalSharedValues}
      />
    );
  }
  const parser = new Parser(question.rule);
  const program = parser.parse();
  const evaluator = new Evaluator();
  const deps = JSON.parse(question.dependencies) as Array<string>;
  deps.forEach((dep) => {
    evaluator.env.set(dep, parseInt(localSharedValues?.get(dep) ?? "0"));
  });
  const output = evaluator.eval(program);
  if (output.get("visible") != null) {
    isVisible = output.get("visible") as boolean;
  }
  if (isVisible) {
    return (
      <ResponseModeFileQuestion
        fragmentKey={fragmentKey}
        localSharedValues={localSharedValues}
        setLocalSharedValues={setLocalSharedValues}
      />
    );
  }
  return null;
}

export function ResponseModeFileQuestion({ fragmentKey }: Props) {
  const { status } = useContext(FormInstanceContext);
  const { instanceID } = useParams();
  const question = useFragment(fragment, fragmentKey);
  const [uploadFile, uploadFileInFlight] =
    useMutation<ResponseModeFileQuestionUploadFileMutation>(uploadFileMutation);
  const [file, setFile] = useState<File | null>(null);
  const [uploadFileStatus, setUploadFileStatus] = useState<
    "success" | "failed" | null
  >(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      setFile(e.target.files[0]);
    }
  };
  const [updateQuestionResponse] =
    useMutation<ResponseModeFileQuestionUpdateMutation>(
      updateQuestionResponseMutation
    );
  const data = useLazyLoadQuery<ResponseModeFileQuestionResponseQuery>(query, {
    questionID: question.id,
    formInstanceID: instanceID ?? "",
  });
  const responseID = (data.questionResponses.edges ?? [])[0]?.node?.id ?? "";
  const filename = (data.questionResponses.edges ?? [])[0]?.node?.value ?? "";
  return (
    <Card
      title={question.title}
      bordered={false}
      style={{ margin: "8px", width: "100%" }}
    >
      {status === "pending" && (
        <>
          <form id="myform" encType="multipart/form-data">
            <input type="file" id="file" onChange={handleFileChange} multiple />
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
                        }
                        updateQuestionResponse({
                          variables: {
                            input: {
                              questionID: question.id,
                              value: file.name,
                            },
                            id: responseID,
                          },
                        });
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
          {uploadFileStatus === "success" && <div>upload success</div>}
          {uploadFileStatus === "failed" && <div>upload failed</div>}
        </>
      )}
      {status === "submiited" && <div>{filename}</div>}
    </Card>
  );
}

const fragment = graphql`
  fragment ResponseModeFileQuestionFragment on Question {
    id
    label
    title
    type
    required
    extraData
    rule
    dependencies
    __typename
  }
`;

const uploadFileMutation = graphql`
  mutation ResponseModeFileQuestionUploadFileMutation($file: Upload!) {
    singleUpload(file: $file) {
      name
    }
  }
`;

const updateQuestionResponseMutation = graphql`
  mutation ResponseModeFileQuestionUpdateMutation(
    $input: UpdateQuestionResponseInput!
    $id: ID!
  ) {
    updateQuestionResponse(input: $input, id: $id) {
      id
    }
  }
`;

const query = graphql`
  query ResponseModeFileQuestionResponseQuery(
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
