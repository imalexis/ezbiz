import { PlusOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import { Input } from "antd";
import graphql from "babel-plugin-relay/macro";
import {
  FormTemplateCreateCardMutation,
  FormTemplateCreateCardMutation$data,
  FormTemplateCreateCardMutation$variables,
} from "./__generated__/FormTemplateCreateCardMutation.graphql";
import { useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { FormTemplateCreateCardUpdateMutation } from "./__generated__/FormTemplateCreateCardUpdateMutation.graphql";

const { TextArea } = Input;

export function FormTemplateCreateCard() {
  const navigate = useNavigate();
  const [commitCreation] =
    useMutation<FormTemplateCreateCardMutation>(mutation);
  const [commitUpdateFormSpec] =
    useMutation<FormTemplateCreateCardUpdateMutation>(mutation2);

  return (
    <div className="form_template_card_default">
      <PlusOutlined
        style={{
          fontSize: "64px",
          color: "green",
          margin: "auto 0",
          justifyItems: "center",
        }}
        onClick={() => {
          commitCreation({
            variables: {
              input: { name: "Default form title", createdBy: 1 },
              input2: { name: "Default question group", createdBy: 1 },
            },
            onCompleted: (response, errors) => {
              commitUpdateFormSpec({
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
        }}
      />
    </div>
  );
}

// create
const mutation = graphql`
  mutation FormTemplateCreateCardMutation(
    $input: CreateFormSpecInput!
    $input2: CreateQuestionGroupInput!
  ) {
    createFormSpec(input: $input) {
      id
    }
    createQuestionGroup(input: $input2) {
      id
    }
  }
`;

// update
const mutation2 = graphql`
  mutation FormTemplateCreateCardUpdateMutation(
    $input: UpdateFormSpecInput!
    $id: ID!
  ) {
    updateFormSpec(input: $input, id: $id) {
      id
    }
  }
`;
