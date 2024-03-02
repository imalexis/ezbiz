/**
 * @generated SignedSource<<e3a0e5926405998e9ffe8277e2c56ad4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateQuestionResponseInput = {
  clearFormInstance?: boolean | null | undefined;
  clearQuestion?: boolean | null | undefined;
  createdAt?: any | null | undefined;
  formInstanceID?: string | null | undefined;
  label?: string | null | undefined;
  questionID?: string | null | undefined;
  updatedAt?: any | null | undefined;
  value?: string | null | undefined;
};
export type FileQuestionUpdateMutation$variables = {
  id: string;
  input: UpdateQuestionResponseInput;
};
export type FileQuestionUpdateMutation$data = {
  readonly updateQuestionResponse: {
    readonly id: string;
  };
};
export type FileQuestionUpdateMutation = {
  response: FileQuestionUpdateMutation$data;
  variables: FileQuestionUpdateMutation$variables;
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
    "concreteType": "QuestionResponse",
    "kind": "LinkedField",
    "name": "updateQuestionResponse",
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
    "name": "FileQuestionUpdateMutation",
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
    "name": "FileQuestionUpdateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "712b8f765fc16a264bf8a8d8b6e3f97f",
    "id": null,
    "metadata": {},
    "name": "FileQuestionUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation FileQuestionUpdateMutation(\n  $input: UpdateQuestionResponseInput!\n  $id: ID!\n) {\n  updateQuestionResponse(input: $input, id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b007508a83ab46605302418d15609b81";

export default node;
