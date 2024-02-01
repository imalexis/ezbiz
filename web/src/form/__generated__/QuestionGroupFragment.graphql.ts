/**
 * @generated SignedSource<<86859fa10bd9e9358f37e3248448406d>>
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
    readonly " $fragmentSpreads": FragmentRefs<"QuestionFragment">;
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
          "name": "QuestionFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "QuestionGroup",
  "abstractKey": null
};

(node as any).hash = "2d4a042a5c8ec99dd044c248f31321aa";

export default node;
