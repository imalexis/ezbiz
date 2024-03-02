import { Flex } from "antd";
import { QuestionMetadata } from "../GeneralQuestion";
import { DesignModeShortTextQuestion } from "./DesignModeShortTextQuestion";
import DesignModeParagraphQuestion from "./DesignModeParagraphQuestion";
import DesignModeMultiChoiceQuestion from "./DesignModeMultiChoiceQuestion";
import DesignModeCheckboxQuestion from "./DesignModeCheckboxQuestion";
import DesignModeFileQuestion from "./DesignModeFileQuestion";
import DesignModeDateQuestion from "./DesignModeDateQuestion";

export function DesignModeQuestion({
  questionMetadata,
  setLocalQuestionExtraData,
  questionIndex,
}: {
  questionMetadata: QuestionMetadata;
  setLocalQuestionExtraData: (idx: number, extraData: string) => void;
  questionIndex: number;
}) {
  return (
    <Flex>
      {questionMetadata.type === "short_text" && (
        <DesignModeShortTextQuestion questionMetadata={questionMetadata} />
      )}
      {questionMetadata.type === "paragraph" && (
        <DesignModeParagraphQuestion questionMetadata={questionMetadata} />
      )}
      {questionMetadata.type === "multi_choice" && (
        <DesignModeMultiChoiceQuestion
          questionMetadata={questionMetadata}
          setLocalQuestionExtraData={setLocalQuestionExtraData}
          questionIndex={questionIndex}
        />
      )}
      {questionMetadata.type === "checkboxes" && (
        <DesignModeCheckboxQuestion
          questionMetadata={questionMetadata}
          setLocalQuestionExtraData={setLocalQuestionExtraData}
          questionIndex={questionIndex}
        />
      )}
      {questionMetadata.type === "file" && (
        <DesignModeFileQuestion
          questionMetadata={questionMetadata}
          setLocalQuestionExtraData={setLocalQuestionExtraData}
          questionIndex={questionIndex}
        />
      )}
      {questionMetadata.type === "date" && <DesignModeDateQuestion />}
    </Flex>
  );
}
