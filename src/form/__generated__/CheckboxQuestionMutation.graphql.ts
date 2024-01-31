/**
 * @generated SignedSource<<2f24fb11db721d616da400cd80dc3fb1>>
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
export type CheckboxQuestionMutation$variables = {
  input: CreateQuestionResponseInput;
};
export type CheckboxQuestionMutation$data = {
  readonly createQuestionResponse: {
    readonly id: string;
  };
};
export type CheckboxQuestionMutation = {
  response: CheckboxQuestionMutation$data;
  variables: CheckboxQuestionMutation$variables;
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
    "name": "CheckboxQuestionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CheckboxQuestionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "25387309aa7961ed1fc981fc8afb9428",
    "id": null,
    "metadata": {},
    "name": "CheckboxQuestionMutation",
    "operationKind": "mutation",
    "text": "mutation CheckboxQuestionMutation(\n  $input: CreateQuestionResponseInput!\n) {\n  createQuestionResponse(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "5cfef82cfa9ef58b78fd03bbd5fb044a";

export default node;
