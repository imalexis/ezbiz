/**
 * @generated SignedSource<<bba432f4837cdde1f1b71e3401651536>>
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
export type ResponseModeDateQuestionUpdateMutation$variables = {
  id: string;
  input: UpdateQuestionResponseInput;
};
export type ResponseModeDateQuestionUpdateMutation$data = {
  readonly updateQuestionResponse: {
    readonly id: string;
  };
};
export type ResponseModeDateQuestionUpdateMutation = {
  response: ResponseModeDateQuestionUpdateMutation$data;
  variables: ResponseModeDateQuestionUpdateMutation$variables;
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
    "name": "ResponseModeDateQuestionUpdateMutation",
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
    "name": "ResponseModeDateQuestionUpdateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "29532e6a16e2f4ad0c478b94a326d12d",
    "id": null,
    "metadata": {},
    "name": "ResponseModeDateQuestionUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ResponseModeDateQuestionUpdateMutation(\n  $input: UpdateQuestionResponseInput!\n  $id: ID!\n) {\n  updateQuestionResponse(input: $input, id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6b599fb309a2e7a0cccb665d0d3ca57d";

export default node;
