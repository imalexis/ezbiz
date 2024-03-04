/**
 * @generated SignedSource<<d61db5b7c2e92ee65b4592d073db3bcf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ResponseModeParagraphQuestionResponseQuery$variables = {
  formInstanceID: string;
  questionID: string;
};
export type ResponseModeParagraphQuestionResponseQuery$data = {
  readonly questionResponses: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly value: string;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
};
export type ResponseModeParagraphQuestionResponseQuery = {
  response: ResponseModeParagraphQuestionResponseQuery$data;
  variables: ResponseModeParagraphQuestionResponseQuery$variables;
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
    "name": "ResponseModeParagraphQuestionResponseQuery",
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
    "name": "ResponseModeParagraphQuestionResponseQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "cb739ec856165897351f733eb5ea8f45",
    "id": null,
    "metadata": {},
    "name": "ResponseModeParagraphQuestionResponseQuery",
    "operationKind": "query",
    "text": "query ResponseModeParagraphQuestionResponseQuery(\n  $questionID: ID!\n  $formInstanceID: ID!\n) {\n  questionResponses(where: {hasQuestionWith: [{id: $questionID}], hasFormInstanceWith: [{id: $formInstanceID}]}) {\n    edges {\n      node {\n        id\n        value\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8f3254da11d4e1bc9539b957209db86a";

export default node;
