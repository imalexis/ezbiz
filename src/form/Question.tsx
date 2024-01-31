import graphql from "babel-plugin-relay/macro";
import { QuestionFragment$key } from "./__generated__/QuestionFragment.graphql";
import { useFragment, useMutation } from "react-relay";
import { Flex } from "antd";
import { QuestionMutation } from "./__generated__/QuestionMutation.graphql";
import { MultiChoiceQuestion } from "./MultiChoiceQuestion";
import { ShortTextQuestion } from "./ShortTextQuestion";
import { ParagraphQuestion } from "./ParagraphQuestion";
import { FileQuestion } from "./FileQuestion";
import { DropdownQuestion } from "./DropdownQuestion";

// 要提取一个单独的组件步骤
// 1. 定义你的子组件 QuestionList -> Question (包含了多个Question)
// 2. 定义组件的数据依赖 Fragment, 对应的类型是Fragment$key
// 3. 子组件内部需要使用useFragment来读取数据
// 4. 在父组件的Fragment/Query中一定要spread Fragment (... Fragment)
// 5. 传递正确参数进来即可

type Props = {
  // 什么是Fragment$key类型
  // 其实就是一个包含了... QuestionFrament的一个数据
  fragmentKey: QuestionFragment$key;
};

export function Question({ fragmentKey }: Props) {
  const question = useFragment(fragment, fragmentKey);

  return (
    <Flex>
      {question.type === "checkboxes" && (
        <MultiChoiceQuestion fragmentKey={question} />
      )}
      {question.type === "short_text" && (
        <ShortTextQuestion fragmentKey={question} />
      )}

      {question.type === "paragraph" && (
        <ParagraphQuestion fragmentKey={question} />
      )}

      {/* {question.type === "date" && <ParagraphQuestion fragmentKey={question} />} */}

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

const mutation = graphql`
  mutation QuestionMutation($input: CreateQuestionResponseInput!) {
    createQuestionResponse(input: $input) {
      id
    }
  }
`;
