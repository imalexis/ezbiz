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
import { Parser } from "../../../lib/expr/parser";
import { Evaluator } from "../../../lib/expr/evaluator";

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
  const parser = new Parser("let visible = salary > 2000;");
  const program = parser.parse();
  const evaluator = new Evaluator();
  evaluator.env.set(
    "salary",
    parseInt(localSharedValues?.get("salary") ?? "0")
  );
  const output = evaluator.eval(program);
  const isVisible = output.get("visible");
  return (
    <Flex>
      {question.type === "multi_choice" && (
        <ResponseModeMultiChoiceQuestion fragmentKey={question} />
      )}

      {question.type === "checkboxes" && (
        <ResponseModeCheckboxQuestion fragmentKey={question} />
      )}

      {question.type === "short_text" && isVisible !== 0 && (
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
        <ResponseModeLinearScaleQuestion
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
