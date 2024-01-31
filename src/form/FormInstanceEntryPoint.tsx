import { Button, Flex } from "antd";
import { useParams } from "react-router-dom";
import { useLazyLoadQuery, useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import Title from "antd/es/typography/Title";
import { QuestionGroup } from "./QuestionGroup";
import { FormInstanceEntryPointUpdateMutation } from "./__generated__/FormInstanceEntryPointUpdateMutation.graphql";
import { FormInstanceEntryPointQuery } from "./__generated__/FormInstanceEntryPointQuery.graphql";
import FormInstanceContext from "./FormInstanceContext";

export function FormInstanceEntryPoint() {
  const { formID, instanceID } = useParams();
  const [commitUpdate] =
    useMutation<FormInstanceEntryPointUpdateMutation>(mutation);
  const data = useLazyLoadQuery<FormInstanceEntryPointQuery>(query, {
    id: formID ?? "",
    instanceID: instanceID ?? "",
  });

  return (
    <Flex vertical>
      <Flex style={{ backgroundColor: "#f5f5f5" }}>
        <Flex flex={1}>
          <div></div>
        </Flex>
        <FormInstanceContext.Provider
          value={{
            status:
              (data.node?.formInstances?.edges ?? [])[0]?.node?.status ??
              "pending",
          }}
        >
          <Flex vertical flex={6}>
            <Title level={3}>{data.node?.name}</Title>
            {data.node?.questionGroups?.map((g) => (
              <QuestionGroup fragmentKey={g} />
            ))}
          </Flex>
        </FormInstanceContext.Provider>
        <Flex flex={1}>
          <div></div>
        </Flex>
      </Flex>
      <Flex>
        <Flex flex={6}>
          <div></div>
        </Flex>
        <Flex flex={1}>
          <Button
            className="button"
            style={{
              backgroundColor: "#88CF6C",
              color: "#FDFFF4",
              textAlign: "center",
              padding: "0",
              fontSize: "128%",
              width: "100%",
            }}
            onClick={() => {
              commitUpdate({
                variables: {
                  input: { status: "submiited" },
                  id: instanceID ?? "",
                },
                onCompleted: (response, errors) => {
                  alert("submit succesfully!");
                },
              });
            }}
          >
            Sumit
          </Button>
        </Flex>
        <Flex flex={6}>
          <div></div>
        </Flex>
      </Flex>
    </Flex>
  );
}

const query = graphql`
  query FormInstanceEntryPointQuery($id: ID!, $instanceID: ID!) {
    node(id: $id) {
      ... on FormSpec {
        id
        name
        cover
        description
        questionGroups {
          name # need this field because we render group name in QuestionGroup component - To be nvestigated
          ...QuestionGroupFragment
        }
        formInstances(where: { id: $instanceID }) {
          edges {
            node {
              id
              status
            }
          }
        }
      }
    }
  }
`;

// update form instance
const mutation = graphql`
  mutation FormInstanceEntryPointUpdateMutation(
    $input: UpdateFormInstanceInput!
    $id: ID!
  ) {
    updateFormInstance(input: $input, id: $id) {
      id
    }
  }
`;