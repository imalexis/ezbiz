/**
 * @generated SignedSource<<c193094e4ac0f4332dd61bb2bc44f40d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FormSpecCardDeleteMutation$variables = {
  id: string;
};
export type FormSpecCardDeleteMutation$data = {
  readonly deleteFormSpec: {
    readonly __typename: "FormSpec";
  };
};
export type FormSpecCardDeleteMutation = {
  response: FormSpecCardDeleteMutation$data;
  variables: FormSpecCardDeleteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormSpecCardDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FormSpec",
        "kind": "LinkedField",
        "name": "deleteFormSpec",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormSpecCardDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FormSpec",
        "kind": "LinkedField",
        "name": "deleteFormSpec",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "d8afcd233b04c726081e669e795a0b53",
    "id": null,
    "metadata": {},
    "name": "FormSpecCardDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation FormSpecCardDeleteMutation(\n  $id: ID!\n) {\n  deleteFormSpec(id: $id) {\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "f0f168f722fc5372e5644aa4bb7546af";

export default node;
