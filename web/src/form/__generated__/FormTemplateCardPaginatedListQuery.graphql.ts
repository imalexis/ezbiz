/**
 * @generated SignedSource<<5082be61337f14435deae21e75f0a01b>>
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
export type FormTemplateCardPaginatedListQuery$variables = {
  after?: any | null | undefined;
  first?: number | null | undefined;
  orderBy?: FormSpecOrder | null | undefined;
};
export type FormTemplateCardPaginatedListQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"FormTemplateCardListFragment">;
};
export type FormTemplateCardPaginatedListQuery = {
  response: FormTemplateCardPaginatedListQuery$data;
  variables: FormTemplateCardPaginatedListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy"
  }
],
v1 = [
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
v2 = {
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
    "name": "FormTemplateCardPaginatedListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "FormTemplateCardListFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormTemplateCardPaginatedListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
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
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Question",
                        "kind": "LinkedField",
                        "name": "question",
                        "plural": true,
                        "selections": [
                          (v2/*: any*/),
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
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [
          "orderBy"
        ],
        "handle": "connection",
        "key": "FormTemplateCardPaginatedListQuery_formSpecs",
        "kind": "LinkedHandle",
        "name": "formSpecs"
      }
    ]
  },
  "params": {
    "cacheID": "629a98966ea953117b9307661d209488",
    "id": null,
    "metadata": {},
    "name": "FormTemplateCardPaginatedListQuery",
    "operationKind": "query",
    "text": "query FormTemplateCardPaginatedListQuery(\n  $after: Cursor\n  $first: Int\n  $orderBy: FormSpecOrder\n) {\n  ...FormTemplateCardListFragment\n}\n\nfragment FormTemplateCardListFragment on Query {\n  formSpecs(first: $first, after: $after, orderBy: $orderBy) {\n    totalCount\n    edges {\n      node {\n        id\n        name\n        cover\n        description\n        enabled\n        createdAt\n        updatedAt\n        createdBy\n        questionGroups {\n          id\n          question {\n            id\n            label\n            type\n          }\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "eee12054a335e9788ccd175c8e6749a1";

export default node;
