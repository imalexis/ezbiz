import { QuestionType } from "./__generated__/FormSpecCardFragment.graphql";

export type GeneralQuestionMetadata = {
  id: string;
  title: string;
  label: string;
  type: QuestionType;
  createdAt: string | null;
  extraData?: string | null;
};
