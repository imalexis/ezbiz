/**
 * @generated SignedSource<<f035b988a574249dc44603f61a6b179a>>
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
  readonly " $fragmentSpreads": FragmentRefs<"CheckboxQuestionFragment" | "DateQuestionFragment" | "DropdownQuestionFragment" | "FileQuestionFragment" | "MultiChoiceQuestionFragment" | "ParagraphQuestionFragment" | "ShortTextQuestionFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DateQuestionFragment"
    }
  ],
  "type": "Question",
  "abstractKey": null
};

(node as any).hash = "aedeeda580d9b7928883d334055188ed";

export default node;
