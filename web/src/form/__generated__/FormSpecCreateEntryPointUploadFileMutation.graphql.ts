/**
 * @generated SignedSource<<7c95beb4e699b5bc40e1f328cc04a6e3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FormSpecCreateEntryPointUploadFileMutation$variables = {
  file: any;
};
export type FormSpecCreateEntryPointUploadFileMutation$data = {
  readonly singleUpload: {
    readonly name: string;
  };
};
export type FormSpecCreateEntryPointUploadFileMutation = {
  response: FormSpecCreateEntryPointUploadFileMutation$data;
  variables: FormSpecCreateEntryPointUploadFileMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "file"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "file",
        "variableName": "file"
      }
    ],
    "concreteType": "File",
    "kind": "LinkedField",
    "name": "singleUpload",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
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
    "name": "FormSpecCreateEntryPointUploadFileMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormSpecCreateEntryPointUploadFileMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bfc0c833cc6dcb476b9f7dfb38be2155",
    "id": null,
    "metadata": {},
    "name": "FormSpecCreateEntryPointUploadFileMutation",
    "operationKind": "mutation",
    "text": "mutation FormSpecCreateEntryPointUploadFileMutation(\n  $file: Upload!\n) {\n  singleUpload(file: $file) {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "79f1248d9022fff1cd12341a0351c3a6";

export default node;
