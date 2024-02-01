/**
 * @generated SignedSource<<dfcf08f53702e61923e85a888d1764d3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateQuestionGroupInput = {
  addQuestionIDs?: ReadonlyArray<string> | null | undefined;
  clearFormSpec?: boolean | null | undefined;
  clearQuestion?: boolean | null | undefined;
  createdAt?: any | null | undefined;
  createdBy?: number | null | undefined;
  formSpecID?: string | null | undefined;
  name?: string | null | undefined;
  removeQuestionIDs?: ReadonlyArray<string> | null | undefined;
  updatedAt?: any | null | undefined;
};
export type PendingQuestionPointUpdateMutation$variables = {
  id: string;
  input: UpdateQuestionGroupInput;
};
export type PendingQuestionPointUpdateMutation$data = {
  readonly updateQuestionGroup: {
    readonly id: string;
  };
};
export type PendingQuestionPointUpdateMutation = {
  response: PendingQuestionPointUpdateMutation$data;
  variables: PendingQuestionPointUpdateMutation$variables;
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
    "concreteType": "QuestionGroup",
    "kind": "LinkedField",
    "name": "updateQuestionGroup",
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
    "name": "PendingQuestionPointUpdateMutation",
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
    "name": "PendingQuestionPointUpdateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "7ad8ef6b9da47016e97dc09f8d1a44a2",
    "id": null,
    "metadata": {},
    "name": "PendingQuestionPointUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation PendingQuestionPointUpdateMutation(\n  $input: UpdateQuestionGroupInput!\n  $id: ID!\n) {\n  updateQuestionGroup(input: $input, id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "4a2d16d3f94cb3442026aaaf6a4c4ccf";

export default node;
