/**
 * @generated SignedSource<<23d0691e7bac2b69eee96714217e1b76>>
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
export type FormSpecCreateEntryPointUpdateFormSpecMutation$variables = {
  id: string;
  input: UpdateFormSpecInput;
};
export type FormSpecCreateEntryPointUpdateFormSpecMutation$data = {
  readonly updateFormSpec: {
    readonly id: string;
  };
};
export type FormSpecCreateEntryPointUpdateFormSpecMutation = {
  response: FormSpecCreateEntryPointUpdateFormSpecMutation$data;
  variables: FormSpecCreateEntryPointUpdateFormSpecMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormSpecCreateEntryPointUpdateFormSpecMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormSpecCreateEntryPointUpdateFormSpecMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "fb858e7924ee66bd5b23e699b4050f71",
    "id": null,
    "metadata": {},
    "name": "FormSpecCreateEntryPointUpdateFormSpecMutation",
    "operationKind": "mutation",
    "text": "mutation FormSpecCreateEntryPointUpdateFormSpecMutation(\n  $id: ID!\n  $input: UpdateFormSpecInput!\n) {\n  updateFormSpec(id: $id, input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "3256a2c5eb7d8e358b1613b6d55ce385";

export default node;
