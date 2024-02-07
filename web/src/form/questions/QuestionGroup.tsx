import graphql from "babel-plugin-relay/macro";
import { QuestionGroupFragment$key } from "./__generated__/QuestionGroupFragment.graphql";
import { useFragment } from "react-relay";
import { Flex } from "antd";
import GeneralQuestion from "./GeneralQuestion";

type Props = {
  fragmentKey: QuestionGroupFragment$key;
  setLocalQuestionExtraData: (idx: number, extraData: string) => void;
};

export function QuestionGroup({
  fragmentKey,
  setLocalQuestionExtraData,
}: Props) {
  const group = useFragment(fragment, fragmentKey);
  return (
    <Flex vertical>
      <p
        style={{
          color: "grey",
          fontSize: "16px",
          fontWeight: "bold",
          marginBottom: "5px",
        }}
      >
        Group name: {group.name}
      </p>
      <hr
        style={{
          borderTop: "1px solid lightgrey",
          margin: 0,
        }}
      />

      {group.question?.map((q, idx) => (
        <GeneralQuestion
          mode="response"
          fragmentKey={q}
          setLocalQuestionExtraData={setLocalQuestionExtraData}
          questionIndex={idx}
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
      ...QuestionFragment
    }
  }
`;
