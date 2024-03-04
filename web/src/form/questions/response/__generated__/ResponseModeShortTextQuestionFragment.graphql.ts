/**
 * @generated SignedSource<<0878af2f54f0fd71d97ed37d673b852f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type QuestionType = "checkboxes" | "date" | "drop_down" | "file" | "linear_scale" | "multi_choice" | "paragraph" | "short_text" | "time" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ResponseModeShortTextQuestionFragment$data = {
  readonly extraData: string;
  readonly id: string;
  readonly label: string;
  readonly required: boolean;
  readonly title: string;
  readonly type: QuestionType;
  readonly " $fragmentType": "ResponseModeShortTextQuestionFragment";
};
export type ResponseModeShortTextQuestionFragment$key = {
  readonly " $data"?: ResponseModeShortTextQuestionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ResponseModeShortTextQuestionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ResponseModeShortTextQuestionFragment",
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
    }
  ],
  "type": "Question",
  "abstractKey": null
};

(node as any).hash = "ea97f37d656852427424556e3022a91f";

export default node;
