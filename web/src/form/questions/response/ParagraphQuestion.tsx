import { Card, Input } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { ParagraphQuestionFragment$key } from "./__generated__/ParagraphQuestionFragment.graphql";

type Props = {
  fragmentKey: ParagraphQuestionFragment$key;
};
export function ParagraphQuestion({ fragmentKey }: Props) {
  const question = useFragment(fragment, fragmentKey);
  return (
    <Card
      title={question.title}
      bordered={false}
      style={{ margin: "8px", width: "100%" }}
    >
      <Input type="text" placeholder={question.type} />
    </Card>
  );
}

const fragment = graphql`
  fragment ParagraphQuestionFragment on Question {
    id
    label
    title
    type
    required
    extraData
    __typename
  }
`;
