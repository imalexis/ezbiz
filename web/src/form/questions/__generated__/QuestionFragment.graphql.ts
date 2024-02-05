/**
 * @generated SignedSource<<4a3e3cab4ed3e27a943473a9069c8321>>
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
  readonly " $fragmentSpreads": FragmentRefs<"DropdownQuestionFragment" | "FileQuestionFragment" | "MultiChoiceQuestionFragment" | "ParagraphQuestionFragment" | "ShortTextQuestionFragment">;
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
      "name": "MultiChoiceQuestionFragment"
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

(node as any).hash = "e056136391ab1a19ec345a66b04a2605";

export default node;
