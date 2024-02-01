import { Flex } from "antd";
import { Question } from "./Question";
import { QuestionFragment$key } from "./__generated__/QuestionFragment.graphql";
import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { DesignModeShortTextQuestion } from "./questions/design/DesignModeShortTextQuestion";
import { GeneralQuestionFragment$key } from "./__generated__/GeneralQuestionFragment.graphql";

type Props = {
  fragmentKey?: QuestionFragment$key; // for response mode
  generalQuestionFragmentKey?: GeneralQuestionFragment$key; // for design mode
  mode: "design" | "response";
};
export default function GeneralQuestion({
  fragmentKey,
  mode,
  generalQuestionFragmentKey,
}: Props) {
  if (mode === "design") {
    return <DesignModeQuestion fragmentKey={generalQuestionFragmentKey!} />;
  }

  return <Question fragmentKey={fragmentKey!} />;
}

function DesignModeQuestion({
  fragmentKey,
}: {
  fragmentKey: GeneralQuestionFragment$key;
}) {
  const question = useFragment(fragment, fragmentKey);

  return (
    <Flex>
      {question.type === "short_text" && (
        <DesignModeShortTextQuestion fragmentKey={question} />
      )}
    </Flex>
  );
}

const fragment = graphql`
  fragment GeneralQuestionFragment on Question {
    type
    label
    ...MultiChoiceQuestionFragment
    ...ShortTextQuestionFragment
    ...ParagraphQuestionFragment
    ...FileQuestionFragment
    ...DropdownQuestionFragment

    ...DesignModeShortTextQuestionFragment
  }
`;
