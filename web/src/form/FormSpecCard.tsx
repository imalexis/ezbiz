import graphql from "babel-plugin-relay/macro";
import { FormSpecCardFragment$key } from "./__generated__/FormSpecCardFragment.graphql";
import { useFragment, useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { FormSpecCardMutation } from "./__generated__/FormSpecCardMutation.graphql";
import {
  CloseOutlined,
  DeleteOutlined,
  OrderedListOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Button, Card, Flex, Typography } from "antd";
import "./FormSpecCardStyle.css";
import { FormSpecCardDeleteMutation } from "./__generated__/FormSpecCardDeleteMutation.graphql";
import toast from "react-hot-toast";

const { Text } = Typography;
type Props = {
  formSpec: FormSpecCardFragment$key | null;
  index: number;
  onDelete: () => void;
};

export function FormSpecCard({ formSpec, index, onDelete }: Props) {
  const navigate = useNavigate();
  const data = useFragment(fragment, formSpec);
  const [commit] = useMutation<FormSpecCardMutation>(mutation);
  const [deleteFormSpec, isInflight] =
    useMutation<FormSpecCardDeleteMutation>(deleteMutation);
  return (
    <Card
      hoverable
      style={{ width: "50%" }}
      tabIndex={index}
      title={data?.name}
    >
      <Flex vertical gap={16}>
        <img
          src="http://localhost:8100/public/image/form_template.png"
          alt="Preview of a Word document: About Us - Overview"
          onClick={() => {
            navigate(`create/${data?.id}`);
          }}
          className="clickable-img"
        />
        <Flex justify="space-around">
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
            icon={<ShareAltOutlined style={{ fontSize: "12px" }} />}
            onClick={() => {
              const url: string = `http://localhost:3000/admin/forms/${data?.id}/share`;
              const type = "text/plain";
              const blob = new Blob([url], { type });
              const item = [new ClipboardItem({ [type]: blob })];
              navigator.clipboard.write(item).then(() => {});
              toast((t) => (
                <Flex align="center">
                  <Text>URL Copied!</Text>
                  <Button
                    icon={<CloseOutlined style={{ fontSize: "12px" }} />}
                    onClick={() => toast.dismiss(t.id)}
                  />
                </Flex>
              ));
            }}
          >
            Share URL
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
