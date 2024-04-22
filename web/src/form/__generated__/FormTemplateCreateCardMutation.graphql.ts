/**
 * @generated SignedSource<<bcbcd26b51997e95277924c22945d833>>
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
  isTemplate?: boolean | null | undefined;
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
  createFormSpecInput: CreateFormSpecInput;
  createQuestionGroupInput: CreateQuestionGroupInput;
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
    "name": "createFormSpecInput"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "createQuestionGroupInput"
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
        "variableName": "createFormSpecInput"
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
        "variableName": "createQuestionGroupInput"
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
    "cacheID": "77ad1f6a77aaec7cccf6134fea00a58b",
    "id": null,
    "metadata": {},
    "name": "FormTemplateCreateCardMutation",
    "operationKind": "mutation",
    "text": "mutation FormTemplateCreateCardMutation(\n  $createFormSpecInput: CreateFormSpecInput!\n  $createQuestionGroupInput: CreateQuestionGroupInput!\n) {\n  createFormSpec(input: $createFormSpecInput) {\n    id\n  }\n  createQuestionGroup(input: $createQuestionGroupInput) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "ba943053d69c6fd3ea3ba56f05e35204";

export default node;
