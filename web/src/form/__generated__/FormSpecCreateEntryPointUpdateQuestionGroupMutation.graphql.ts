/**
 * @generated SignedSource<<3bcd89f630b79ca4976c9ddb9de3cd84>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateQuestionGroupInput = {
  addQuestionIDs?: ReadonlyArray<string> | null | undefined;
  clearFormSpec?: boolean | null | undefined;
  clearQuestion?: boolean | null | undefined;
  createdAt?: any | null | undefined;
  createdBy?: number | null | undefined;
  formSpecID?: string | null | undefined;
  name?: string | null | undefined;
  removeQuestionIDs?: ReadonlyArray<string> | null | undefined;
  updatedAt?: any | null | undefined;
};
export type FormSpecCreateEntryPointUpdateQuestionGroupMutation$variables = {
  id: string;
  input: UpdateQuestionGroupInput;
};
export type FormSpecCreateEntryPointUpdateQuestionGroupMutation$data = {
  readonly updateQuestionGroup: {
    readonly id: string;
  };
};
export type FormSpecCreateEntryPointUpdateQuestionGroupMutation = {
  response: FormSpecCreateEntryPointUpdateQuestionGroupMutation$data;
  variables: FormSpecCreateEntryPointUpdateQuestionGroupMutation$variables;
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
    "concreteType": "QuestionGroup",
    "kind": "LinkedField",
    "name": "updateQuestionGroup",
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
    "name": "FormSpecCreateEntryPointUpdateQuestionGroupMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormSpecCreateEntryPointUpdateQuestionGroupMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a4124992b56f2588d801a5bc669c0c69",
    "id": null,
    "metadata": {},
    "name": "FormSpecCreateEntryPointUpdateQuestionGroupMutation",
    "operationKind": "mutation",
    "text": "mutation FormSpecCreateEntryPointUpdateQuestionGroupMutation(\n  $id: ID!\n  $input: UpdateQuestionGroupInput!\n) {\n  updateQuestionGroup(id: $id, input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "bb77483dffab7d4dd2bc2668881cb152";

export default node;
