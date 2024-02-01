/**
 * @generated SignedSource<<d0c237e45dc497bf36d714e3756ddcb4>>
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
export type FormInstanceMutation$variables = {
  input: CreateFormInstanceInput;
};
export type FormInstanceMutation$data = {
  readonly createFormInstance: {
    readonly id: string;
  };
};
export type FormInstanceMutation = {
  response: FormInstanceMutation$data;
  variables: FormInstanceMutation$variables;
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
    "name": "FormInstanceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormInstanceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "43771603bbe72f4649dd8c1aa3697f5d",
    "id": null,
    "metadata": {},
    "name": "FormInstanceMutation",
    "operationKind": "mutation",
    "text": "mutation FormInstanceMutation(\n  $input: CreateFormInstanceInput!\n) {\n  createFormInstance(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "919327f16a49079baa91e983cf087cb5";

export default node;
