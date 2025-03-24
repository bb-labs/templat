/**
 * @generated SignedSource<<92065fcecf0223ed7116eef84c79ca1e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UsersQuery$variables = Record<PropertyKey, never>;
export type UsersQuery$data = {
  readonly users: ReadonlyArray<{
    readonly _id: any;
    readonly age: any;
    readonly name: any;
  }> | null | undefined;
};
export type UsersQuery = {
  response: UsersQuery$data;
  variables: UsersQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Users",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": "_id",
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "age",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "66952a747443a90dedb70e002f04c40c",
    "id": null,
    "metadata": {},
    "name": "UsersQuery",
    "operationKind": "query",
    "text": "query UsersQuery {\n  users {\n    _id: id\n    name\n    age\n  }\n}\n"
  }
};
})();

(node as any).hash = "083e6841fc9206b01991b907808e3b81";

export default node;
