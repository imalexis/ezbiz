import { PlusOutlined } from "@ant-design/icons";
import graphql from "babel-plugin-relay/macro";
import { FormTemplateCreateCardMutation } from "./__generated__/FormTemplateCreateCardMutation.graphql";
import { useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { FormTemplateCreateCardUpdateMutation } from "./__generated__/FormTemplateCreateCardUpdateMutation.graphql";
import { Card, Flex } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";

export function FormTemplateCreateCard() {
  const navigate = useNavigate();
  const [commitCreateMutation] = useMutation<FormTemplateCreateCardMutation>(
    createFormSpecMutation
  );
  const [commitUpdateMutation] =
    useMutation<FormTemplateCreateCardUpdateMutation>(updateFormSpecMutation);
  const handleClick = () => {
    commitCreateMutation({
      variables: {
        createFormSpecInput: { name: "Default form title", createdBy: 1 },
        createQuestionGroupInput: {
          name: "Default question group",
          createdBy: 1,
        },
      },
      onCompleted: (response, errors) => {
        commitUpdateMutation({
          variables: {
            id: response.createFormSpec.id,
            input: {
              addQuestionGroupIDs: [response.createQuestionGroup.id],
            },
          },
        });
        navigate(`create/${response.createFormSpec.id}`);
      },
    });
  };

  return (
    <Flex flex={1}>
      <Card
        style={{ height: 205, width: 160 }}
        cover={<Icon component={PlusSvg} style={{ marginTop: "60px" }} />}
        onClick={handleClick}
      ></Card>
    </Flex>
  );
}

const PlusSvg = () => (
  <svg
    fill="#91c46c"
    version="1.1"
    id="Capa_1"
    width="60px"
    height="60px"
    viewBox="0 0 45.402 45.402"
  >
    <g>
      <path
        d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
       c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
       c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
       c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
      />
    </g>
  </svg>
);

const createFormSpecMutation = graphql`
  mutation FormTemplateCreateCardMutation(
    $createFormSpecInput: CreateFormSpecInput!
    $createQuestionGroupInput: CreateQuestionGroupInput!
  ) {
    createFormSpec(input: $createFormSpecInput) {
      id
    }
    createQuestionGroup(input: $createQuestionGroupInput) {
      id
    }
  }
`;

const updateFormSpecMutation = graphql`
  mutation FormTemplateCreateCardUpdateMutation(
    $input: UpdateFormSpecInput!
    $id: ID!
  ) {
    updateFormSpec(input: $input, id: $id) {
      id
    }
  }
`;

// const styles = {
//   plus: {
//     fontSize: "64px",
//     color: "green",
//     margin: "auto 0",
//     justifyItems: "center",
//   },
// };
