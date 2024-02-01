/**
 * @generated SignedSource<<ef055c2dd9e581ea4eecd50230a7e3fa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FormSpecCreateEntryPointQuery$variables = {
  id: string;
};
export type FormSpecCreateEntryPointQuery$data = {
  readonly node: {
    readonly questionGroups?: ReadonlyArray<{
      readonly id: string;
    }> | null | undefined;
  } | null | undefined;
};
export type FormSpecCreateEntryPointQuery = {
  response: FormSpecCreateEntryPointQuery$data;
  variables: FormSpecCreateEntryPointQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "QuestionGroup",
      "kind": "LinkedField",
      "name": "questionGroups",
      "plural": true,
      "selections": [
        (v2/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "FormSpec",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormSpecCreateEntryPointQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormSpecCreateEntryPointQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3a5cb2806b998860b630741e12d32b61",
    "id": null,
    "metadata": {},
    "name": "FormSpecCreateEntryPointQuery",
    "operationKind": "query",
    "text": "query FormSpecCreateEntryPointQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on FormSpec {\n      questionGroups {\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "59c9285fcb8ff1eb7ccf36b2d82cc9f9";

export default node;
