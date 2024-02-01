import { Card, Input } from "antd";
import { FileQuestionFragment$key } from "./__generated__/FileQuestionFragment.graphql";
import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";

type Props = { fragmentKey: FileQuestionFragment$key };

export function FileQuestion({ fragmentKey }: Props) {
  const question = useFragment(fragment, fragmentKey);

  return (
    <Card
      title={question.title}
      bordered={false}
      style={{ margin: "8px", width: "100%" }}
    >
      <Input type="file" placeholder={question.type}></Input>
    </Card>
  );
}

const fragment = graphql`
  fragment FileQuestionFragment on Question {
    id
    label
    title
    type
    required
    extraData
    __typename
  }
`;
