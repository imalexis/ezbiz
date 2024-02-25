import { Question } from "./response/Question";
import { QuestionType } from "../__generated__/FormSpecCardFragment.graphql";
import { DesignModeQuestion } from "./design/DesignModeQuestion";
import { QuestionFragment$key } from "./response/__generated__/QuestionFragment.graphql";

type Props = {
  fragmentKey?: QuestionFragment$key; // for response mode
  questionMetadata?: QuestionMetadata; // for design mode
  mode: "design" | "response";
  setLocalQuestionExtraData: (idx: number, extraData: string) => void;
  questionIndex: number;
};

export type QuestionMetadata = {
  id: string;
  title: string;
  label: string;
  type: QuestionType;
  createdAt: string | null;
  extraData?: string | null;
};

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
