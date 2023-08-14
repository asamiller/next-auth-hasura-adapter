"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasuraAdapter = void 0;
const graphql_request_1 = require("graphql-request");
const graphql_1 = require("./generated/graphql");
const transformDate = (object, key) => {
    if (!object)
        return;
    if (object[key]) {
        return {
            ...object,
            [key]: new Date(object[key]),
        };
    }
    return object;
};
const HasuraAdapter = ({ endpoint, adminSecret, }) => {
    const client = new graphql_request_1.GraphQLClient(endpoint, {
        headers: {
            ["x-hasura-admin-secret"]: adminSecret,
        },
    });
    const sdk = (0, graphql_1.getSdk)(client);
    return {
        // User
        createUser: async (data) => {
            const res = await sdk.CreateUser({ data });
            const user = transformDate(res === null || res === void 0 ? void 0 : res.insert_auth_users_one, "emailVerified");
            return user;
        },
        getUser: async (id) => {
            const res = await sdk.GetUser({ id });
            const user = transformDate(res === null || res === void 0 ? void 0 : res.auth_users_by_pk, "emailVerified");
            return user;
        },
        getUserByEmail: async (email) => {
            var _a;
            const res = await sdk.GetUsers({ where: { email: { _eq: email } } });
            const user = transformDate((_a = res === null || res === void 0 ? void 0 : res.auth_users) === null || _a === void 0 ? void 0 : _a[0], "emailVerified");
            if (!user)
                return null;
            return user;
        },
        getUserByAccount: async ({ providerAccountId, provider }) => {
            var _a;
            const res = await sdk.GetUsers({
                where: {
                    accounts: {
                        provider: { _eq: provider },
                        providerAccountId: { _eq: providerAccountId },
                    },
                },
            });
            const user = transformDate((_a = res === null || res === void 0 ? void 0 : res.auth_users) === null || _a === void 0 ? void 0 : _a[0], "emailVerified");
            if (!user)
                return null;
            return user;
        },
        updateUser: async ({ id, ...data }) => {
            const res = await sdk.UpdateUser({ id, data });
            const user = transformDate(res === null || res === void 0 ? void 0 : res.update_auth_users_by_pk, "emailVerified");
            return user;
        },
        deleteUser: async (id) => {
            const res = await sdk.DeleteUser({ id });
            const user = transformDate(res === null || res === void 0 ? void 0 : res.delete_auth_users_by_pk, "emailVerified");
            return user;
        },
        // Session
        createSession: async (data) => {
            const res = await sdk.CreateSession({ data });
            const session = transformDate(res === null || res === void 0 ? void 0 : res.insert_auth_sessions_one, "expires");
            return session;
        },
        getSessionAndUser: async (sessionToken) => {
            var _a;
            const res = await sdk.GetSession({ sessionToken });
            const session = transformDate((_a = res === null || res === void 0 ? void 0 : res.auth_sessions) === null || _a === void 0 ? void 0 : _a[0], "expires");
            const user = transformDate(session === null || session === void 0 ? void 0 : session.user, "emailVerified");
            return {
                session: session,
                user: user,
            };
        },
        updateSession: async ({ sessionToken, ...data }) => {
            var _a, _b;
            const res = await sdk.UpdateSession({ sessionToken, data });
            const session = transformDate((_b = (_a = res === null || res === void 0 ? void 0 : res.update_auth_sessions) === null || _a === void 0 ? void 0 : _a.returning) === null || _b === void 0 ? void 0 : _b[0], "expires");
            if (!session)
                return;
            return session;
        },
        deleteSession: async (sessionToken) => {
            var _a, _b;
            const res = await sdk.DeleteSession({ sessionToken });
            const session = transformDate((_b = (_a = res === null || res === void 0 ? void 0 : res.delete_auth_sessions) === null || _a === void 0 ? void 0 : _a.returning) === null || _b === void 0 ? void 0 : _b[0], "expires");
            if (!session)
                return;
            return session;
        },
        // Account
        linkAccount: async (data) => {
            const res = await sdk.CreateAccount({ data });
            const account = res === null || res === void 0 ? void 0 : res.insert_auth_accounts_one;
            return account;
        },
        unlinkAccount: async ({ providerAccountId, provider }) => {
            var _a, _b;
            const res = await sdk.DeleteAccount({ provider, providerAccountId });
            const account = (_b = (_a = res === null || res === void 0 ? void 0 : res.delete_auth_accounts) === null || _a === void 0 ? void 0 : _a.returning) === null || _b === void 0 ? void 0 : _b[0];
            if (!account)
                return;
            return account;
        },
        // Verification Token
        createVerificationToken: async (data) => {
            const res = await sdk.CreateVerificationToken({ data });
            const verificationToken = transformDate(res === null || res === void 0 ? void 0 : res.insert_auth_verification_tokens_one, "expires");
            return verificationToken;
        },
        useVerificationToken: async ({ identifier, token }) => {
            var _a, _b;
            const res = await sdk.DeleteVerificationToken({ identifier, token });
            const verificationToken = transformDate((_b = (_a = res === null || res === void 0 ? void 0 : res.delete_auth_verification_tokens) === null || _a === void 0 ? void 0 : _a.returning) === null || _b === void 0 ? void 0 : _b[0], "expires");
            if (!verificationToken)
                return null;
            return verificationToken;
        },
    };
};
exports.HasuraAdapter = HasuraAdapter;
