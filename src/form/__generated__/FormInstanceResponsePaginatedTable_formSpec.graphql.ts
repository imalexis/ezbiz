/**
 * @generated SignedSource<<3f00989bb932e00679e6b487af2f66a8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FormInstanceResponsePaginatedTable_formSpec$data = {
  readonly formInstances: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly formSpec: {
          readonly id: string;
        } | null | undefined;
        readonly id: string;
        readonly questionResponse: ReadonlyArray<{
          readonly id: string;
          readonly label: string;
          readonly question: {
            readonly label: string;
          } | null | undefined;
          readonly value: string;
        }> | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
  readonly " $fragmentType": "FormInstanceResponsePaginatedTable_formSpec";
};
export type FormInstanceResponsePaginatedTable_formSpec$key = {
  readonly " $data"?: FormInstanceResponsePaginatedTable_formSpec$data;
  readonly " $fragmentSpreads": FragmentRefs<"FormInstanceResponsePaginatedTable_formSpec">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "formInstances"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "after"
    },
    {
      "kind": "RootArgument",
      "name": "first"
    },
    {
      "kind": "RootArgument",
      "name": "where"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./FormInstancePaginatedTableFragmentQuery.graphql')
    }
  },
  "name": "FormInstanceResponsePaginatedTable_formSpec",
  "selections": [
    {
      "alias": "formInstances",
      "args": [
        {
          "kind": "Variable",
          "name": "where",
          "variableName": "where"
        }
      ],
      "concreteType": "FormInstanceConnection",
      "kind": "LinkedField",
      "name": "__FormInstanceResponsePaginatedTabletQuery_formInstances_connection",
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
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "FormSpec",
                  "kind": "LinkedField",
                  "name": "formSpec",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/)
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "QuestionResponse",
                  "kind": "LinkedField",
                  "name": "questionResponse",
                  "plural": true,
                  "selections": [
                    (v1/*: any*/),
                    (v2/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "value",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "Question",
                      "kind": "LinkedField",
                      "name": "question",
                      "plural": false,
                      "selections": [
                        (v2/*: any*/)
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "daf5f4892526c1e15380b7718a9c4020";

export default node;
