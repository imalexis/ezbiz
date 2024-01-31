import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { FormInstanceResponseContainerQuery } from "./__generated__/FormInstanceResponseContainerQuery.graphql";
import { FormInstanceResponsePaginatedTable } from "./FormInstanceResponsePaginatedTable";
import { Flex } from "antd";
import { useParams } from "react-router-dom";

export function FormInstanceResponseContainer() {
  const { formID } = useParams();
  const dataSource = useLazyLoadQuery<FormInstanceResponseContainerQuery>(
    query,
    {
      first: 50,
      where: {
        hasFormSpecWith: [
          {
            id: formID,
          },
        ],
      },
    },
    {
      fetchPolicy: "network-only",
    }
  );

  if (dataSource == null) {
    return <div>null</div>;
  }

  return (
    <Flex vertical>
      <FormInstanceResponsePaginatedTable fragmentKey={dataSource} />
    </Flex>
  );
}

const query = graphql`
  query FormInstanceResponseContainerQuery(
    $first: Int!
    $after: Cursor
    $where: FormInstanceWhereInput
  ) {
    ...FormInstanceResponsePaginatedTable_formSpec
  }
`;
