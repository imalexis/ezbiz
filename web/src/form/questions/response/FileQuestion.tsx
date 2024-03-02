import { Card } from "antd";
import { useFragment, useLazyLoadQuery, useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { FileQuestionFragment$key } from "./__generated__/FileQuestionFragment.graphql";
import { useContext, useState } from "react";
import { FileQuestionUploadFileMutation } from "./__generated__/FileQuestionUploadFileMutation.graphql";
import { FileQuestionUpdateMutation } from "./__generated__/FileQuestionUpdateMutation.graphql";
import { useParams } from "react-router-dom";
import { FileQuestionResponseQuery } from "./__generated__/FileQuestionResponseQuery.graphql";
import FormInstanceContext from "../../FormInstanceContext";

type Props = { fragmentKey: FileQuestionFragment$key };

export function FileQuestion({ fragmentKey }: Props) {
  const { status } = useContext(FormInstanceContext);
  const { instanceID } = useParams();
  const question = useFragment(fragment, fragmentKey);
  const [uploadFile, uploadFileInFlight] =
    useMutation<FileQuestionUploadFileMutation>(uploadFileMutation);
  const [file, setFile] = useState<File | null>(null);
  const [uploadFileStatus, setUploadFileStatus] = useState<
    "success" | "failed" | null
  >(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      setFile(e.target.files[0]);
    }
  };
  const [updateQuestionResponse] = useMutation<FileQuestionUpdateMutation>(
    updateQuestionResponseMutation
  );
  const data = useLazyLoadQuery<FileQuestionResponseQuery>(query, {
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
                    console.log("formdata = ", formData);
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
  fragment FileQuestionFragment on Question {
    id
    label
    title
    type
    required
    extraData
    __typename
  }
`;

const uploadFileMutation = graphql`
  mutation FileQuestionUploadFileMutation($file: Upload!) {
    singleUpload(file: $file) {
      name
    }
  }
`;

const updateQuestionResponseMutation = graphql`
  mutation FileQuestionUpdateMutation(
    $input: UpdateQuestionResponseInput!
    $id: ID!
  ) {
    updateQuestionResponse(input: $input, id: $id) {
      id
    }
  }
`;

const query = graphql`
  query FileQuestionResponseQuery($questionID: ID!, $formInstanceID: ID!) {
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
