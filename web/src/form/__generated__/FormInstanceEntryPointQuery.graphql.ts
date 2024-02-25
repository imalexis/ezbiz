/**
 * @generated SignedSource<<cc7758ab69b11ebd202569e8c5d648f1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FormInstanceStatus = "pending" | "submiited" | "%future added value";
export type FormInstanceEntryPointQuery$variables = {
  id: string;
  instanceID: string;
};
export type FormInstanceEntryPointQuery$data = {
  readonly node: {
    readonly cover?: string | null | undefined;
    readonly description?: string;
    readonly formInstances?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly status: FormInstanceStatus;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    };
    readonly id?: string;
    readonly name?: string;
    readonly questionGroups?: ReadonlyArray<{
      readonly name: string;
      readonly " $fragmentSpreads": FragmentRefs<"QuestionGroupFragment">;
    }> | null | undefined;
  } | null | undefined;
};
export type FormInstanceEntryPointQuery = {
  response: FormInstanceEntryPointQuery$data;
  variables: FormInstanceEntryPointQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "instanceID"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cover",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": [
    {
      "fields": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "instanceID"
        }
      ],
      "kind": "ObjectValue",
      "name": "where"
    }
  ],
  "concreteType": "FormInstanceConnection",
  "kind": "LinkedField",
  "name": "formInstances",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "FormInstanceEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "FormInstance",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "status",
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
},
v7 = {
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
    "name": "FormInstanceEntryPointQuery",
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
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "QuestionGroup",
                "kind": "LinkedField",
                "name": "questionGroups",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "QuestionGroupFragment"
                  }
                ],
                "storageKey": null
              },
              (v6/*: any*/)
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
    "name": "FormInstanceEntryPointQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "QuestionGroup",
                "kind": "LinkedField",
                "name": "questionGroups",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "question",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "type",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "label",
                        "storageKey": null
                      },
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "required",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "extraData",
                        "storageKey": null
                      },
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "type": "FormSpec",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a3010730235e860b49777a33ae072dc5",
    "id": null,
    "metadata": {},
    "name": "FormInstanceEntryPointQuery",
    "operationKind": "query",
    "text": "query FormInstanceEntryPointQuery(\n  $id: ID!\n  $instanceID: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on FormSpec {\n      id\n      name\n      cover\n      description\n      questionGroups {\n        name\n        ...QuestionGroupFragment\n        id\n      }\n      formInstances(where: {id: $instanceID}) {\n        edges {\n          node {\n            id\n            status\n          }\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment CheckboxQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  __typename\n}\n\nfragment DropdownQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  __typename\n}\n\nfragment FileQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  __typename\n}\n\nfragment MultiChoiceQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  __typename\n}\n\nfragment ParagraphQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  __typename\n}\n\nfragment QuestionFragment on Question {\n  type\n  label\n  ...MultiChoiceQuestionFragment\n  ...CheckboxQuestionFragment\n  ...ShortTextQuestionFragment\n  ...ParagraphQuestionFragment\n  ...FileQuestionFragment\n  ...DropdownQuestionFragment\n}\n\nfragment QuestionGroupFragment on QuestionGroup {\n  id\n  name\n  question {\n    ...QuestionFragment\n    id\n  }\n}\n\nfragment ShortTextQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n}\n"
  }
};
})();

(node as any).hash = "4e2bd558d5dc022e74e9f43addd7c934";

export default node;
