import graphql from "babel-plugin-relay/macro";
import { FormSpecCardFragment$key } from "./__generated__/FormSpecCardFragment.graphql";
import { useFragment, useMutation } from "react-relay";

import {
  makeStyles,
  Body1,
  Caption1,
  Button,
  shorthands,
  Link,
} from "@fluentui/react-components";
import { ArrowReplyRegular, ShareRegular } from "@fluentui/react-icons";
import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";
import { FormSpecCardMutation } from "./__generated__/FormSpecCardMutation.graphql";

type Props = {
  formSpec: FormSpecCardFragment$key | null;
};

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";
  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    width: "720px",
    maxWidth: "100%",
  },
});

export function FormSpecCard({ formSpec }: Props) {
  const styles = useStyles();
  const navigate = useNavigate();
  const data = useFragment(fragment, formSpec);
  const [commit] = useMutation<FormSpecCardMutation>(mutation);

  return (
    <Card className={styles.card}>
      <CardHeader
        image={<img src={resolveAsset("avatar_elvia.svg")} alt={""} />}
        header={
          <Body1>
            <p>id: {data?.id}</p>
            <b>title: {data?.name}</b>
            <p>Created By: {data?.createdBy}</p>
            <p>Created At: {data?.createdAt}</p>
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
        <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
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
          onClick={() => {
            navigate(`${data?.id}/response`);
          }}
        >
          view response
        </Button>
        <Button
          icon={<Link />}
          onClick={() => {
            navigate(`create/${data?.id}`);
          }}
        >
          Open
        </Button>
      </CardFooter>
    </Card>
  );
}

const fragment = graphql`
  # fragment represents all fields are subset of parent <FormSpec>
  # <Component>_*_Fragment
  # on represents the data is from which Type
  # on FormSpec -> from FormSpec
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
