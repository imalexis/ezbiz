import { Flex } from "antd";
import { FormTemplateCreateCard } from "./FormTemplateCreateCard";
import { FormTemplateCard } from "./FormTemplateCard";
import FormSpecList from "./FormSpecList";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { FormEntryPointContentTemplateQuery } from "./__generated__/FormEntryPointContentTemplateQuery.graphql";
import { Toaster } from "react-hot-toast";

export function FormEntryPointContent() {
  const data = useLazyLoadQuery<FormEntryPointContentTemplateQuery>(query, {});
  return (
    <Flex align="center" justify="center">
      <Flex vertical style={{ width: "70vw" }}>
        <Flex
          style={{
            height: "320px",
          }}
          align="flex-start"
          gap={20}
        >
          <FormTemplateCreateCard />
          {(data.formSpecs.edges ?? []).map((edge, index) => {
            if (edge?.node == null) {
              return <></>;
            }
            return <FormTemplateCard key={index} fragmentKey={edge?.node} />;
          })}
        </Flex>
        <Toaster />
        <FormSpecList />
      </Flex>
    </Flex>
  );
}

const query = graphql`
  query FormEntryPointContentTemplateQuery {
    formSpecs(first: 4, where: { isTemplate: true }) {
      edges {
        node {
          ...FormTemplateCardFragment
        }
      }
    }
  }
`;
