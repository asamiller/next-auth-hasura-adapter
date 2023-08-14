"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.DeleteVerificationTokenDocument = exports.CreateVerificationTokenDocument = exports.DeleteUserDocument = exports.UpdateUserDocument = exports.CreateUserDocument = exports.GetUsersDocument = exports.GetUserDocument = exports.DeleteSessionDocument = exports.UpdateSessionDocument = exports.CreateSessionDocument = exports.GetSessionDocument = exports.DeleteAccountDocument = exports.CreateAccountDocument = exports.VerificationTokenFragmentDoc = exports.AccountFragmentDoc = exports.SessionFragmentDoc = exports.UserFragmentDoc = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.UserFragmentDoc = (0, graphql_tag_1.default) `
    fragment User on auth_users {
  __typename
  id
  name
  email
  image
  emailVerified
}
    `;
exports.SessionFragmentDoc = (0, graphql_tag_1.default) `
    fragment Session on auth_sessions {
  __typename
  id
  userId
  expires
  sessionToken
}
    `;
exports.AccountFragmentDoc = (0, graphql_tag_1.default) `
    fragment Account on auth_accounts {
  __typename
  id
  type
  scope
  userId
  id_token
  provider
  expires_at
  token_type
  oauth_token
  access_token
  refresh_token
  session_state
  providerAccountId
  oauth_token_secret
}
    `;
exports.VerificationTokenFragmentDoc = (0, graphql_tag_1.default) `
    fragment VerificationToken on auth_verification_tokens {
  __typename
  token
  expires
  identifier
}
    `;
exports.CreateAccountDocument = (0, graphql_tag_1.default) `
    mutation CreateAccount($data: auth_accounts_insert_input!) {
  insert_auth_accounts_one(object: $data) {
    ...Account
  }
}
    ${exports.AccountFragmentDoc}`;
exports.DeleteAccountDocument = (0, graphql_tag_1.default) `
    mutation DeleteAccount($provider: String!, $providerAccountId: String!) {
  delete_auth_accounts(
    where: {provider: {_eq: $provider}, providerAccountId: {_eq: $providerAccountId}}
  ) {
    returning {
      ...Account
    }
  }
}
    ${exports.AccountFragmentDoc}`;
exports.GetSessionDocument = (0, graphql_tag_1.default) `
    query GetSession($sessionToken: String) {
  auth_sessions(where: {sessionToken: {_eq: $sessionToken}}) {
    ...Session
    user {
      ...User
    }
  }
}
    ${exports.SessionFragmentDoc}
${exports.UserFragmentDoc}`;
exports.CreateSessionDocument = (0, graphql_tag_1.default) `
    mutation CreateSession($data: auth_sessions_insert_input!) {
  insert_auth_sessions_one(object: $data) {
    ...Session
  }
}
    ${exports.SessionFragmentDoc}`;
exports.UpdateSessionDocument = (0, graphql_tag_1.default) `
    mutation UpdateSession($sessionToken: String, $data: auth_sessions_set_input!) {
  update_auth_sessions(where: {sessionToken: {_eq: $sessionToken}}, _set: $data) {
    returning {
      ...Session
    }
  }
}
    ${exports.SessionFragmentDoc}`;
exports.DeleteSessionDocument = (0, graphql_tag_1.default) `
    mutation DeleteSession($sessionToken: String) {
  delete_auth_sessions(where: {sessionToken: {_eq: $sessionToken}}) {
    returning {
      ...Session
    }
  }
}
    ${exports.SessionFragmentDoc}`;
exports.GetUserDocument = (0, graphql_tag_1.default) `
    query GetUser($id: uuid!) {
  auth_users_by_pk(id: $id) {
    ...User
  }
}
    ${exports.UserFragmentDoc}`;
exports.GetUsersDocument = (0, graphql_tag_1.default) `
    query GetUsers($where: auth_users_bool_exp!) {
  auth_users(where: $where) {
    ...User
  }
}
    ${exports.UserFragmentDoc}`;
exports.CreateUserDocument = (0, graphql_tag_1.default) `
    mutation CreateUser($data: auth_users_insert_input!) {
  insert_auth_users_one(object: $data) {
    ...User
  }
}
    ${exports.UserFragmentDoc}`;
exports.UpdateUserDocument = (0, graphql_tag_1.default) `
    mutation UpdateUser($id: uuid!, $data: auth_users_set_input!) {
  update_auth_users_by_pk(pk_columns: {id: $id}, _set: $data) {
    ...User
  }
}
    ${exports.UserFragmentDoc}`;
exports.DeleteUserDocument = (0, graphql_tag_1.default) `
    mutation DeleteUser($id: uuid!) {
  delete_auth_users_by_pk(id: $id) {
    ...User
  }
}
    ${exports.UserFragmentDoc}`;
exports.CreateVerificationTokenDocument = (0, graphql_tag_1.default) `
    mutation CreateVerificationToken($data: auth_verification_tokens_insert_input!) {
  insert_auth_verification_tokens_one(object: $data) {
    ...VerificationToken
  }
}
    ${exports.VerificationTokenFragmentDoc}`;
exports.DeleteVerificationTokenDocument = (0, graphql_tag_1.default) `
    mutation DeleteVerificationToken($identifier: String!, $token: String!) {
  delete_auth_verification_tokens(
    where: {token: {_eq: $token}, identifier: {_eq: $identifier}}
  ) {
    returning {
      ...VerificationToken
    }
  }
}
    ${exports.VerificationTokenFragmentDoc}`;
const defaultWrapper = (action, _operationName, _operationType) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        CreateAccount(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateAccountDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CreateAccount', 'mutation');
        },
        DeleteAccount(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteAccountDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'DeleteAccount', 'mutation');
        },
        GetSession(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetSessionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'GetSession', 'query');
        },
        CreateSession(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateSessionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CreateSession', 'mutation');
        },
        UpdateSession(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateSessionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'UpdateSession', 'mutation');
        },
        DeleteSession(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteSessionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'DeleteSession', 'mutation');
        },
        GetUser(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'GetUser', 'query');
        },
        GetUsers(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetUsersDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'GetUsers', 'query');
        },
        CreateUser(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CreateUser', 'mutation');
        },
        UpdateUser(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'UpdateUser', 'mutation');
        },
        DeleteUser(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'DeleteUser', 'mutation');
        },
        CreateVerificationToken(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateVerificationTokenDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CreateVerificationToken', 'mutation');
        },
        DeleteVerificationToken(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteVerificationTokenDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'DeleteVerificationToken', 'mutation');
        }
    };
}
exports.getSdk = getSdk;
