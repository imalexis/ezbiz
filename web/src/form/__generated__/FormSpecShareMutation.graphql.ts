/**
 * @generated SignedSource<<c96c26be5af7ec62087326254b457f10>>
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
export type FormSpecShareMutation$variables = {
  input: CreateFormInstanceInput;
};
export type FormSpecShareMutation$data = {
  readonly createFormInstance: {
    readonly id: string;
  };
};
export type FormSpecShareMutation = {
  response: FormSpecShareMutation$data;
  variables: FormSpecShareMutation$variables;
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
    "name": "FormSpecShareMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormSpecShareMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "33c17c4a8282df4cbaab9c8e8094f081",
    "id": null,
    "metadata": {},
    "name": "FormSpecShareMutation",
    "operationKind": "mutation",
    "text": "mutation FormSpecShareMutation(\n  $input: CreateFormInstanceInput!\n) {\n  createFormInstance(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "55934263b10b257045938e7bded277c7";

export default node;
