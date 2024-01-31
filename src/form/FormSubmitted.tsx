import { Card, Flex } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { useParams } from "react-router-dom";
import { FormSubmittedQuery } from "./__generated__/FormSubmittedQuery.graphql";

export default function FormSubmitted() {
  const { formID } = useParams();
  const data = useLazyLoadQuery<FormSubmittedQuery>(query, {
    id: formID ?? "",
  });

  return (
    <Flex>
      <Card title={data.node?.name}></Card>
    </Flex>
  );
}

const query = graphql`
  query FormSubmittedQuery($id: ID!) {
    node(id: $id) {
      ... on FormSpec {
        name
      }
    }
  }
`;
