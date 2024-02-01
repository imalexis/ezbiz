/**
 * @generated SignedSource<<35cce9b72b14a5a7a20691b4519a6c78>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FormInstanceStatus = "pending" | "submiited" | "%future added value";
export type CreateFormInstanceInput = {
  formSpecID?: string | null | undefined;
  questionResponseIDs?: ReadonlyArray<string> | null | undefined;
  status?: FormInstanceStatus | null | undefined;
  usersID?: string | null | undefined;
};
export type FormSpecCardMutation$variables = {
  input: CreateFormInstanceInput;
};
export type FormSpecCardMutation$data = {
  readonly createFormInstance: {
    readonly id: string;
  };
};
export type FormSpecCardMutation = {
  response: FormSpecCardMutation$data;
  variables: FormSpecCardMutation$variables;
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
    "concreteType": "FormInstance",
    "kind": "LinkedField",
    "name": "createFormInstance",
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
    "name": "FormSpecCardMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormSpecCardMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "169b8440f05f8813be0244af2232ec72",
    "id": null,
    "metadata": {},
    "name": "FormSpecCardMutation",
    "operationKind": "mutation",
    "text": "mutation FormSpecCardMutation(\n  $input: CreateFormInstanceInput!\n) {\n  createFormInstance(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d205d851ade72a2e726fa94b6935c116";

export default node;
