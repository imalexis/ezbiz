import graphql from "babel-plugin-relay/macro";
import { QuestionFragment$key } from "./__generated__/QuestionFragment.graphql";
import { useFragment } from "react-relay";
import { Flex } from "antd";
import { MultiChoiceQuestion } from "./reponse/MultiChoiceQuestion";
import { ParagraphQuestion } from "./reponse/ParagraphQuestion";
import { FileQuestion } from "./reponse/FileQuestion";
import { DropdownQuestion } from "./reponse/DropdownQuestion";
import { ShortTextQuestion } from "./reponse/ShortTextQuestion";

type Props = {
  fragmentKey: QuestionFragment$key;
};

// The Question component is specifically designed for use in questions with responses
export function Question({ fragmentKey }: Props) {
  const question = useFragment(fragment, fragmentKey);

  return (
    <Flex>
      {question.type === "multi_choice" && (
        <MultiChoiceQuestion fragmentKey={question} />
      )}

      {/* {question.type === "checkboxes" && (
        <MultiChoiceQuestion fragmentKey={question} />
      )} */}

      {question.type === "short_text" && (
        <ShortTextQuestion fragmentKey={question} />
      )}

      {question.type === "paragraph" && (
        <ParagraphQuestion fragmentKey={question} />
      )}

      {question.type === "file" && <FileQuestion fragmentKey={question} />}

      {question.type === "drop_down" && (
        <DropdownQuestion fragmentKey={question} />
      )}
    </Flex>
  );
}

const fragment = graphql`
  fragment QuestionFragment on Question {
    type
    label
    ...MultiChoiceQuestionFragment
    ...ShortTextQuestionFragment
    ...ParagraphQuestionFragment
    ...FileQuestionFragment
    ...DropdownQuestionFragment
  }
`;
