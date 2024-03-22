/**
 * @generated SignedSource<<266291472848e17258b1723a97bbc5ed>>
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
  dependencies?: string | null | undefined;
  extraData?: string | null | undefined;
  fromQuestionGroupID?: string | null | undefined;
  label: string;
  questionResponseIDs?: ReadonlyArray<string> | null | undefined;
  required: boolean;
  rule?: string | null | undefined;
  title?: string | null | undefined;
  type: QuestionType;
  updatedAt?: any | null | undefined;
};
export type FormSpecCreateEntryPointMutation$variables = {
  input: CreateQuestionInput;
};
export type FormSpecCreateEntryPointMutation$data = {
  readonly createQuestion: {
    readonly id: string;
    readonly label: string;
    readonly title: string;
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
        "name": "id",
        "storageKey": null
      },
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
        "name": "label",
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
    "cacheID": "38c5fe9448454371c1566f701434781c",
    "id": null,
    "metadata": {},
    "name": "FormSpecCreateEntryPointMutation",
    "operationKind": "mutation",
    "text": "mutation FormSpecCreateEntryPointMutation(\n  $input: CreateQuestionInput!\n) {\n  createQuestion(input: $input) {\n    id\n    title\n    label\n  }\n}\n"
  }
};
})();

(node as any).hash = "35e3a0290c349c519c0ced3d3d1818b0";

export default node;
