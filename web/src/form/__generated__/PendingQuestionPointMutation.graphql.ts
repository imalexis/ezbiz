/**
 * @generated SignedSource<<9e8bff90d821c5009abb3b5bb43e3314>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type QuestionType = "checkboxes" | "date" | "drop_down" | "file" | "linear_scale" | "multi_choice" | "paragraph" | "short_text" | "time" | "%future added value";
export type CreateQuestionInput = {
  createdAt?: any | null | undefined;
  createdBy: number;
  extraData?: string | null | undefined;
  fromQuestionGroupID?: string | null | undefined;
  label: string;
  questionResponseIDs?: ReadonlyArray<string> | null | undefined;
  required: boolean;
  title?: string | null | undefined;
  type: QuestionType;
  updatedAt?: any | null | undefined;
};
export type PendingQuestionPointMutation$variables = {
  input: CreateQuestionInput;
};
export type PendingQuestionPointMutation$data = {
  readonly createQuestion: {
    readonly __typename: "Question";
    readonly id: string;
  };
};
export type PendingQuestionPointMutation = {
  response: PendingQuestionPointMutation$data;
  variables: PendingQuestionPointMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Question",
    "kind": "LinkedField",
    "name": "createQuestion",
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PendingQuestionPointMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PendingQuestionPointMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a83130f8487fc0c7967bc60349cd9b61",
    "id": null,
    "metadata": {},
    "name": "PendingQuestionPointMutation",
    "operationKind": "mutation",
    "text": "mutation PendingQuestionPointMutation(\n  $input: CreateQuestionInput!\n) {\n  createQuestion(input: $input) {\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "0a8911405c1d8bac69c2161751b5a612";

export default node;
