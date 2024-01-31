/**
 * @generated SignedSource<<688fb8b9134f319aed446691141da179>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FormInstanceStatus = "pending" | "submiited" | "%future added value";
export type UpdateFormInstanceInput = {
  addQuestionResponseIDs?: ReadonlyArray<string> | null | undefined;
  clearFormSpec?: boolean | null | undefined;
  clearQuestionResponse?: boolean | null | undefined;
  clearUsers?: boolean | null | undefined;
  formSpecID?: string | null | undefined;
  removeQuestionResponseIDs?: ReadonlyArray<string> | null | undefined;
  status?: FormInstanceStatus | null | undefined;
  usersID?: string | null | undefined;
};
export type FormInstanceEntryPointUpdateMutation$variables = {
  id: string;
  input: UpdateFormInstanceInput;
};
export type FormInstanceEntryPointUpdateMutation$data = {
  readonly updateFormInstance: {
    readonly id: string;
  };
};
export type FormInstanceEntryPointUpdateMutation = {
  response: FormInstanceEntryPointUpdateMutation$data;
  variables: FormInstanceEntryPointUpdateMutation$variables;
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
    "concreteType": "FormInstance",
    "kind": "LinkedField",
    "name": "updateFormInstance",
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
    "name": "FormInstanceEntryPointUpdateMutation",
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
    "name": "FormInstanceEntryPointUpdateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "6f427ad1503ced243af6471d5c2bba2a",
    "id": null,
    "metadata": {},
    "name": "FormInstanceEntryPointUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation FormInstanceEntryPointUpdateMutation(\n  $input: UpdateFormInstanceInput!\n  $id: ID!\n) {\n  updateFormInstance(input: $input, id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "188d17010eeb215dd6d6f66fb1b057d4";

export default node;
