/**
 * @generated SignedSource<<878e64288c844cd6c46844d71a0662ed>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type QuestionType = "checkboxes" | "date" | "drop_down" | "file" | "linear_scale" | "multi_choice" | "paragraph" | "short_text" | "time" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ResponseModeDropdownQuestionFragment$data = {
  readonly __typename: "Question";
  readonly extraData: string;
  readonly id: string;
  readonly label: string;
  readonly required: boolean;
  readonly title: string;
  readonly type: QuestionType;
  readonly " $fragmentType": "ResponseModeDropdownQuestionFragment";
};
export type ResponseModeDropdownQuestionFragment$key = {
  readonly " $data"?: ResponseModeDropdownQuestionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ResponseModeDropdownQuestionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ResponseModeDropdownQuestionFragment",
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

(node as any).hash = "007dbfd3a55c2f9478956eafd3f3116a";

export default node;
