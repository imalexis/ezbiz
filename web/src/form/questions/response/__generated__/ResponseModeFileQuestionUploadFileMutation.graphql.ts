/**
 * @generated SignedSource<<9a9d688c8eba673f971b74e08e24fae5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ResponseModeFileQuestionUploadFileMutation$variables = {
  file: any;
};
export type ResponseModeFileQuestionUploadFileMutation$data = {
  readonly singleUpload: {
    readonly name: string;
  };
};
export type ResponseModeFileQuestionUploadFileMutation = {
  response: ResponseModeFileQuestionUploadFileMutation$data;
  variables: ResponseModeFileQuestionUploadFileMutation$variables;
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
    "name": "ResponseModeFileQuestionUploadFileMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ResponseModeFileQuestionUploadFileMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9594cfeb9fb5060d104b77db6ec2dba0",
    "id": null,
    "metadata": {},
    "name": "ResponseModeFileQuestionUploadFileMutation",
    "operationKind": "mutation",
    "text": "mutation ResponseModeFileQuestionUploadFileMutation(\n  $file: Upload!\n) {\n  singleUpload(file: $file) {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "667c4afb2c45e7cba864c4bc6aba760e";

export default node;
