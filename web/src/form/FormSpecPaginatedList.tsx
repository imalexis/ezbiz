import graphql from "babel-plugin-relay/macro";
import { FormSpecPaginatedListFragment$key } from "./__generated__/FormSpecPaginatedListFragment.graphql";
import { usePaginationFragment } from "react-relay";
import { Button, Col, Flex, Row } from "antd";
import { FormSpecCard } from "./FormSpecCard";

type Props = {
  fragmentKey: FormSpecPaginatedListFragment$key;
};

export function FormSpecPaginatedList({ fragmentKey }: Props) {
  const { data, hasNext, loadNext } = usePaginationFragment(
    fragment,
    fragmentKey
  );
  return (
    <Flex vertical>
      <Flex align="center">
        <Flex> totalCount: {data.formSpecs.totalCount}</Flex>
        {hasNext && (
          <Flex>
            <Button
              onClick={() => {
                loadNext(10);
              }}
            >
              load more
            </Button>
          </Flex>
        )}
      </Flex>
      <Flex gap={20} wrap="wrap" align="center" justify="center">
        {(data.formSpecs.edges ?? []).map((edge, index) =>
          edge?.node != null ? (
            <Flex key={index}>
              <FormSpecCard formSpec={edge?.node} index={index} />
            </Flex>
          ) : (
            <></>
          )
        )}
      </Flex>
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
