/**
 * @generated SignedSource<<52319537cac93fbd1d64b2dee527524f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type QuestionType = "checkboxes" | "date" | "drop_down" | "file" | "linear_scale" | "multi_choice" | "paragraph" | "short_text" | "time" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type QuestionFragment$data = {
  readonly label: string;
  readonly type: QuestionType;
  readonly " $fragmentSpreads": FragmentRefs<"CheckboxQuestionFragment" | "DropdownQuestionFragment" | "FileQuestionFragment" | "ParagraphQuestionFragment" | "ShortTextQuestionFragment">;
  readonly " $fragmentType": "QuestionFragment";
};
export type QuestionFragment$key = {
  readonly " $data"?: QuestionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"QuestionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuestionFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CheckboxQuestionFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShortTextQuestionFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ParagraphQuestionFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FileQuestionFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DropdownQuestionFragment"
    }
  ],
  "type": "Question",
  "abstractKey": null
};

(node as any).hash = "111697dd7fa7867fcff0020401168e1a";

export default node;
