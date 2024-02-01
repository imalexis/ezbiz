/**
 * @generated SignedSource<<524b01c09a7c47c84d65ec21c9701792>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type QuestionType = "checkboxes" | "date" | "drop_down" | "file" | "linear_scale" | "multi_choice" | "paragraph" | "short_text" | "time" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type GeneralQuestionFragment$data = {
  readonly label: string;
  readonly type: QuestionType;
  readonly " $fragmentSpreads": FragmentRefs<"DesignModeShortTextQuestionFragment" | "DropdownQuestionFragment" | "FileQuestionFragment" | "MultiChoiceQuestionFragment" | "ParagraphQuestionFragment" | "ShortTextQuestionFragment">;
  readonly " $fragmentType": "GeneralQuestionFragment";
};
export type GeneralQuestionFragment$key = {
  readonly " $data"?: GeneralQuestionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GeneralQuestionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GeneralQuestionFragment",
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DesignModeShortTextQuestionFragment"
    }
  ],
  "type": "Question",
  "abstractKey": null
};

(node as any).hash = "ed0218c878b2f24aa8fe24390b2edfdc";

export default node;
