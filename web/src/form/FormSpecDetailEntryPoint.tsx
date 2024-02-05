import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { FormSpecDetailEntryPointQuery } from "./__generated__/FormSpecDetailEntryPointQuery.graphql";
import { Flex } from "antd";
import { useParams } from "react-router-dom";
import { QuestionGroup } from "./questions/QuestionGroup";
import Title from "antd/es/typography/Title";

export function FormSpecDetailEntryPoint() {
  const { formID } = useParams();
  const data = useLazyLoadQuery<FormSpecDetailEntryPointQuery>(
    query,
    {
      id: formID ?? "",
    },
    {
      fetchPolicy: "network-only",
    }
  );
  return (
    // if submitted: disabled
    <Flex vertical>
      <Flex style={{ backgroundColor: "#f5f5f5" }}>
        <Flex flex={1}>
          <div></div>
        </Flex>
        <Flex vertical flex={6}>
          <Title level={3}>{data.node?.name}</Title>
          {data.node?.questionGroups?.map((g) => (
            <QuestionGroup fragmentKey={g} />
          ))}
        </Flex>
        <Flex flex={1}>
          <div></div>
        </Flex>
      </Flex>
    </Flex>
  );
}

const query = graphql`
  query FormSpecDetailEntryPointQuery($id: ID!) {
    node(id: $id) {
      ... on FormSpec {
        id
        name
        cover
        description
        questionGroups {
          name # need this field because we render group name in QuestionGroup component - To be nvestigated
          ...QuestionGroupFragment
        }
      }
    }
  }
`;
