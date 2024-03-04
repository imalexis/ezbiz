/**
 * @generated SignedSource<<e3adcfbea12ffb90e96b033b5f30feb6>>
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
export type ResponseModeMultiChoiceQuestionUpdateMutation$variables = {
  id: string;
  input: UpdateQuestionResponseInput;
};
export type ResponseModeMultiChoiceQuestionUpdateMutation$data = {
  readonly updateQuestionResponse: {
    readonly id: string;
  };
};
export type ResponseModeMultiChoiceQuestionUpdateMutation = {
  response: ResponseModeMultiChoiceQuestionUpdateMutation$data;
  variables: ResponseModeMultiChoiceQuestionUpdateMutation$variables;
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
    "name": "ResponseModeMultiChoiceQuestionUpdateMutation",
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
    "name": "ResponseModeMultiChoiceQuestionUpdateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "04d00683f7f54e7162560be48d8414c6",
    "id": null,
    "metadata": {},
    "name": "ResponseModeMultiChoiceQuestionUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ResponseModeMultiChoiceQuestionUpdateMutation(\n  $input: UpdateQuestionResponseInput!\n  $id: ID!\n) {\n  updateQuestionResponse(input: $input, id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1ec4cea9bfb41a15167d977677ce3bc6";

export default node;
