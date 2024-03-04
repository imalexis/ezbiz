/**
 * @generated SignedSource<<38dfa8cf4b3d3041f68ae4061b7ae525>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateQuestionResponseInput = {
  clearFormInstance?: boolean | null | undefined;
  clearQuestion?: boolean | null | undefined;
  createdAt?: any | null | undefined;
  formInstanceID?: string | null | undefined;
  label?: string | null | undefined;
  questionID?: string | null | undefined;
  updatedAt?: any | null | undefined;
  value?: string | null | undefined;
};
export type ResponseModeLinearScaleQuestionUpdateMutation$variables = {
  id: string;
  input: UpdateQuestionResponseInput;
};
export type ResponseModeLinearScaleQuestionUpdateMutation$data = {
  readonly updateQuestionResponse: {
    readonly id: string;
  };
};
export type ResponseModeLinearScaleQuestionUpdateMutation = {
  response: ResponseModeLinearScaleQuestionUpdateMutation$data;
  variables: ResponseModeLinearScaleQuestionUpdateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "QuestionResponse",
    "kind": "LinkedField",
    "name": "updateQuestionResponse",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ResponseModeLinearScaleQuestionUpdateMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ResponseModeLinearScaleQuestionUpdateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "7fc8ec97e52902c5fc2a96734f25ad97",
    "id": null,
    "metadata": {},
    "name": "ResponseModeLinearScaleQuestionUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ResponseModeLinearScaleQuestionUpdateMutation(\n  $input: UpdateQuestionResponseInput!\n  $id: ID!\n) {\n  updateQuestionResponse(input: $input, id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "3e0b1df3b3633916e2d3cf9cd3f03917";

export default node;
