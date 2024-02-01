/**
 * @generated SignedSource<<f0b75e622f908108fd1af9f62534fcf7>>
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
  fromQuestionGroupID?: string | null | undefined;
  label: string;
  required: boolean;
  title?: string | null | undefined;
  type: QuestionType;
  updatedAt?: any | null | undefined;
};
export type FormSpecCreateEntryPointMutation$variables = {
  input: CreateQuestionInput;
};
export type FormSpecCreateEntryPointMutation$data = {
  readonly createQuestion: {
    readonly __typename: "Question";
    readonly id: string;
  };
};
export type FormSpecCreateEntryPointMutation = {
  response: FormSpecCreateEntryPointMutation$data;
  variables: FormSpecCreateEntryPointMutation$variables;
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
    "name": "FormSpecCreateEntryPointMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormSpecCreateEntryPointMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "91d7c4562f90548b4f59c7bb8b52d8d4",
    "id": null,
    "metadata": {},
    "name": "FormSpecCreateEntryPointMutation",
    "operationKind": "mutation",
    "text": "mutation FormSpecCreateEntryPointMutation(\n  $input: CreateQuestionInput!\n) {\n  createQuestion(input: $input) {\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "90db8ba5ce16d4e2b0caff16a9680602";

export default node;
