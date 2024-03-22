/**
 * @generated SignedSource<<b666d142ae335c924a0f4db9bbe75cdb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type QuestionType = "checkboxes" | "date" | "drop_down" | "file" | "linear_scale" | "multi_choice" | "paragraph" | "short_text" | "time" | "%future added value";
export type UpdateQuestionInput = {
  addQuestionResponseIDs?: ReadonlyArray<string> | null | undefined;
  clearFromQuestionGroup?: boolean | null | undefined;
  clearQuestionResponse?: boolean | null | undefined;
  createdAt?: any | null | undefined;
  createdBy?: number | null | undefined;
  dependencies?: string | null | undefined;
  extraData?: string | null | undefined;
  fromQuestionGroupID?: string | null | undefined;
  label?: string | null | undefined;
  removeQuestionResponseIDs?: ReadonlyArray<string> | null | undefined;
  required?: boolean | null | undefined;
  rule?: string | null | undefined;
  title?: string | null | undefined;
  type?: QuestionType | null | undefined;
  updatedAt?: any | null | undefined;
};
export type FormSpecCreateEntryPointUpdateQuestionMutation$variables = {
  id: string;
  input: UpdateQuestionInput;
};
export type FormSpecCreateEntryPointUpdateQuestionMutation$data = {
  readonly updateQuestion: {
    readonly id: string;
  };
};
export type FormSpecCreateEntryPointUpdateQuestionMutation = {
  response: FormSpecCreateEntryPointUpdateQuestionMutation$data;
  variables: FormSpecCreateEntryPointUpdateQuestionMutation$variables;
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
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Question",
    "kind": "LinkedField",
    "name": "updateQuestion",
    "plural": false,
    "selections": [
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
    "name": "FormSpecCreateEntryPointUpdateQuestionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormSpecCreateEntryPointUpdateQuestionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8669aa33336e1d57607ab2815361bd97",
    "id": null,
    "metadata": {},
    "name": "FormSpecCreateEntryPointUpdateQuestionMutation",
    "operationKind": "mutation",
    "text": "mutation FormSpecCreateEntryPointUpdateQuestionMutation(\n  $id: ID!\n  $input: UpdateQuestionInput!\n) {\n  updateQuestion(id: $id, input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "125301923c75982db47df89aee6825d2";

export default node;
