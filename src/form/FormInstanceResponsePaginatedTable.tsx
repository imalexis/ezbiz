import graphql from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay";
import { Button, Flex, Space, Table } from "antd";
import { FormInstanceResponsePaginatedTable_formSpec$key } from "./__generated__/FormInstanceResponsePaginatedTable_formSpec.graphql";
import { useParams } from "react-router-dom";

type Props = {
  fragmentKey: FormInstanceResponsePaginatedTable_formSpec$key;
};

function isNotNull<T>(value: T | null | undefined): value is T {
  return value != null;
}

// 无论任何时候 要用到什么参数
// 总是从真正的组件那一方开始
// 比如 Container 包含一个 Card 组件
// 那么我们应该从Card组件开始

export function FormInstanceResponsePaginatedTable({ fragmentKey }: Props) {
  const { data, loadNext, hasNext } = usePaginationFragment(
    fragment,
    fragmentKey
  );
  const { formID } = useParams();

  const rows = (data.formInstances.edges ?? []).map((edge) => {
    let r: { [key: string]: string } = {};
    r["id"] = edge?.node?.id ?? ""; // add "id" field
    edge?.node?.questionResponse?.forEach((resp) => {
      if (resp.value !== "") {
        r[resp.label] = resp.value;
      }
    });
    return {
      ...r,
      key: edge?.node?.id,
    };
  });

  const allLabels = (data.formInstances.edges ?? [])
    .flatMap((edge) => {
      return (
        edge?.node?.questionResponse?.map((resp) => {
          return resp.label;
        }) ?? []
      );
    })
    .filter(isNotNull);

  const labels = Array.from(new Set(allLabels));
  labels.unshift("id");

  type ColumnType = {
    title: string;
    dataIndex: string;
    key: string;
    render?: (text: string, record: any, index: number) => React.ReactNode;
    fixed?: "left" | "right" | boolean;
  };
  const columns: ColumnType[] = labels.map((label) => ({
    title: label,
    dataIndex: label,
    key: label,
  }));
  columns.unshift({
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (text, record, index) => {
      return (
        <Space>
          <a href={`instance/${record.id}`}>view</a>
        </Space>
      );
    },
    fixed: "right",
  });

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

      <Table dataSource={rows} columns={columns} scroll={{ x: 1500, y: 300 }} />
    </Flex>
  );
}

const fragment = graphql`
  # FormSpec 必须大写 因为它是类型信息
  fragment FormInstanceResponsePaginatedTable_formSpec on Query
  @refetchable(queryName: "FormInstancePaginatedTableFragmentQuery") {
    formInstances(first: $first, after: $after, where: $where)
      @connection(
        key: "FormInstanceResponsePaginatedTabletQuery_formInstances"
      ) {
      edges {
        node {
          id
          formSpec {
            id
          }
          questionResponse {
            id
            label
            value
            question {
              label
            }
          }
        }
      }
    }
  }
`;
