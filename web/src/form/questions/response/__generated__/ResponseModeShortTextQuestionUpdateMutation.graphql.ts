/**
 * @generated SignedSource<<39e2f5775ef97ade198ab78036631920>>
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
export type ResponseModeShortTextQuestionUpdateMutation$variables = {
  id: string;
  input: UpdateQuestionResponseInput;
};
export type ResponseModeShortTextQuestionUpdateMutation$data = {
  readonly updateQuestionResponse: {
    readonly id: string;
  };
};
export type ResponseModeShortTextQuestionUpdateMutation = {
  response: ResponseModeShortTextQuestionUpdateMutation$data;
  variables: ResponseModeShortTextQuestionUpdateMutation$variables;
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
    "name": "ResponseModeShortTextQuestionUpdateMutation",
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
    "name": "ResponseModeShortTextQuestionUpdateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "5632d632f2123f7b9f497491933ce185",
    "id": null,
    "metadata": {},
    "name": "ResponseModeShortTextQuestionUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ResponseModeShortTextQuestionUpdateMutation(\n  $input: UpdateQuestionResponseInput!\n  $id: ID!\n) {\n  updateQuestionResponse(input: $input, id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "8c27799d48c8e94e0b6c812631008825";

export default node;
