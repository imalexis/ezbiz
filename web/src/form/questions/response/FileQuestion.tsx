import { Button, Card, Input, Upload, UploadProps, message } from "antd";
import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { FileQuestionFragment$key } from "./__generated__/FileQuestionFragment.graphql";
import { UploadOutlined } from "@ant-design/icons";

type Props = { fragmentKey: FileQuestionFragment$key };

export function FileQuestion({ fragmentKey }: Props) {
  const question = useFragment(fragment, fragmentKey);
  const props: UploadProps = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Card
      title={question.title}
      bordered={false}
      style={{ margin: "8px", width: "100%" }}
    >
      <Upload>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
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
