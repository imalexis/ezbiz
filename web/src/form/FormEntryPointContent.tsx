import { Flex } from "antd";
import { FormTemplateCreateCard } from "./FormTemplateCreateCard";
import { FormTemplateCard } from "./FormTemplateCard";
import FormSpecList from "./FormSpecList";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { FormEntryPointContentTemplateQuery } from "./__generated__/FormEntryPointContentTemplateQuery.graphql";

export function FormEntryPointContent() {
  const data = useLazyLoadQuery<FormEntryPointContentTemplateQuery>(query, {});
  return (
    <>
      <Flex
        style={{
          height: "320px",
        }}
        align="center"
        justify="space-evenly"
      >
        <FormTemplateCreateCard />
        {(data.formSpecs.edges ?? []).map((edge, index) => {
          if (edge?.node == null) {
            return <></>;
          }
          return <FormTemplateCard key={index} fragmentKey={edge?.node} />;
        })}
      </Flex>
      <FormSpecList />
    </>
  );
}

const query = graphql`
  query FormEntryPointContentTemplateQuery {
    formSpecs(first: 4) {
      edges {
        node {
          ...FormTemplateCardFragment
        }
      }
    }
  }
`;
