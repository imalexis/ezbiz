import { Card, Input } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { useState } from "react";
import { DesignModeShortTextQuestionFragment$key } from "./__generated__/DesignModeShortTextQuestionFragment.graphql";

type Props = {
  fragmentKey: DesignModeShortTextQuestionFragment$key;
};

export function DesignModeShortTextQuestion({ fragmentKey }: Props) {
  const question = useFragment(fragment, fragmentKey);

  const [value, setValue] = useState("");
  return (
    <Card
      title={question.title}
      bordered={false}
      style={{ margin: "8px", width: "100%" }}
    >
      <Input
        type="text"
        placeholder={question.type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </Card>
  );
}

const fragment = graphql`
  fragment DesignModeShortTextQuestionFragment on Question {
    id
    label
    title
    type
    required
    extraData
  }
`;
