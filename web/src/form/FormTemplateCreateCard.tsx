import { PlusOutlined } from "@ant-design/icons";
import graphql from "babel-plugin-relay/macro";
import { FormTemplateCreateCardMutation } from "./__generated__/FormTemplateCreateCardMutation.graphql";
import { useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { FormTemplateCreateCardUpdateMutation } from "./__generated__/FormTemplateCreateCardUpdateMutation.graphql";

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
    <div className={"form_template_card_default"} onClick={handleClick}>
      <PlusOutlined style={styles.plus} />
    </div>
  );
}

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

const styles = {
  plus: {
    fontSize: "64px",
    color: "green",
    margin: "auto 0",
    justifyItems: "center",
  },
};
