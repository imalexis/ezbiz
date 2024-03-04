/**
 * @generated SignedSource<<03fe1ea3ac6c117c9039b7883f02dbfa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ResponseModeLinearScaleQuestionResponseQuery$variables = {
  formInstanceID: string;
  questionID: string;
};
export type ResponseModeLinearScaleQuestionResponseQuery$data = {
  readonly questionResponses: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly __typename: "QuestionResponse";
        readonly id: string;
        readonly value: string;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
};
export type ResponseModeLinearScaleQuestionResponseQuery = {
  response: ResponseModeLinearScaleQuestionResponseQuery$data;
  variables: ResponseModeLinearScaleQuestionResponseQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "formInstanceID"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "questionID"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "items": [
              {
                "fields": [
                  {
                    "kind": "Variable",
                    "name": "id",
                    "variableName": "formInstanceID"
                  }
                ],
                "kind": "ObjectValue",
                "name": "hasFormInstanceWith.0"
              }
            ],
            "kind": "ListValue",
            "name": "hasFormInstanceWith"
          },
          {
            "items": [
              {
                "fields": [
                  {
                    "kind": "Variable",
                    "name": "id",
                    "variableName": "questionID"
                  }
                ],
                "kind": "ObjectValue",
                "name": "hasQuestionWith.0"
              }
            ],
            "kind": "ListValue",
            "name": "hasQuestionWith"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "QuestionResponseConnection",
    "kind": "LinkedField",
    "name": "questionResponses",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "QuestionResponseEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QuestionResponse",
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
                "name": "value",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ResponseModeLinearScaleQuestionResponseQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ResponseModeLinearScaleQuestionResponseQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "3d4aa6e99ba6aa0f12213e11cf2148b2",
    "id": null,
    "metadata": {},
    "name": "ResponseModeLinearScaleQuestionResponseQuery",
    "operationKind": "query",
    "text": "query ResponseModeLinearScaleQuestionResponseQuery(\n  $questionID: ID!\n  $formInstanceID: ID!\n) {\n  questionResponses(where: {hasQuestionWith: [{id: $questionID}], hasFormInstanceWith: [{id: $formInstanceID}]}) {\n    edges {\n      node {\n        __typename\n        id\n        value\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "151748de5e98a2e07fc19b02d2ac4d07";

export default node;
