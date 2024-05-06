/**
 * @generated SignedSource<<652eb599f91a754907e4ffa93dcf36df>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FormSpecOrderField = "CREATED_AT" | "UPDATED_AT" | "%future added value";
export type OrderDirection = "ASC" | "DESC" | "%future added value";
export type FormSpecOrder = {
  direction: OrderDirection;
  field: FormSpecOrderField;
};
export type FormSpecListQuery$variables = {
  after?: any | null | undefined;
  first: number;
  orderBy: FormSpecOrder;
};
export type FormSpecListQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"FormSpecPaginatedListFragment" | "FormSpecPaginatedTableFragment">;
};
export type FormSpecListQuery = {
  response: FormSpecListQuery$data;
  variables: FormSpecListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "orderBy"
},
v3 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "orderBy",
    "variableName": "orderBy"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  "orderBy"
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FormSpecListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "FormSpecPaginatedListFragment"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "FormSpecPaginatedTableFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "FormSpecListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "FormSpecConnection",
        "kind": "LinkedField",
        "name": "formSpecs",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "FormSpecEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FormSpec",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ClientExtension",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__id",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "filters": (v5/*: any*/),
        "handle": "connection",
        "key": "FormSpecPaginatedListQuery_formSpecs",
        "kind": "LinkedHandle",
        "name": "formSpecs"
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "filters": (v5/*: any*/),
        "handle": "connection",
        "key": "FormSpecPaginatedTableFragmentQuery_formSpecs",
        "kind": "LinkedHandle",
        "name": "formSpecs"
      }
    ]
  },
  "params": {
    "cacheID": "19a6599ed597b7607a1fe7dde937177d",
    "id": null,
    "metadata": {},
    "name": "FormSpecListQuery",
    "operationKind": "query",
    "text": "query FormSpecListQuery(\n  $first: Int!\n  $after: Cursor\n  $orderBy: FormSpecOrder!\n) {\n  ...FormSpecPaginatedListFragment\n  ...FormSpecPaginatedTableFragment\n}\n\nfragment FormSpecCardFragment on FormSpec {\n  id\n  name\n  cover\n  description\n  enabled\n  createdAt\n  updatedAt\n  createdBy\n  questionGroups {\n    id\n    question {\n      id\n      label\n      type\n    }\n  }\n}\n\nfragment FormSpecPaginatedListFragment on Query {\n  formSpecs(first: $first, after: $after, orderBy: $orderBy) {\n    totalCount\n    edges {\n      node {\n        id\n        ...FormSpecCardFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment FormSpecPaginatedTableFragment on Query {\n  formSpecs(first: $first, after: $after, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        name\n        createdAt\n        ...FormSpecCardFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fa8808c3880d79a97a2408bb5b766d54";

export default node;
