import graphql from "babel-plugin-relay/macro";
import { QuestionGroupFragment$key } from "./__generated__/QuestionGroupFragment.graphql";
import { useFragment } from "react-relay";
import { Divider, Flex } from "antd";
import GeneralQuestion from "./GeneralQuestion";
import Title from "antd/es/typography/Title";

type Props = {
  fragmentKey: QuestionGroupFragment$key;
  setLocalQuestionExtraData: (idx: number, extraData: string) => void;
  localSharedValues?: Map<string, string>;
  setLocalSharedValues?: React.Dispatch<
    React.SetStateAction<Map<string, string>>
  >;
};

export function QuestionGroup({
  fragmentKey,
  setLocalQuestionExtraData,
  localSharedValues,
  setLocalSharedValues,
}: Props) {
  const group = useFragment(fragment, fragmentKey);
  return (
    <Flex vertical>
      <Title>Group name: {group.name}</Title>
      <Divider />
      {group.question?.map((question, index) => (
        <GeneralQuestion
          key={index}
          mode="response"
          fragmentKey={question}
          setLocalQuestionExtraData={setLocalQuestionExtraData}
          questionIndex={index}
          localSharedValues={localSharedValues}
          setLocalSharedValues={setLocalSharedValues}
        />
      ))}
    </Flex>
  );
}

const fragment = graphql`
  fragment QuestionGroupFragment on QuestionGroup {
    id
    name
    question {
      ...ResponseModeQuestionFragment
    }
  }
`;
