import { Question } from "./response/ResponseModeQuestion";
import { DesignModeQuestion } from "./design/DesignModeQuestion";
import { GeneralQuestionMetadata } from "../GeneralQuestionMetadata";
import { ResponseModeQuestionFragment$key } from "./response/__generated__/ResponseModeQuestionFragment.graphql";

type Props = {
  fragmentKey?: ResponseModeQuestionFragment$key;
  questionMetadata?: GeneralQuestionMetadata;
  mode: "design" | "response";
  setLocalQuestionExtraData: (idx: number, extraData: string) => void;
  questionIndex: number;
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
