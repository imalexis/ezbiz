import graphql from "babel-plugin-relay/macro";
import { QuestionFragment$key } from "./__generated__/QuestionFragment.graphql";
import { useFragment } from "react-relay";
import { Flex } from "antd";
import { MultiChoiceQuestion } from "./MultiChoiceQuestion";
import { ParagraphQuestion } from "./ParagraphQuestion";
import { FileQuestion } from "./FileQuestion";
import { DropdownQuestion } from "./DropdownQuestion";
import { ShortTextQuestion } from "./ShortTextQuestion";
import { CheckboxQuestion } from "./CheckboxQuestion";

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

      {question.type === "checkboxes" && (
        <CheckboxQuestion fragmentKey={question} />
      )}

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
    ...CheckboxQuestionFragment
    ...ShortTextQuestionFragment
    ...ParagraphQuestionFragment
    ...FileQuestionFragment
    ...DropdownQuestionFragment
  }
`;