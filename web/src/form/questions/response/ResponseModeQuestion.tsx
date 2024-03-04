import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { Flex } from "antd";
import { ResponseModeMultiChoiceQuestion } from "./ResponseModeMultiChoiceQuestion";
import { RespondModeParagraphQuestion } from "./ResponseModeParagraphQuestion";
import { ResponseModeFileQuestion } from "./ResponseModeFileQuestion";
import { ResponseModeDropdownQuestion } from "./ResponseModeDropdownQuestion";
import { RespondModeShortTextQuestion } from "./ResponseModeShortTextQuestion";
import { ResponseModeCheckboxQuestion } from "./ResponseModeCheckboxQuestion";
import ResponseModeDateQuestion from "./ResponseModeDateQuestion";
import ResponseModeLinearScaleQuestion from "./ResponseModeLinearScaleQuestion";
import { ResponseModeQuestionFragment$key } from "./__generated__/ResponseModeQuestionFragment.graphql";

type Props = {
  fragmentKey: ResponseModeQuestionFragment$key;
};

// The Question component is specifically designed for use in questions with responses
export function Question({ fragmentKey }: Props) {
  const question = useFragment(fragment, fragmentKey);

  return (
    <Flex>
      {question.type === "multi_choice" && (
        <ResponseModeMultiChoiceQuestion fragmentKey={question} />
      )}

      {question.type === "checkboxes" && (
        <ResponseModeCheckboxQuestion fragmentKey={question} />
      )}

      {question.type === "short_text" && (
        <RespondModeShortTextQuestion fragmentKey={question} />
      )}

      {question.type === "paragraph" && (
        <RespondModeParagraphQuestion fragmentKey={question} />
      )}

      {question.type === "file" && (
        <ResponseModeFileQuestion fragmentKey={question} />
      )}

      {question.type === "drop_down" && (
        <ResponseModeDropdownQuestion fragmentKey={question} />
      )}
      {question.type === "date" && (
        <ResponseModeDateQuestion fragmentKey={question} />
      )}
      {question.type === "linear_scale" && (
        <ResponseModeLinearScaleQuestion fragmentKey={question} />
      )}
    </Flex>
  );
}

const fragment = graphql`
  fragment ResponseModeQuestionFragment on Question {
    type
    label
    ...ResponseModeMultiChoiceQuestionFragment
    ...ResponseModeCheckboxQuestionFragment
    ...ResponseModeShortTextQuestionFragment
    ...ResponseModeParagraphQuestionFragment
    ...ResponseModeFileQuestionFragment
    ...ResponseModeDropdownQuestionFragment
    ...ResponseModeDateQuestionFragment
    ...ResponseModeLinearScaleQuestionFragment
  }
`;
