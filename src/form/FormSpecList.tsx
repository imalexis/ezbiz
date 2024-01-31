import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { FormSpecListQuery } from "./__generated__/FormSpecListQuery.graphql";
import { FormSpecPaginatedList } from "./FormSpecPaginatedList";
import { Flex, Switch } from "antd";
import { FormSpecPaginatedTable } from "./FormSpecPaginatedTable";
import { useState } from "react";

export default function FormSpecList() {
  const dataSource = useLazyLoadQuery<FormSpecListQuery>(query, {
    first: 10,
    orderBy: {
      direction: "DESC",
      field: "CREATED_AT",
    },
  });

  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Flex vertical>
      <Flex justify="space-even">
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
          />
        </Flex>
      </Flex>

      {isChecked ? (
        <FormSpecPaginatedTable fragmentKey={dataSource} />
      ) : (
        <FormSpecPaginatedList fragmentKey={dataSource} />
      )}
    </Flex>
  );
}

// query <Component>_*_Query
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

/**
 * FormSpec -> Define
 * FormQuestionGroup
 * FormQuestion
 * FormInstance -> Create when you send to user
 * FormResponse ->
 */
