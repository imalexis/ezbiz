/**
 * @generated SignedSource<<342a5fbfe5072020a42e63f4a7fc42eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuestionGroupFragment$data = {
  readonly id: string;
  readonly name: string;
  readonly question: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"ResponseModeQuestionFragment">;
  }> | null | undefined;
  readonly " $fragmentType": "QuestionGroupFragment";
};
export type QuestionGroupFragment$key = {
  readonly " $data"?: QuestionGroupFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"QuestionGroupFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuestionGroupFragment",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Question",
      "kind": "LinkedField",
      "name": "question",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ResponseModeQuestionFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "QuestionGroup",
  "abstractKey": null
};

(node as any).hash = "cfe3de1544586de746e901a5f98559a3";

export default node;
