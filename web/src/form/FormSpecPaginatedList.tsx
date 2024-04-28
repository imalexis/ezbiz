import graphql from "babel-plugin-relay/macro";
import { FormSpecPaginatedListFragment$key } from "./__generated__/FormSpecPaginatedListFragment.graphql";
import { usePaginationFragment } from "react-relay";
import { Flex, Typography } from "antd";
import { FormSpecCard } from "./FormSpecCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { Divider, Skeleton, Space } from "antd";

const { Text } = Typography;

type Props = {
  fragmentKey: FormSpecPaginatedListFragment$key;
};

export function FormSpecPaginatedList({ fragmentKey }: Props) {
  const { data, hasNext, loadNext } = usePaginationFragment(
    fragment,
    fragmentKey
  );

  const validData = data.formSpecs.edges ?? [];

  const columnNumber = 4;

  const chunks = Array.from(
    { length: Math.ceil(validData.length / columnNumber) },
    (v, i) => validData.slice(i * columnNumber, i * columnNumber + columnNumber)
  );

  const items = chunks
    .filter((chunk) => chunk != null)
    .map((chunk, index) => {
      return (
        <Flex key={index}>
          {chunk.map((edge, index) => {
            if (edge == null) {
              return <></>;
            }
            if (edge.node == null) {
              return <></>;
            }
            return <FormSpecCard formSpec={edge?.node} index={index} />;
          })}
        </Flex>
      );
    });

  return (
    <Flex vertical>
      <Flex align="center">
        <Text strong> totalCount: {data.formSpecs.totalCount}</Text>
      </Flex>
      {/* <Flex gap={20} wrap="wrap" align="center" justify="center"> */}
      <InfiniteScroll
        dataLength={(data.formSpecs.edges ?? []).length}
        next={() => {
          loadNext(10);
        }}
        hasMore={hasNext}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        {items}
      </InfiniteScroll>
      {/* </Flex> */}
    </Flex>
  );
}

const fragment = graphql`
  fragment FormSpecPaginatedListFragment on Query
  @refetchable(queryName: "FormSpecPaginatedListQuery") {
    formSpecs(first: $first, after: $after, orderBy: $orderBy)
      @connection(key: "FormSpecPaginatedListQuery_formSpecs") {
      totalCount
      edges {
        node {
          id
          ...FormSpecCardFragment
        }
      }
    }
  }
`;
