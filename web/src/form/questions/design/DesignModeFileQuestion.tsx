import { UploadOutlined } from "@ant-design/icons";
import { Button, Flex, Upload } from "antd";
import { QuestionMetadata } from "../GeneralQuestion";

type Props = {
  questionMetadata: QuestionMetadata;
  setLocalQuestionExtraData: (idx: number, extraData: string) => void;
  questionIndex: number;
};
export default function DesignModeFileQuestion({
  questionMetadata,
  setLocalQuestionExtraData,
  questionIndex,
}: Props) {
  return (
    <Flex>
      <Upload>
        <Button disabled={true} icon={<UploadOutlined />}>
          Click to Upload
        </Button>
      </Upload>
    </Flex>
  );
}
