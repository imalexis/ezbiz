import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { FormSpecListQuery } from "./__generated__/FormSpecListQuery.graphql";
import { FormSpecPaginatedList } from "./FormSpecPaginatedList";
import { Flex, Switch } from "antd";
import { FormSpecPaginatedTable } from "./FormSpecPaginatedTable";
import { useState } from "react";

export default function FormSpecList() {
  const [fetchKey, setFetchKey] = useState<number>(0);
  const dataSource = useLazyLoadQuery<FormSpecListQuery>(
    query,
    {
      first: 10,
      orderBy: {
        direction: "DESC",
        field: "UPDATED_AT",
      },
    },
    {
      fetchKey: fetchKey,
      fetchPolicy: "store-and-network",
    }
  );
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Flex vertical>
      <Flex justify="start">
        <Flex flex={10}>
          <div></div>
        </Flex>
        <Flex flex={1}>
          <Switch
            checkedChildren="Table"
            unCheckedChildren="List"
            defaultChecked
            onChange={onChange}
            size="default"
            style={{
              backgroundColor: "#287D7D",
            }}
          />
        </Flex>
      </Flex>
      {isChecked ? (
        <FormSpecPaginatedTable fragmentKey={dataSource} />
      ) : (
        <FormSpecPaginatedList
          fragmentKey={dataSource}
          setFetchKey={() => {
            setFetchKey(fetchKey + 1);
          }}
        />
      )}
    </Flex>
  );
}

const query = graphql`
  query FormSpecListQuery(
    $first: Int!
    $after: Cursor
    $orderBy: FormSpecOrder!
  ) {
    ...FormSpecPaginatedListFragment
    ...FormSpecPaginatedTableFragment
  }
`;
