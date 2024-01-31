import graphql from "babel-plugin-relay/macro";
import { FormSpecPaginatedListFragment$key } from "./__generated__/FormSpecPaginatedListFragment.graphql";
import { usePaginationFragment } from "react-relay";
import { Col, Row } from "antd";
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
    <>
      totalCount: {data.formSpecs.totalCount}
      <div>
        {hasNext && (
          <button
            onClick={() => {
              loadNext(10);
            }}
          >
            load more
          </button>
        )}
      </div>
      <Row gutter={16} align={"middle"} justify={"center"}>
        {(data.formSpecs.edges ?? []).map((edge) =>
          edge?.node != null ? (
            <Col span={8}>
              <FormSpecCard formSpec={edge?.node} />
            </Col>
          ) : null
        )}
      </Row>
    </>
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
