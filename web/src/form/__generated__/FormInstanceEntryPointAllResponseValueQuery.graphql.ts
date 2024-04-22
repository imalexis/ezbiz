/**
 * @generated SignedSource<<5461a4eb927bc2a8ba68e88d766711a3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FormInstanceStatus = "pending" | "submiited" | "%future added value";
export type QuestionType = "checkboxes" | "date" | "drop_down" | "file" | "linear_scale" | "multi_choice" | "paragraph" | "short_text" | "time" | "%future added value";
export type UserRole = "business_admin" | "business_user" | "%future added value";
export type QuestionResponseWhereInput = {
  and?: ReadonlyArray<QuestionResponseWhereInput> | null | undefined;
  createdAt?: any | null | undefined;
  createdAtGT?: any | null | undefined;
  createdAtGTE?: any | null | undefined;
  createdAtIn?: ReadonlyArray<any> | null | undefined;
  createdAtLT?: any | null | undefined;
  createdAtLTE?: any | null | undefined;
  createdAtNEQ?: any | null | undefined;
  createdAtNotIn?: ReadonlyArray<any> | null | undefined;
  hasFormInstance?: boolean | null | undefined;
  hasFormInstanceWith?: ReadonlyArray<FormInstanceWhereInput> | null | undefined;
  hasQuestion?: boolean | null | undefined;
  hasQuestionWith?: ReadonlyArray<QuestionWhereInput> | null | undefined;
  id?: string | null | undefined;
  idGT?: string | null | undefined;
  idGTE?: string | null | undefined;
  idIn?: ReadonlyArray<string> | null | undefined;
  idLT?: string | null | undefined;
  idLTE?: string | null | undefined;
  idNEQ?: string | null | undefined;
  idNotIn?: ReadonlyArray<string> | null | undefined;
  label?: string | null | undefined;
  labelContains?: string | null | undefined;
  labelContainsFold?: string | null | undefined;
  labelEqualFold?: string | null | undefined;
  labelGT?: string | null | undefined;
  labelGTE?: string | null | undefined;
  labelHasPrefix?: string | null | undefined;
  labelHasSuffix?: string | null | undefined;
  labelIn?: ReadonlyArray<string> | null | undefined;
  labelLT?: string | null | undefined;
  labelLTE?: string | null | undefined;
  labelNEQ?: string | null | undefined;
  labelNotIn?: ReadonlyArray<string> | null | undefined;
  not?: QuestionResponseWhereInput | null | undefined;
  or?: ReadonlyArray<QuestionResponseWhereInput> | null | undefined;
  updatedAt?: any | null | undefined;
  updatedAtGT?: any | null | undefined;
  updatedAtGTE?: any | null | undefined;
  updatedAtIn?: ReadonlyArray<any> | null | undefined;
  updatedAtLT?: any | null | undefined;
  updatedAtLTE?: any | null | undefined;
  updatedAtNEQ?: any | null | undefined;
  updatedAtNotIn?: ReadonlyArray<any> | null | undefined;
  value?: string | null | undefined;
  valueContains?: string | null | undefined;
  valueContainsFold?: string | null | undefined;
  valueEqualFold?: string | null | undefined;
  valueGT?: string | null | undefined;
  valueGTE?: string | null | undefined;
  valueHasPrefix?: string | null | undefined;
  valueHasSuffix?: string | null | undefined;
  valueIn?: ReadonlyArray<string> | null | undefined;
  valueLT?: string | null | undefined;
  valueLTE?: string | null | undefined;
  valueNEQ?: string | null | undefined;
  valueNotIn?: ReadonlyArray<string> | null | undefined;
};
export type QuestionWhereInput = {
  and?: ReadonlyArray<QuestionWhereInput> | null | undefined;
  createdAt?: any | null | undefined;
  createdAtGT?: any | null | undefined;
  createdAtGTE?: any | null | undefined;
  createdAtIn?: ReadonlyArray<any> | null | undefined;
  createdAtLT?: any | null | undefined;
  createdAtLTE?: any | null | undefined;
  createdAtNEQ?: any | null | undefined;
  createdAtNotIn?: ReadonlyArray<any> | null | undefined;
  createdBy?: number | null | undefined;
  createdByGT?: number | null | undefined;
  createdByGTE?: number | null | undefined;
  createdByIn?: ReadonlyArray<number> | null | undefined;
  createdByLT?: number | null | undefined;
  createdByLTE?: number | null | undefined;
  createdByNEQ?: number | null | undefined;
  createdByNotIn?: ReadonlyArray<number> | null | undefined;
  dependencies?: string | null | undefined;
  dependenciesContains?: string | null | undefined;
  dependenciesContainsFold?: string | null | undefined;
  dependenciesEqualFold?: string | null | undefined;
  dependenciesGT?: string | null | undefined;
  dependenciesGTE?: string | null | undefined;
  dependenciesHasPrefix?: string | null | undefined;
  dependenciesHasSuffix?: string | null | undefined;
  dependenciesIn?: ReadonlyArray<string> | null | undefined;
  dependenciesLT?: string | null | undefined;
  dependenciesLTE?: string | null | undefined;
  dependenciesNEQ?: string | null | undefined;
  dependenciesNotIn?: ReadonlyArray<string> | null | undefined;
  extraData?: string | null | undefined;
  extraDataContains?: string | null | undefined;
  extraDataContainsFold?: string | null | undefined;
  extraDataEqualFold?: string | null | undefined;
  extraDataGT?: string | null | undefined;
  extraDataGTE?: string | null | undefined;
  extraDataHasPrefix?: string | null | undefined;
  extraDataHasSuffix?: string | null | undefined;
  extraDataIn?: ReadonlyArray<string> | null | undefined;
  extraDataLT?: string | null | undefined;
  extraDataLTE?: string | null | undefined;
  extraDataNEQ?: string | null | undefined;
  extraDataNotIn?: ReadonlyArray<string> | null | undefined;
  hasFromQuestionGroup?: boolean | null | undefined;
  hasFromQuestionGroupWith?: ReadonlyArray<QuestionGroupWhereInput> | null | undefined;
  hasQuestionResponse?: boolean | null | undefined;
  hasQuestionResponseWith?: ReadonlyArray<QuestionResponseWhereInput> | null | undefined;
  id?: string | null | undefined;
  idGT?: string | null | undefined;
  idGTE?: string | null | undefined;
  idIn?: ReadonlyArray<string> | null | undefined;
  idLT?: string | null | undefined;
  idLTE?: string | null | undefined;
  idNEQ?: string | null | undefined;
  idNotIn?: ReadonlyArray<string> | null | undefined;
  label?: string | null | undefined;
  labelContains?: string | null | undefined;
  labelContainsFold?: string | null | undefined;
  labelEqualFold?: string | null | undefined;
  labelGT?: string | null | undefined;
  labelGTE?: string | null | undefined;
  labelHasPrefix?: string | null | undefined;
  labelHasSuffix?: string | null | undefined;
  labelIn?: ReadonlyArray<string> | null | undefined;
  labelLT?: string | null | undefined;
  labelLTE?: string | null | undefined;
  labelNEQ?: string | null | undefined;
  labelNotIn?: ReadonlyArray<string> | null | undefined;
  not?: QuestionWhereInput | null | undefined;
  or?: ReadonlyArray<QuestionWhereInput> | null | undefined;
  required?: boolean | null | undefined;
  requiredNEQ?: boolean | null | undefined;
  rule?: string | null | undefined;
  ruleContains?: string | null | undefined;
  ruleContainsFold?: string | null | undefined;
  ruleEqualFold?: string | null | undefined;
  ruleGT?: string | null | undefined;
  ruleGTE?: string | null | undefined;
  ruleHasPrefix?: string | null | undefined;
  ruleHasSuffix?: string | null | undefined;
  ruleIn?: ReadonlyArray<string> | null | undefined;
  ruleLT?: string | null | undefined;
  ruleLTE?: string | null | undefined;
  ruleNEQ?: string | null | undefined;
  ruleNotIn?: ReadonlyArray<string> | null | undefined;
  title?: string | null | undefined;
  titleContains?: string | null | undefined;
  titleContainsFold?: string | null | undefined;
  titleEqualFold?: string | null | undefined;
  titleGT?: string | null | undefined;
  titleGTE?: string | null | undefined;
  titleHasPrefix?: string | null | undefined;
  titleHasSuffix?: string | null | undefined;
  titleIn?: ReadonlyArray<string> | null | undefined;
  titleLT?: string | null | undefined;
  titleLTE?: string | null | undefined;
  titleNEQ?: string | null | undefined;
  titleNotIn?: ReadonlyArray<string> | null | undefined;
  type?: QuestionType | null | undefined;
  typeIn?: ReadonlyArray<QuestionType> | null | undefined;
  typeNEQ?: QuestionType | null | undefined;
  typeNotIn?: ReadonlyArray<QuestionType> | null | undefined;
  updatedAt?: any | null | undefined;
  updatedAtGT?: any | null | undefined;
  updatedAtGTE?: any | null | undefined;
  updatedAtIn?: ReadonlyArray<any> | null | undefined;
  updatedAtLT?: any | null | undefined;
  updatedAtLTE?: any | null | undefined;
  updatedAtNEQ?: any | null | undefined;
  updatedAtNotIn?: ReadonlyArray<any> | null | undefined;
};
export type QuestionGroupWhereInput = {
  and?: ReadonlyArray<QuestionGroupWhereInput> | null | undefined;
  createdAt?: any | null | undefined;
  createdAtGT?: any | null | undefined;
  createdAtGTE?: any | null | undefined;
  createdAtIn?: ReadonlyArray<any> | null | undefined;
  createdAtLT?: any | null | undefined;
  createdAtLTE?: any | null | undefined;
  createdAtNEQ?: any | null | undefined;
  createdAtNotIn?: ReadonlyArray<any> | null | undefined;
  createdBy?: number | null | undefined;
  createdByGT?: number | null | undefined;
  createdByGTE?: number | null | undefined;
  createdByIn?: ReadonlyArray<number> | null | undefined;
  createdByLT?: number | null | undefined;
  createdByLTE?: number | null | undefined;
  createdByNEQ?: number | null | undefined;
  createdByNotIn?: ReadonlyArray<number> | null | undefined;
  hasFormSpec?: boolean | null | undefined;
  hasFormSpecWith?: ReadonlyArray<FormSpecWhereInput> | null | undefined;
  hasQuestion?: boolean | null | undefined;
  hasQuestionWith?: ReadonlyArray<QuestionWhereInput> | null | undefined;
  id?: string | null | undefined;
  idGT?: string | null | undefined;
  idGTE?: string | null | undefined;
  idIn?: ReadonlyArray<string> | null | undefined;
  idLT?: string | null | undefined;
  idLTE?: string | null | undefined;
  idNEQ?: string | null | undefined;
  idNotIn?: ReadonlyArray<string> | null | undefined;
  name?: string | null | undefined;
  nameContains?: string | null | undefined;
  nameContainsFold?: string | null | undefined;
  nameEqualFold?: string | null | undefined;
  nameGT?: string | null | undefined;
  nameGTE?: string | null | undefined;
  nameHasPrefix?: string | null | undefined;
  nameHasSuffix?: string | null | undefined;
  nameIn?: ReadonlyArray<string> | null | undefined;
  nameLT?: string | null | undefined;
  nameLTE?: string | null | undefined;
  nameNEQ?: string | null | undefined;
  nameNotIn?: ReadonlyArray<string> | null | undefined;
  not?: QuestionGroupWhereInput | null | undefined;
  or?: ReadonlyArray<QuestionGroupWhereInput> | null | undefined;
  updatedAt?: any | null | undefined;
  updatedAtGT?: any | null | undefined;
  updatedAtGTE?: any | null | undefined;
  updatedAtIn?: ReadonlyArray<any> | null | undefined;
  updatedAtLT?: any | null | undefined;
  updatedAtLTE?: any | null | undefined;
  updatedAtNEQ?: any | null | undefined;
  updatedAtNotIn?: ReadonlyArray<any> | null | undefined;
};
export type FormSpecWhereInput = {
  and?: ReadonlyArray<FormSpecWhereInput> | null | undefined;
  cover?: string | null | undefined;
  coverContains?: string | null | undefined;
  coverContainsFold?: string | null | undefined;
  coverEqualFold?: string | null | undefined;
  coverGT?: string | null | undefined;
  coverGTE?: string | null | undefined;
  coverHasPrefix?: string | null | undefined;
  coverHasSuffix?: string | null | undefined;
  coverIn?: ReadonlyArray<string> | null | undefined;
  coverIsNil?: boolean | null | undefined;
  coverLT?: string | null | undefined;
  coverLTE?: string | null | undefined;
  coverNEQ?: string | null | undefined;
  coverNotIn?: ReadonlyArray<string> | null | undefined;
  coverNotNil?: boolean | null | undefined;
  createdAt?: any | null | undefined;
  createdAtGT?: any | null | undefined;
  createdAtGTE?: any | null | undefined;
  createdAtIn?: ReadonlyArray<any> | null | undefined;
  createdAtLT?: any | null | undefined;
  createdAtLTE?: any | null | undefined;
  createdAtNEQ?: any | null | undefined;
  createdAtNotIn?: ReadonlyArray<any> | null | undefined;
  createdBy?: number | null | undefined;
  createdByGT?: number | null | undefined;
  createdByGTE?: number | null | undefined;
  createdByIn?: ReadonlyArray<number> | null | undefined;
  createdByLT?: number | null | undefined;
  createdByLTE?: number | null | undefined;
  createdByNEQ?: number | null | undefined;
  createdByNotIn?: ReadonlyArray<number> | null | undefined;
  description?: string | null | undefined;
  descriptionContains?: string | null | undefined;
  descriptionContainsFold?: string | null | undefined;
  descriptionEqualFold?: string | null | undefined;
  descriptionGT?: string | null | undefined;
  descriptionGTE?: string | null | undefined;
  descriptionHasPrefix?: string | null | undefined;
  descriptionHasSuffix?: string | null | undefined;
  descriptionIn?: ReadonlyArray<string> | null | undefined;
  descriptionLT?: string | null | undefined;
  descriptionLTE?: string | null | undefined;
  descriptionNEQ?: string | null | undefined;
  descriptionNotIn?: ReadonlyArray<string> | null | undefined;
  enabled?: boolean | null | undefined;
  enabledNEQ?: boolean | null | undefined;
  hasFormInstances?: boolean | null | undefined;
  hasFormInstancesWith?: ReadonlyArray<FormInstanceWhereInput> | null | undefined;
  hasOwner?: boolean | null | undefined;
  hasOwnerWith?: ReadonlyArray<UserWhereInput> | null | undefined;
  hasQuestionGroups?: boolean | null | undefined;
  hasQuestionGroupsWith?: ReadonlyArray<QuestionGroupWhereInput> | null | undefined;
  id?: string | null | undefined;
  idGT?: string | null | undefined;
  idGTE?: string | null | undefined;
  idIn?: ReadonlyArray<string> | null | undefined;
  idLT?: string | null | undefined;
  idLTE?: string | null | undefined;
  idNEQ?: string | null | undefined;
  idNotIn?: ReadonlyArray<string> | null | undefined;
  isTemplate?: boolean | null | undefined;
  isTemplateNEQ?: boolean | null | undefined;
  name?: string | null | undefined;
  nameContains?: string | null | undefined;
  nameContainsFold?: string | null | undefined;
  nameEqualFold?: string | null | undefined;
  nameGT?: string | null | undefined;
  nameGTE?: string | null | undefined;
  nameHasPrefix?: string | null | undefined;
  nameHasSuffix?: string | null | undefined;
  nameIn?: ReadonlyArray<string> | null | undefined;
  nameLT?: string | null | undefined;
  nameLTE?: string | null | undefined;
  nameNEQ?: string | null | undefined;
  nameNotIn?: ReadonlyArray<string> | null | undefined;
  not?: FormSpecWhereInput | null | undefined;
  or?: ReadonlyArray<FormSpecWhereInput> | null | undefined;
  updatedAt?: any | null | undefined;
  updatedAtGT?: any | null | undefined;
  updatedAtGTE?: any | null | undefined;
  updatedAtIn?: ReadonlyArray<any> | null | undefined;
  updatedAtLT?: any | null | undefined;
  updatedAtLTE?: any | null | undefined;
  updatedAtNEQ?: any | null | undefined;
  updatedAtNotIn?: ReadonlyArray<any> | null | undefined;
};
export type FormInstanceWhereInput = {
  and?: ReadonlyArray<FormInstanceWhereInput> | null | undefined;
  hasFormSpec?: boolean | null | undefined;
  hasFormSpecWith?: ReadonlyArray<FormSpecWhereInput> | null | undefined;
  hasQuestionResponse?: boolean | null | undefined;
  hasQuestionResponseWith?: ReadonlyArray<QuestionResponseWhereInput> | null | undefined;
  hasUsers?: boolean | null | undefined;
  hasUsersWith?: ReadonlyArray<UserWhereInput> | null | undefined;
  id?: string | null | undefined;
  idGT?: string | null | undefined;
  idGTE?: string | null | undefined;
  idIn?: ReadonlyArray<string> | null | undefined;
  idLT?: string | null | undefined;
  idLTE?: string | null | undefined;
  idNEQ?: string | null | undefined;
  idNotIn?: ReadonlyArray<string> | null | undefined;
  not?: FormInstanceWhereInput | null | undefined;
  or?: ReadonlyArray<FormInstanceWhereInput> | null | undefined;
  status?: FormInstanceStatus | null | undefined;
  statusIn?: ReadonlyArray<FormInstanceStatus> | null | undefined;
  statusNEQ?: FormInstanceStatus | null | undefined;
  statusNotIn?: ReadonlyArray<FormInstanceStatus> | null | undefined;
};
export type UserWhereInput = {
  and?: ReadonlyArray<UserWhereInput> | null | undefined;
  createdAt?: any | null | undefined;
  createdAtGT?: any | null | undefined;
  createdAtGTE?: any | null | undefined;
  createdAtIn?: ReadonlyArray<any> | null | undefined;
  createdAtLT?: any | null | undefined;
  createdAtLTE?: any | null | undefined;
  createdAtNEQ?: any | null | undefined;
  createdAtNotIn?: ReadonlyArray<any> | null | undefined;
  email?: string | null | undefined;
  emailContains?: string | null | undefined;
  emailContainsFold?: string | null | undefined;
  emailEqualFold?: string | null | undefined;
  emailGT?: string | null | undefined;
  emailGTE?: string | null | undefined;
  emailHasPrefix?: string | null | undefined;
  emailHasSuffix?: string | null | undefined;
  emailIn?: ReadonlyArray<string> | null | undefined;
  emailLT?: string | null | undefined;
  emailLTE?: string | null | undefined;
  emailNEQ?: string | null | undefined;
  emailNotIn?: ReadonlyArray<string> | null | undefined;
  hasFormInstances?: boolean | null | undefined;
  hasFormInstancesWith?: ReadonlyArray<FormInstanceWhereInput> | null | undefined;
  hasFormSpecs?: boolean | null | undefined;
  hasFormSpecsWith?: ReadonlyArray<FormSpecWhereInput> | null | undefined;
  id?: string | null | undefined;
  idGT?: string | null | undefined;
  idGTE?: string | null | undefined;
  idIn?: ReadonlyArray<string> | null | undefined;
  idLT?: string | null | undefined;
  idLTE?: string | null | undefined;
  idNEQ?: string | null | undefined;
  idNotIn?: ReadonlyArray<string> | null | undefined;
  name?: string | null | undefined;
  nameContains?: string | null | undefined;
  nameContainsFold?: string | null | undefined;
  nameEqualFold?: string | null | undefined;
  nameGT?: string | null | undefined;
  nameGTE?: string | null | undefined;
  nameHasPrefix?: string | null | undefined;
  nameHasSuffix?: string | null | undefined;
  nameIn?: ReadonlyArray<string> | null | undefined;
  nameLT?: string | null | undefined;
  nameLTE?: string | null | undefined;
  nameNEQ?: string | null | undefined;
  nameNotIn?: ReadonlyArray<string> | null | undefined;
  not?: UserWhereInput | null | undefined;
  or?: ReadonlyArray<UserWhereInput> | null | undefined;
  password?: string | null | undefined;
  passwordContains?: string | null | undefined;
  passwordContainsFold?: string | null | undefined;
  passwordEqualFold?: string | null | undefined;
  passwordGT?: string | null | undefined;
  passwordGTE?: string | null | undefined;
  passwordHasPrefix?: string | null | undefined;
  passwordHasSuffix?: string | null | undefined;
  passwordIn?: ReadonlyArray<string> | null | undefined;
  passwordLT?: string | null | undefined;
  passwordLTE?: string | null | undefined;
  passwordNEQ?: string | null | undefined;
  passwordNotIn?: ReadonlyArray<string> | null | undefined;
  role?: UserRole | null | undefined;
  roleIn?: ReadonlyArray<UserRole> | null | undefined;
  roleNEQ?: UserRole | null | undefined;
  roleNotIn?: ReadonlyArray<UserRole> | null | undefined;
  updatedAt?: any | null | undefined;
  updatedAtGT?: any | null | undefined;
  updatedAtGTE?: any | null | undefined;
  updatedAtIn?: ReadonlyArray<any> | null | undefined;
  updatedAtLT?: any | null | undefined;
  updatedAtLTE?: any | null | undefined;
  updatedAtNEQ?: any | null | undefined;
  updatedAtNotIn?: ReadonlyArray<any> | null | undefined;
};
export type FormInstanceEntryPointAllResponseValueQuery$variables = {
  where: QuestionResponseWhereInput;
};
export type FormInstanceEntryPointAllResponseValueQuery$data = {
  readonly questionResponses: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly label: string;
        readonly value: string;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
};
export type FormInstanceEntryPointAllResponseValueQuery = {
  response: FormInstanceEntryPointAllResponseValueQuery$data;
  variables: FormInstanceEntryPointAllResponseValueQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "where"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormInstanceEntryPointAllResponseValueQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "QuestionResponseConnection",
        "kind": "LinkedField",
        "name": "questionResponses",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QuestionResponseEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "QuestionResponse",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormInstanceEntryPointAllResponseValueQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "QuestionResponseConnection",
        "kind": "LinkedField",
        "name": "questionResponses",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QuestionResponseEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "QuestionResponse",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "64e71723463b1008ed2031b7342d1acc",
    "id": null,
    "metadata": {},
    "name": "FormInstanceEntryPointAllResponseValueQuery",
    "operationKind": "query",
    "text": "query FormInstanceEntryPointAllResponseValueQuery(\n  $where: QuestionResponseWhereInput!\n) {\n  questionResponses(where: $where) {\n    edges {\n      node {\n        label\n        value\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "892b49096d691cdcaa3641da962f0b01";

export default node;
