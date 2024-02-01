/**
 * @generated SignedSource<<7f47c3cc07720c4996a85b0b74854075>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PendingQuestionPointQuery$variables = {
  id: string;
};
export type PendingQuestionPointQuery$data = {
  readonly node: {
    readonly questionGroups?: ReadonlyArray<{
      readonly id: string;
    }> | null | undefined;
  } | null | undefined;
};
export type PendingQuestionPointQuery = {
  response: PendingQuestionPointQuery$data;
  variables: PendingQuestionPointQuery$variables;
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
    "name": "PendingQuestionPointQuery",
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
    "name": "PendingQuestionPointQuery",
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
    "cacheID": "1b3dd20e95e398bf08ff1f6b63673882",
    "id": null,
    "metadata": {},
    "name": "PendingQuestionPointQuery",
    "operationKind": "query",
    "text": "query PendingQuestionPointQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on FormSpec {\n      questionGroups {\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "5977775bde9dae7f66ab63ee39f36c51";

export default node;
