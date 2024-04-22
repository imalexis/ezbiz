import graphql from "babel-plugin-relay/macro";
import { useNavigate } from "react-router-dom";
import { useFragment } from "react-relay";
import { Card, Flex, Image, Typography } from "antd";
import { FormTemplateCardFragment$key } from "./__generated__/FormTemplateCardFragment.graphql";
import Meta from "antd/es/card/Meta";

const { Text } = Typography;

type Props = {
  fragmentKey: FormTemplateCardFragment$key;
};

export function FormTemplateCard({ fragmentKey }: Props) {
  const navigate = useNavigate();
  const data = useFragment(fragment, fragmentKey);
  return (
    <Flex vertical justify="center" flex={1}>
      <Card
        hoverable
        cover={
          <img
            alt="template cover"
            src={data.cover ?? ""}
            height={110}
            width={190}
          />
        }
        onClick={() => {
          navigate(`create/${data?.id}`);
        }}
        style={{ height: 205 }}
      >
        {/* <Text>{data.name} </Text> */}
        {data.name}
      </Card>
    </Flex>
  );
}

const fragment = graphql`
  fragment FormTemplateCardFragment on FormSpec {
    id
    name
    cover
    description
    enabled
    createdAt
    updatedAt
    createdBy
    questionGroups {
      id @required(action: THROW)
      question {
        id
        label
        type
      }
    }
  }
`;
