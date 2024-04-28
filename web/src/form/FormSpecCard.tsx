import graphql from "babel-plugin-relay/macro";
import { FormSpecCardFragment$key } from "./__generated__/FormSpecCardFragment.graphql";
import { useFragment, useMutation } from "react-relay";

import { Body1, Caption1, Button } from "@fluentui/react-components";
import { ShareRegular } from "@fluentui/react-icons";
import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";
import { FormSpecCardMutation } from "./__generated__/FormSpecCardMutation.graphql";
import { FormOutlined, OrderedListOutlined } from "@ant-design/icons";

type Props = {
  formSpec: FormSpecCardFragment$key | null;
  index: number;
};

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";
  return `${ASSET_URL}${asset}`;
};

export function FormSpecCard({ formSpec, index }: Props) {
  const navigate = useNavigate();
  const data = useFragment(fragment, formSpec);
  const [commit] = useMutation<FormSpecCardMutation>(mutation);
  return (
    <Card style={{ width: "25%" }} tabIndex={index}>
      <CardHeader
        image={<img src={resolveAsset("avatar_elvia.svg")} alt={""} />}
        header={
          <Body1>
            <p>id: {data?.id}</p>
            <b>title: {data?.name}</b>
          </Body1>
        }
        description={<Caption1>Description: {data?.description}</Caption1>}
      />

      <CardPreview
        logo={
          <img src={resolveAsset("docx.png")} alt="Microsoft Word document" />
        }
      >
        <img
          src={resolveAsset("doc_template.png")}
          alt="Preview of a Word document: About Us - Overview"
        />
      </CardPreview>

      <CardFooter>
        <Button
          icon={<ShareRegular fontSize={16} />}
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
          icon={<OrderedListOutlined size={16} />}
          onClick={() => {
            navigate(`${data?.id}/response`);
          }}
        >
          View Response
        </Button>
        <Button
          icon={<FormOutlined size={16} />}
          onClick={() => {
            navigate(`create/${data?.id}`);
          }}
        >
          View Form
        </Button>
      </CardFooter>
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
