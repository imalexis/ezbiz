/**
 * @generated SignedSource<<ca75286ee96b7fc46b3ad639f5d02ab4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ResponseModeShortTextQuestionFormResponseContextQuery$variables = {
  id: string;
};
export type ResponseModeShortTextQuestionFormResponseContextQuery$data = {
  readonly node: {
    readonly __typename: string;
    readonly " $fragmentSpreads": FragmentRefs<"ResponseModeShortTextQuestionFormResponseContextFragment">;
  } | null | undefined;
};
export type ResponseModeShortTextQuestionFormResponseContextQuery = {
  response: ResponseModeShortTextQuestionFormResponseContextQuery$data;
  variables: ResponseModeShortTextQuestionFormResponseContextQuery$variables;
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
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ResponseModeShortTextQuestionFormResponseContextQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ResponseModeShortTextQuestionFormResponseContextFragment"
          }
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
    "name": "ResponseModeShortTextQuestionFormResponseContextQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
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
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "FormInstance",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "990bab1a88ab3bdc1d30af459d997425",
    "id": null,
    "metadata": {},
    "name": "ResponseModeShortTextQuestionFormResponseContextQuery",
    "operationKind": "query",
    "text": "query ResponseModeShortTextQuestionFormResponseContextQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...ResponseModeShortTextQuestionFormResponseContextFragment\n    id\n  }\n}\n\nfragment ResponseModeShortTextQuestionFormResponseContextFragment on FormInstance {\n  id\n  questionResponse {\n    label\n    value\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "a5ca3d95219c30ac85a8cede8c61f2e9";

export default node;
