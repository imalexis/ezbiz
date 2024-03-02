/**
 * @generated SignedSource<<b8ff9c41f4f4f7a31cbcc21c413235d2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FileQuestionUploadFileMutation$variables = {
  file: any;
};
export type FileQuestionUploadFileMutation$data = {
  readonly singleUpload: {
    readonly name: string;
  };
};
export type FileQuestionUploadFileMutation = {
  response: FileQuestionUploadFileMutation$data;
  variables: FileQuestionUploadFileMutation$variables;
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
    "name": "FileQuestionUploadFileMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FileQuestionUploadFileMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a6f41acb309605e8fd452fd3fb363fc4",
    "id": null,
    "metadata": {},
    "name": "FileQuestionUploadFileMutation",
    "operationKind": "mutation",
    "text": "mutation FileQuestionUploadFileMutation(\n  $file: Upload!\n) {\n  singleUpload(file: $file) {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "cfa6738b41f740990f8cd22e0c7214d6";

export default node;
