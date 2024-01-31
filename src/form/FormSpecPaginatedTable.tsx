import graphql from "babel-plugin-relay/macro";
import { FormSpecPaginatedTableFragment$key } from "./__generated__/FormSpecPaginatedTableFragment.graphql";
import { usePaginationFragment } from "react-relay";
import { Button, Flex, Table } from "antd";
import { ColumnsType } from "antd/es/table";

const fragment = graphql`
  fragment FormSpecPaginatedTableFragment on Query
  @refetchable(queryName: "FormSpecPaginatedTableFragmentQuery") {
    formSpecs(first: $first, after: $after)
      @connection(key: "FormSpecPaginatedTableFragmentQuery_formSpecs") {
      edges {
        node {
          id
          name
          ...FormSpecCardFragment
        }
      }
    }
  }
`;

type Props = {
  fragmentKey: FormSpecPaginatedTableFragment$key;
};

interface Type {
  id: string;
  name: string;
}

function isNotNull<T>(value: T | null | undefined): value is T {
  return value != null;
}

export function FormSpecPaginatedTable({ fragmentKey }: Props) {
  const { data, loadNext, hasNext } = usePaginationFragment(
    fragment,
    fragmentKey
  );

  const dataSource = (data.formSpecs.edges ?? [])
    .map((edge) => {
      if (edge == null || edge.node == null) {
        return null;
      }
      return {
        key: edge.node?.id,
        id: edge.node?.id,
        name: edge.node?.name,
      };
    })
    .filter(isNotNull);

  const columns: ColumnsType<Type> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "name",
      key: "name",
    },
  ];

  return (
    <Flex vertical>
      {hasNext && (
        <Button
          onClick={() => {
            loadNext(10);
          }}
        >
          Load More Data
        </Button>
      )}
      {data.formSpecs.edges?.map((edge) => (
        <div>{edge?.node?.id}</div>
      ))}
      {<Table columns={columns} dataSource={dataSource} />}
    </Flex>
  );
}
