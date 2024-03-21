/**
 * @generated SignedSource<<94bb371921309ecb695f67028d8fa411>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ResponseModeShortTextQuestionFormResponseContextFragment$data = {
  readonly id: string;
  readonly questionResponse: ReadonlyArray<{
    readonly label: string;
    readonly value: string;
  }> | null | undefined;
  readonly " $fragmentType": "ResponseModeShortTextQuestionFormResponseContextFragment";
};
export type ResponseModeShortTextQuestionFormResponseContextFragment$key = {
  readonly " $data"?: ResponseModeShortTextQuestionFormResponseContextFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ResponseModeShortTextQuestionFormResponseContextFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ResponseModeShortTextQuestionFormResponseContextFragment",
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
      "concreteType": "QuestionResponse",
      "kind": "LinkedField",
      "name": "questionResponse",
      "plural": true,
      "selections": [
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
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "FormInstance",
  "abstractKey": null
};

(node as any).hash = "03c5ea4df1b76974bcdfc8c0debb0b3f";

export default node;
