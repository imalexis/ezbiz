/**
 * @generated SignedSource<<eb327cff610a07fbe2ce512be65967ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateFormSpecInput = {
  cover?: string | null | undefined;
  createdAt?: any | null | undefined;
  createdBy: number;
  description?: string | null | undefined;
  enabled?: boolean | null | undefined;
  formInstanceIDs?: ReadonlyArray<string> | null | undefined;
  name?: string | null | undefined;
  ownerID?: string | null | undefined;
  questionGroupIDs?: ReadonlyArray<string> | null | undefined;
  updatedAt?: any | null | undefined;
};
export type CreateQuestionGroupInput = {
  createdAt?: any | null | undefined;
  createdBy: number;
  formSpecID?: string | null | undefined;
  name: string;
  questionIDs?: ReadonlyArray<string> | null | undefined;
  updatedAt?: any | null | undefined;
};
export type FormTemplateCreateCardMutation$variables = {
  input: CreateFormSpecInput;
  input2: CreateQuestionGroupInput;
};
export type FormTemplateCreateCardMutation$data = {
  readonly createFormSpec: {
    readonly id: string;
  };
  readonly createQuestionGroup: {
    readonly id: string;
  };
};
export type FormTemplateCreateCardMutation = {
  response: FormTemplateCreateCardMutation$data;
  variables: FormTemplateCreateCardMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input2"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
],
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "FormSpec",
    "kind": "LinkedField",
    "name": "createFormSpec",
    "plural": false,
    "selections": (v1/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input2"
      }
    ],
    "concreteType": "QuestionGroup",
    "kind": "LinkedField",
    "name": "createQuestionGroup",
    "plural": false,
    "selections": (v1/*: any*/),
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormTemplateCreateCardMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormTemplateCreateCardMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "685abb735972c67d1e7065f0d8a4d3d7",
    "id": null,
    "metadata": {},
    "name": "FormTemplateCreateCardMutation",
    "operationKind": "mutation",
    "text": "mutation FormTemplateCreateCardMutation(\n  $input: CreateFormSpecInput!\n  $input2: CreateQuestionGroupInput!\n) {\n  createFormSpec(input: $input) {\n    id\n  }\n  createQuestionGroup(input: $input2) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "536010699253dd2ead1a403e7b2c1ac8";

export default node;
