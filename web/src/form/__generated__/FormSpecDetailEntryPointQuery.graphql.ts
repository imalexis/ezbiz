/**
 * @generated SignedSource<<b4bfa482fbf97b31bd891646afcbbf62>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FormSpecDetailEntryPointQuery$variables = {
  id: string;
};
export type FormSpecDetailEntryPointQuery$data = {
  readonly node: {
    readonly cover?: string | null | undefined;
    readonly description?: string;
    readonly id?: string;
    readonly name?: string;
    readonly questionGroups?: ReadonlyArray<{
      readonly name: string;
      readonly " $fragmentSpreads": FragmentRefs<"QuestionGroupFragment">;
    }> | null | undefined;
  } | null | undefined;
};
export type FormSpecDetailEntryPointQuery = {
  response: FormSpecDetailEntryPointQuery$data;
  variables: FormSpecDetailEntryPointQuery$variables;
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
    "name": "FormSpecDetailEntryPointQuery",
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
    "name": "FormSpecDetailEntryPointQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v6/*: any*/),
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
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "rule",
                        "storageKey": null
                      },
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d976c5c48d42474f5d7a9b09a30b93a9",
    "id": null,
    "metadata": {},
    "name": "FormSpecDetailEntryPointQuery",
    "operationKind": "query",
    "text": "query FormSpecDetailEntryPointQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on FormSpec {\n      id\n      name\n      cover\n      description\n      questionGroups {\n        name\n        ...QuestionGroupFragment\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment QuestionGroupFragment on QuestionGroup {\n  id\n  name\n  question {\n    ...ResponseModeQuestionFragment\n    id\n  }\n}\n\nfragment ResponseModeCheckboxQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  __typename\n}\n\nfragment ResponseModeDateQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n}\n\nfragment ResponseModeDropdownQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  __typename\n}\n\nfragment ResponseModeFileQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  __typename\n}\n\nfragment ResponseModeLinearScaleQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  __typename\n}\n\nfragment ResponseModeMultiChoiceQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  __typename\n  rule\n  dependencies\n}\n\nfragment ResponseModeParagraphQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  __typename\n}\n\nfragment ResponseModeQuestionFragment on Question {\n  type\n  label\n  ...ResponseModeMultiChoiceQuestionFragment\n  ...ResponseModeCheckboxQuestionFragment\n  ...ResponseModeShortTextQuestionFragment\n  ...ResponseModeParagraphQuestionFragment\n  ...ResponseModeFileQuestionFragment\n  ...ResponseModeDropdownQuestionFragment\n  ...ResponseModeDateQuestionFragment\n  ...ResponseModeLinearScaleQuestionFragment\n}\n\nfragment ResponseModeShortTextQuestionFragment on Question {\n  id\n  label\n  title\n  type\n  required\n  extraData\n  rule\n  dependencies\n}\n"
  }
};
})();

(node as any).hash = "af1d9fe2497f15ae272adce663b5ea43";

export default node;
