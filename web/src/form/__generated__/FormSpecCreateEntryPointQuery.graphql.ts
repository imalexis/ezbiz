/**
 * @generated SignedSource<<394d442b891ec2ac33c7c37f17f02bd0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuestionType = "checkboxes" | "date" | "drop_down" | "file" | "linear_scale" | "multi_choice" | "paragraph" | "short_text" | "time" | "%future added value";
export type FormSpecCreateEntryPointQuery$variables = {
  id: string;
};
export type FormSpecCreateEntryPointQuery$data = {
  readonly node: {
    readonly description?: string;
    readonly name?: string;
    readonly questionGroups?: ReadonlyArray<{
      readonly id: string;
      readonly question: ReadonlyArray<{
        readonly createdAt: any;
        readonly extraData: string;
        readonly id: string;
        readonly label: string;
        readonly rule: string;
        readonly title: string;
        readonly type: QuestionType;
        readonly " $fragmentSpreads": FragmentRefs<"ResponseModeQuestionFragment">;
      }> | null | undefined;
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
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "extraData",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rule",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
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
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "QuestionGroup",
                "kind": "LinkedField",
                "name": "questionGroups",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "question",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "ResponseModeQuestionFragment"
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
          (v11/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "QuestionGroup",
                "kind": "LinkedField",
                "name": "questionGroups",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "question",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "required",
                        "storageKey": null
                      },
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "dependencies",
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
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c0353c52b79705407e13ed287795f154",
    "id": null,
    "metadata": {},
    "name": "FormSpecCreateEntryPointQuery",
    "operationKind": "query",
    "text": "query FormSpecCreateEntryPointQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on FormSpec {\n      name\n      description\n      questionGroups {\n        id\n        question {\n          id\n          label\n          title\n          type\n          createdAt\n          extraData\n          rule\n          ...ResponseModeQuestionFragment\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment ResponseModeCheckboxQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  rule\n  dependencies\n  __typename\n}\n\nfragment ResponseModeDateQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  rule\n  dependencies\n}\n\nfragment ResponseModeDropdownQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  __typename\n}\n\nfragment ResponseModeFileQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  rule\n  dependencies\n  __typename\n}\n\nfragment ResponseModeLinearScaleQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  __typename\n}\n\nfragment ResponseModeMultiChoiceQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  __typename\n  rule\n  dependencies\n}\n\nfragment ResponseModeParagraphQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  __typename\n}\n\nfragment ResponseModeQuestionFragment on Question {\n  type\n  label\n  ...ResponseModeMultiChoiceQuestionFragment\n  ...ResponseModeCheckboxQuestionFragment\n  ...ResponseModeShortTextQuestionFragment\n  ...ResponseModeParagraphQuestionFragment\n  ...ResponseModeFileQuestionFragment\n  ...ResponseModeDropdownQuestionFragment\n  ...ResponseModeDateQuestionFragment\n  ...ResponseModeLinearScaleQuestionFragment\n}\n\nfragment ResponseModeShortTextQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  rule\n  dependencies\n}\n"
  }
};
})();

(node as any).hash = "0bd31defa88abcb54d12dfbc4ffc334b";

export default node;
