/**
 * @generated SignedSource<<049dbaab6761a354b6681aa809e73c82>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type QuestionType = "checkboxes" | "date" | "drop_down" | "file" | "linear_scale" | "multi_choice" | "paragraph" | "short_text" | "time" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ResponseModeParagraphQuestionFragment$data = {
  readonly __typename: "Question";
  readonly extraData: string;
  readonly id: string;
  readonly label: string;
  readonly required: boolean;
  readonly title: string;
  readonly type: QuestionType;
  readonly " $fragmentType": "ResponseModeParagraphQuestionFragment";
};
export type ResponseModeParagraphQuestionFragment$key = {
  readonly " $data"?: ResponseModeParagraphQuestionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ResponseModeParagraphQuestionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ResponseModeParagraphQuestionFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
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
      "name": "required",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "extraData",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    }
  ],
  "type": "Question",
  "abstractKey": null
};

(node as any).hash = "57c28d6a42abf505a6f7ede53d6123ad";

export default node;
