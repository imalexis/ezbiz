import graphql from "babel-plugin-relay/macro";
import "./FormTemplateCardStyle.css";
import { useNavigate } from "react-router-dom";
import { useFragment } from "react-relay";
import { Card } from "antd";
import { CardPreview, Text } from "@fluentui/react-components";
import { FormTemplateCardFragment$key } from "./__generated__/FormTemplateCardFragment.graphql";

type Props = {
  fragmentKey: FormTemplateCardFragment$key;
};

export function FormTemplateCard({ fragmentKey }: Props) {
  const navigate = useNavigate();
  const data = useFragment(fragment, fragmentKey);
  return (
    <Card
      style={{ width: 245 }}
      onClick={() => {
        navigate(`create/${data?.id}`);
      }}
      className="form_template_card_default"
    >
      <Text>{data.name}</Text>
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
    </Card>
  );
}

const fragment = graphql`
  fragment FormTemplateCardFragment on FormSpec {
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

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";
  return `${ASSET_URL}${asset}`;
};
