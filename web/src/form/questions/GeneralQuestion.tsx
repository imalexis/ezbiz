import { Flex } from "antd";
import { DesignModeShortTextQuestion } from "./design/DesignModeShortTextQuestion";
import { QuestionMetadata } from "../FormSpecCreateEntryPoint";
import { Question } from "./Question";
import { QuestionFragment$key } from "./__generated__/QuestionFragment.graphql";

type Props = {
  fragmentKey?: QuestionFragment$key; // for response mode
  questionMetadata?: QuestionMetadata; // for design mode
  mode: "design" | "response";
};

// fragmentKey renders GeneralQuestion component
export default function GeneralQuestion({
  fragmentKey,
  mode,
  questionMetadata,
}: Props) {
  if (mode === "design") {
    return <DesignModeQuestion questionMetadata={questionMetadata!} />;
  }

  return <Question fragmentKey={fragmentKey!} />;
}

function DesignModeQuestion({
  questionMetadata,
}: {
  questionMetadata: QuestionMetadata;
}) {
  return (
    <Flex>
      {questionMetadata.type === "short_text" && (
        <DesignModeShortTextQuestion questionMetadata={questionMetadata} />
      )}
    </Flex>
  );
}
