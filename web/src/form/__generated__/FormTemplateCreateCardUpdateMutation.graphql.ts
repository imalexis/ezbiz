/**
 * @generated SignedSource<<52b472a8ca44ebf8ffa53f6e8f35fa68>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateFormSpecInput = {
  addFormInstanceIDs?: ReadonlyArray<string> | null | undefined;
  addQuestionGroupIDs?: ReadonlyArray<string> | null | undefined;
  clearCover?: boolean | null | undefined;
  clearFormInstances?: boolean | null | undefined;
  clearOwner?: boolean | null | undefined;
  clearQuestionGroups?: boolean | null | undefined;
  cover?: string | null | undefined;
  createdAt?: any | null | undefined;
  createdBy?: number | null | undefined;
  description?: string | null | undefined;
  enabled?: boolean | null | undefined;
  isTemplate?: boolean | null | undefined;
  name?: string | null | undefined;
  ownerID?: string | null | undefined;
  removeFormInstanceIDs?: ReadonlyArray<string> | null | undefined;
  removeQuestionGroupIDs?: ReadonlyArray<string> | null | undefined;
  updatedAt?: any | null | undefined;
};
export type FormTemplateCreateCardUpdateMutation$variables = {
  id: string;
  input: UpdateFormSpecInput;
};
export type FormTemplateCreateCardUpdateMutation$data = {
  readonly updateFormSpec: {
    readonly id: string;
  };
};
export type FormTemplateCreateCardUpdateMutation = {
  response: FormTemplateCreateCardUpdateMutation$data;
  variables: FormTemplateCreateCardUpdateMutation$variables;
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
    "concreteType": "FormSpec",
    "kind": "LinkedField",
    "name": "updateFormSpec",
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
    "name": "FormTemplateCreateCardUpdateMutation",
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
    "name": "FormTemplateCreateCardUpdateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "e72b01d8b2c9eef0db9b6e3c44dfd848",
    "id": null,
    "metadata": {},
    "name": "FormTemplateCreateCardUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation FormTemplateCreateCardUpdateMutation(\n  $input: UpdateFormSpecInput!\n  $id: ID!\n) {\n  updateFormSpec(input: $input, id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "9719a3ccdb4a1a43e20e190ee21a20a4";

export default node;
