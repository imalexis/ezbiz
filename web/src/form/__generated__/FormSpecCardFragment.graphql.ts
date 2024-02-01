/**
 * @generated SignedSource<<0908abc46490571725ff5e4d68edb997>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type QuestionType = "checkboxes" | "date" | "drop_down" | "file" | "linear_scale" | "multi_choice" | "paragraph" | "short_text" | "time" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type FormSpecCardFragment$data = {
  readonly cover: string | null | undefined;
  readonly createdAt: any;
  readonly createdBy: number;
  readonly description: string;
  readonly enabled: boolean;
  readonly id: string;
  readonly name: string;
  readonly questionGroups: ReadonlyArray<{
    readonly id: string;
    readonly question: ReadonlyArray<{
      readonly id: string;
      readonly label: string;
      readonly type: QuestionType;
    }> | null | undefined;
  }> | null | undefined;
  readonly updatedAt: any;
  readonly " $fragmentType": "FormSpecCardFragment";
};
export type FormSpecCardFragment$key = {
  readonly " $data"?: FormSpecCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FormSpecCardFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FormSpecCardFragment",
  "selections": [
    (v0/*: any*/),
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
      "kind": "ScalarField",
      "name": "cover",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "enabled",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdBy",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "QuestionGroup",
      "kind": "LinkedField",
      "name": "questionGroups",
      "plural": true,
      "selections": [
        {
          "kind": "RequiredField",
          "field": (v0/*: any*/),
          "action": "THROW",
          "path": "questionGroups.id"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Question",
          "kind": "LinkedField",
          "name": "question",
          "plural": true,
          "selections": [
            (v0/*: any*/),
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
              "name": "type",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "FormSpec",
  "abstractKey": null
};
})();

(node as any).hash = "2a5430345b18f3cdf91d3ef38a02059c";

export default node;
