/**
 * @generated SignedSource<<c7652eb6440ba9050b182de233baaaf9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type QuestionType = "checkboxes" | "date" | "drop_down" | "file" | "linear_scale" | "multi_choice" | "paragraph" | "short_text" | "time" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ResponseModeMultiChoiceQuestionFragment$data = {
  readonly __typename: "Question";
  readonly dependencies: string;
  readonly extraData: string;
  readonly id: string;
  readonly label: string;
  readonly required: boolean;
  readonly rule: string;
  readonly title: string;
  readonly type: QuestionType;
  readonly " $fragmentType": "ResponseModeMultiChoiceQuestionFragment";
};
export type ResponseModeMultiChoiceQuestionFragment$key = {
  readonly " $data"?: ResponseModeMultiChoiceQuestionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ResponseModeMultiChoiceQuestionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ResponseModeMultiChoiceQuestionFragment",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rule",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "dependencies",
      "storageKey": null
    }
  ],
  "type": "Question",
  "abstractKey": null
};

(node as any).hash = "cbc4c88bd204e5f80d499ab184a95911";

export default node;
