/**
 * @generated SignedSource<<fc544dfe712838aa8be7959e7676dd0e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateQuestionResponseInput = {
  createdAt?: any | null | undefined;
  formInstanceID?: string | null | undefined;
  label: string;
  questionID?: string | null | undefined;
  updatedAt?: any | null | undefined;
  value: string;
};
export type QuestionMutation$variables = {
  input: CreateQuestionResponseInput;
};
export type QuestionMutation$data = {
  readonly createQuestionResponse: {
    readonly id: string;
  };
};
export type QuestionMutation = {
  response: QuestionMutation$data;
  variables: QuestionMutation$variables;
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
    "concreteType": "QuestionResponse",
    "kind": "LinkedField",
    "name": "createQuestionResponse",
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
    "name": "QuestionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "QuestionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "82480a72dafc62e35cc8e37cd3f551dc",
    "id": null,
    "metadata": {},
    "name": "QuestionMutation",
    "operationKind": "mutation",
    "text": "mutation QuestionMutation(\n  $input: CreateQuestionResponseInput!\n) {\n  createQuestionResponse(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "dbb2383c18d8eacb8bb3d41dc48b174f";

export default node;
