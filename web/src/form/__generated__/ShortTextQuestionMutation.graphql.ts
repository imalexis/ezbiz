/**
 * @generated SignedSource<<40bdabbc218ecab903340ab4bd1a3220>>
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
export type ShortTextQuestionMutation$variables = {
  input: CreateQuestionResponseInput;
};
export type ShortTextQuestionMutation$data = {
  readonly createQuestionResponse: {
    readonly id: string;
  };
};
export type ShortTextQuestionMutation = {
  response: ShortTextQuestionMutation$data;
  variables: ShortTextQuestionMutation$variables;
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
    "name": "ShortTextQuestionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShortTextQuestionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9a3851658a943f7183e99f9c99f78611",
    "id": null,
    "metadata": {},
    "name": "ShortTextQuestionMutation",
    "operationKind": "mutation",
    "text": "mutation ShortTextQuestionMutation(\n  $input: CreateQuestionResponseInput!\n) {\n  createQuestionResponse(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "f6293c1822259851b3c4e404cf39742c";

export default node;
