import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { Flex } from "antd";
import { DynamicResponseModeMultiChoiceQuestion } from "./ResponseModeMultiChoiceQuestion";
import {
  DynamicRespondModeParagraphQuestion,
  RespondModeParagraphQuestion,
} from "./ResponseModeParagraphQuestion";
import {
  DynamicResponseModeFileQuestion,
  ResponseModeFileQuestion,
} from "./ResponseModeFileQuestion";
import { ResponseModeDropdownQuestion } from "./ResponseModeDropdownQuestion";
import { DynamicRespondModeShortTextQuestion } from "./ResponseModeShortTextQuestion";
import { ResponseModeCheckboxQuestion } from "./ResponseModeCheckboxQuestion";
import ResponseModeDateQuestion, {
  DynamicResponseModeDateQuestion,
} from "./ResponseModeDateQuestion";
import ResponseModeLinearScaleQuestion, {
  DynamicResponseModeLinearScaleQuestion,
} from "./ResponseModeLinearScaleQuestion";
import { ResponseModeQuestionFragment$key } from "./__generated__/ResponseModeQuestionFragment.graphql";

type Props = {
  fragmentKey: ResponseModeQuestionFragment$key;
  localSharedValues?: Map<string, string>;
  setLocalSharedValues?: React.Dispatch<
    React.SetStateAction<Map<string, string>>
  >;
};

// The Question component is specifically designed for use in questions with responses
export function Question({
  fragmentKey,
  localSharedValues,
  setLocalSharedValues,
}: Props) {
  const question = useFragment(fragment, fragmentKey);
  return (
    <Flex>
      {question.type === "multi_choice" && (
        <DynamicResponseModeMultiChoiceQuestion
          fragmentKey={question}
          localSharedValues={localSharedValues}
          setLocalSharedValues={setLocalSharedValues}
        />
      )}

      {question.type === "checkboxes" && (
        <DynamicResponseModeMultiChoiceQuestion
          fragmentKey={question}
          localSharedValues={localSharedValues}
          setLocalSharedValues={setLocalSharedValues}
        />
      )}

      {question.type === "short_text" && (
        <DynamicRespondModeShortTextQuestion
          fragmentKey={question}
          localSharedValues={localSharedValues}
          setLocalSharedValues={setLocalSharedValues}
        />
      )}

      {question.type === "paragraph" && (
        <DynamicRespondModeParagraphQuestion
          fragmentKey={question}
          localSharedValues={localSharedValues}
          setLocalSharedValues={setLocalSharedValues}
        />
      )}

      {question.type === "file" && (
        <DynamicResponseModeFileQuestion
          fragmentKey={question}
          localSharedValues={localSharedValues}
          setLocalSharedValues={setLocalSharedValues}
        />
      )}

      {question.type === "drop_down" && (
        <ResponseModeDropdownQuestion fragmentKey={question} />
      )}
      {question.type === "date" && (
        <DynamicResponseModeDateQuestion
          fragmentKey={question}
          localSharedValues={localSharedValues}
          setLocalSharedValues={setLocalSharedValues}
        />
      )}
      {question.type === "linear_scale" && (
        <DynamicResponseModeLinearScaleQuestion
          fragmentKey={question}
          localSharedValues={localSharedValues}
          setLocalSharedValues={setLocalSharedValues}
        />
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
