/**
 * @generated SignedSource<<8638408abe064604d8b398555bb387d5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ResponseModeShortTextQuestionResponseQuery$variables = {
  formInstanceID: string;
  questionID: string;
};
export type ResponseModeShortTextQuestionResponseQuery$data = {
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
export type ResponseModeShortTextQuestionResponseQuery = {
  response: ResponseModeShortTextQuestionResponseQuery$data;
  variables: ResponseModeShortTextQuestionResponseQuery$variables;
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
    "name": "ResponseModeShortTextQuestionResponseQuery",
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
    "name": "ResponseModeShortTextQuestionResponseQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "23e85a13da26f2e074b5b768c6fa418d",
    "id": null,
    "metadata": {},
    "name": "ResponseModeShortTextQuestionResponseQuery",
    "operationKind": "query",
    "text": "query ResponseModeShortTextQuestionResponseQuery(\n  $questionID: ID!\n  $formInstanceID: ID!\n) {\n  questionResponses(where: {hasQuestionWith: [{id: $questionID}], hasFormInstanceWith: [{id: $formInstanceID}]}) {\n    edges {\n      node {\n        __typename\n        id\n        value\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7c69887cf97ef8539100d1aef8c51a52";

export default node;
