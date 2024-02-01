/**
 * @generated SignedSource<<550e50317a73975141a0f5e2ac8b86b7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type QuestionType = "checkboxes" | "date" | "drop_down" | "file" | "linear_scale" | "multi_choice" | "paragraph" | "short_text" | "time" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type DesignModeShortTextQuestionFragment$data = {
  readonly extraData: string;
  readonly id: string;
  readonly label: string;
  readonly required: boolean;
  readonly title: string;
  readonly type: QuestionType;
  readonly " $fragmentType": "DesignModeShortTextQuestionFragment";
};
export type DesignModeShortTextQuestionFragment$key = {
  readonly " $data"?: DesignModeShortTextQuestionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DesignModeShortTextQuestionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DesignModeShortTextQuestionFragment",
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

(node as any).hash = "823b5214c71e601950f02796ab66161e";

export default node;
