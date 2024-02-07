import { Flex } from "antd";
import { DesignModeShortTextQuestion } from "./design/DesignModeShortTextQuestion";
import { QuestionMetadata } from "../FormSpecCreateEntryPoint";
import { Question } from "./Question";
import { QuestionFragment$key } from "./__generated__/QuestionFragment.graphql";
import DesignModeParagraphQuestion from "./design/DesignModeParagraphQuestion";
import DesignModeMultiChoiceQuestion from "./design/DesignModeMultiChoiceQuestion";

type Props = {
  fragmentKey?: QuestionFragment$key; // for response mode
  questionMetadata?: QuestionMetadata; // for design mode
  mode: "design" | "response";
  setLocalQuestionExtraData: (idx: number, extraData: string) => void;
  questionIndex: number;
};

// fragmentKey renders GeneralQuestion component
export default function GeneralQuestion({
  fragmentKey,
  questionMetadata,
  mode,
  setLocalQuestionExtraData,
  questionIndex,
}: Props) {
  if (mode === "design") {
    return (
      <DesignModeQuestion
        questionMetadata={questionMetadata!}
        setLocalQuestionExtraData={setLocalQuestionExtraData}
        questionIndex={questionIndex}
      />
    );
  }

  return <Question fragmentKey={fragmentKey!} />;
}

function DesignModeQuestion({
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
    </Flex>
  );
}
