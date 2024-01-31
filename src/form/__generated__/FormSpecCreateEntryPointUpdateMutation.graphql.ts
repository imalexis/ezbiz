/**
 * @generated SignedSource<<5767d86b635d03e20882adbbaad153ee>>
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
export type FormSpecCreateEntryPointUpdateMutation$variables = {
  id: string;
  input: UpdateQuestionGroupInput;
};
export type FormSpecCreateEntryPointUpdateMutation$data = {
  readonly updateQuestionGroup: {
    readonly id: string;
  };
};
export type FormSpecCreateEntryPointUpdateMutation = {
  response: FormSpecCreateEntryPointUpdateMutation$data;
  variables: FormSpecCreateEntryPointUpdateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FormSpecCreateEntryPointUpdateMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "FormSpecCreateEntryPointUpdateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "68a14984ed691a81c9d4f938e614f263",
    "id": null,
    "metadata": {},
    "name": "FormSpecCreateEntryPointUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation FormSpecCreateEntryPointUpdateMutation(\n  $input: UpdateQuestionGroupInput!\n  $id: ID!\n) {\n  updateQuestionGroup(input: $input, id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "baf6df63bd64e8c7a7d671bd5af59d69";

export default node;
