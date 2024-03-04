/**
 * @generated SignedSource<<501aa65732406c30f37e7e82a44817e8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type QuestionType = "checkboxes" | "date" | "drop_down" | "file" | "linear_scale" | "multi_choice" | "paragraph" | "short_text" | "time" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ResponseModeQuestionFragment$data = {
  readonly label: string;
  readonly type: QuestionType;
  readonly " $fragmentSpreads": FragmentRefs<"ResponseModeCheckboxQuestionFragment" | "ResponseModeDateQuestionFragment" | "ResponseModeDropdownQuestionFragment" | "ResponseModeFileQuestionFragment" | "ResponseModeLinearScaleQuestionFragment" | "ResponseModeMultiChoiceQuestionFragment" | "ResponseModeParagraphQuestionFragment" | "ResponseModeShortTextQuestionFragment">;
  readonly " $fragmentType": "ResponseModeQuestionFragment";
};
export type ResponseModeQuestionFragment$key = {
  readonly " $data"?: ResponseModeQuestionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ResponseModeQuestionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ResponseModeQuestionFragment",
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
      "name": "ResponseModeMultiChoiceQuestionFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ResponseModeCheckboxQuestionFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ResponseModeShortTextQuestionFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ResponseModeParagraphQuestionFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ResponseModeFileQuestionFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ResponseModeDropdownQuestionFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ResponseModeDateQuestionFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ResponseModeLinearScaleQuestionFragment"
    }
  ],
  "type": "Question",
  "abstractKey": null
};

(node as any).hash = "770196b946589cc0cb4c4098d137bee8";

export default node;
