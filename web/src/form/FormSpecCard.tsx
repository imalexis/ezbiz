import graphql from "babel-plugin-relay/macro";
import { FormSpecCardFragment$key } from "./__generated__/FormSpecCardFragment.graphql";
import { useFragment, useMutation } from "react-relay";

import { Button } from "@fluentui/react-components";
import { ShareRegular } from "@fluentui/react-icons";

import { useNavigate } from "react-router-dom";
import { FormSpecCardMutation } from "./__generated__/FormSpecCardMutation.graphql";
import { DeleteOutlined, OrderedListOutlined } from "@ant-design/icons";
import { Card, Flex } from "antd";

import "./FormSpecCardStyle.css";
import { FormSpecCardDeleteMutation } from "./__generated__/FormSpecCardDeleteMutation.graphql";

type Props = {
  formSpec: FormSpecCardFragment$key | null;
  index: number;
  onDelete: () => void;
};

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";
  return `${ASSET_URL}${asset}`;
};

export function FormSpecCard({ formSpec, index, onDelete }: Props) {
  const navigate = useNavigate();
  const data = useFragment(fragment, formSpec);
  const [commit] = useMutation<FormSpecCardMutation>(mutation);
  const [deleteFormSpec, isInflight] =
    useMutation<FormSpecCardDeleteMutation>(deleteMutation);
  return (
    <Card style={{ width: "50%" }} tabIndex={index} title={data?.name}>
      <Flex vertical gap={16}>
        <img
          src={resolveAsset("doc_template.png")}
          alt="Preview of a Word document: About Us - Overview"
          onClick={() => {
            navigate(`create/${data?.id}`);
          }}
          className="clickable-img"
        />
        <Flex justify="end">
          <Button
            icon={<DeleteOutlined />}
            disabled={isInflight}
            onClick={() => {
              deleteFormSpec({
                variables: {
                  id: data?.id ?? "",
                },
                onCompleted: () => {
                  onDelete();
                },
              });
            }}
          >
            Delete
          </Button>
          <Button
            icon={<ShareRegular fontSize={8} />}
            onClick={() => {
              commit({
                variables: { input: { formSpecID: data?.id } },
                onCompleted: (response, err) => {
                  navigate(
                    `${data?.id}/instance/${response.createFormInstance.id}`
                  );
                },
              });
            }}
          >
            Share
          </Button>
          <Button
            icon={<OrderedListOutlined size={8} />}
            onClick={() => {
              navigate(`${data?.id}/response`);
            }}
          >
            View Response
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}

const fragment = graphql`
  fragment FormSpecCardFragment on FormSpec {
    id
    name
    cover
    description
    enabled
    createdAt
    updatedAt
    createdBy
    questionGroups {
      id @required(action: THROW)
      question {
        id
        label
        type
      }
    }
  }
`;

const mutation = graphql`
  mutation FormSpecCardMutation($input: CreateFormInstanceInput!) {
    createFormInstance(input: $input) {
      id
    }
  }
`;

const deleteMutation = graphql`
  mutation FormSpecCardDeleteMutation($id: ID!) {
    deleteFormSpec(id: $id) {
      __typename
    }
  }
`;
