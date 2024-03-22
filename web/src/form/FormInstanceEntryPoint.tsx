import { Button, Flex, notification } from "antd";
import { useParams } from "react-router-dom";
import { useLazyLoadQuery, useMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import Title from "antd/es/typography/Title";
import { QuestionGroup } from "./questions/QuestionGroup";
import { FormInstanceEntryPointUpdateMutation } from "./__generated__/FormInstanceEntryPointUpdateMutation.graphql";
import { FormInstanceEntryPointQuery } from "./__generated__/FormInstanceEntryPointQuery.graphql";
import FormInstanceContext from "./FormInstanceContext";
import { useState } from "react";
import { NotificationPlacement } from "antd/es/notification/interface";
import { FormInstanceEntryPointAllResponseValueQuery } from "./__generated__/FormInstanceEntryPointAllResponseValueQuery.graphql";

export function FormInstanceEntryPoint() {
  const { formID, instanceID } = useParams();
  const [commitUpdate] =
    useMutation<FormInstanceEntryPointUpdateMutation>(mutation);
  const data = useLazyLoadQuery<FormInstanceEntryPointQuery>(query, {
    id: formID ?? "",
    instanceID: instanceID ?? "",
  });
  const status =
    (data.node?.formInstances?.edges ?? [])[0]?.node?.status ?? "pending";
  const [isDisabled, setIsDisabled] = useState(status === "submiited");
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description: "Your response has been submited",
      placement,
    });
  };
  const handleSubmit = () => {
    commitUpdate({
      variables: {
        input: { status: "submiited" },
        id: instanceID ?? "",
      },
      onCompleted: () => {
        setIsDisabled(true);
        // navigate(`/${formID}/instance/${instanceID}/formSubmitted`);
        openNotification("top");
      },
    });
  };
  const allResponseValue =
    useLazyLoadQuery<FormInstanceEntryPointAllResponseValueQuery>(
      allResponseValueQuery,
      {
        where: {
          hasFormInstanceWith: [{ id: instanceID ?? "" }],
        },
      }
    );
  const allResponses = (allResponseValue.questionResponses.edges ?? [])
    .map((edge) => edge?.node)
    .filter((item) => item != null) as {
    readonly label: string;
    readonly value: string;
  }[];
  const initialLocalSharedValues = new Map(
    allResponses.map((obj) => [obj.label, obj.value])
  );
  const [localSharedValues, setLocalSharedValues] = useState<
    Map<string, string>
  >(initialLocalSharedValues);
  return (
    <Flex vertical>
      {contextHolder}
      <Flex style={{ backgroundColor: "#f5f5f5" }}>
        <Flex flex={1}>
          <div></div>
        </Flex>
        <FormInstanceContext.Provider
          value={{
            status: status,
          }}
        >
          <Flex vertical flex={6}>
            <Title level={3}>{data.node?.name}</Title>
            {data.node?.questionGroups?.map((g, index) => (
              <QuestionGroup
                key={index}
                fragmentKey={g}
                setLocalQuestionExtraData={(idx, extra) => {}}
                localSharedValues={localSharedValues}
                setLocalSharedValues={setLocalSharedValues}
              />
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
            disabled={isDisabled}
            className="button"
            style={
              status === "submiited"
                ? {
                    backgroundColor: "#4CAF50",
                    color: "#FFFFFF",
                    textAlign: "center",
                    padding: "0",
                    fontSize: "128%",
                    width: "100%",
                    border: "none",
                    borderRadius: "5px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    transition: "background-color 0.3s ease",
                  }
                : {
                    backgroundColor: "#88CF6C",
                    color: "#FDFFF4",
                    textAlign: "center",
                    padding: "0",
                    fontSize: "128%",
                    width: "100%",
                  }
            }
            onClick={handleSubmit}
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

const allResponseValueQuery = graphql`
  query FormInstanceEntryPointAllResponseValueQuery(
    $where: QuestionResponseWhereInput!
  ) {
    questionResponses(where: $where) {
      edges {
        node {
          label
          value
        }
      }
    }
  }
`;
