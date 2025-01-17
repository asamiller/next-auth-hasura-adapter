import { GraphQLClient } from "graphql-request";
import {
  Adapter,
  AdapterAccount,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from "next-auth/adapters";

import { getSdk } from "./generated/graphql";

type HasuraAdapterArgs = {
  endpoint: string;
  authToken: string;
};

const transformDate = <T extends { [key: string]: unknown }>(
  object: T | null | undefined,
  key: keyof T,
) => {
  if (!object) return;

  if (object[key]) {
    return {
      ...object,
      [key]: new Date(object[key] as string),
    };
  }

  return object;
};

export const HasuraAdapter = ({
  endpoint,
  authToken,
}: HasuraAdapterArgs): Adapter => {
  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${authToken}`,
      "x-hasura-role": "admin",
    },
  });

  const sdk = getSdk(client);

  return {
    // User
    createUser: async (data) => {
      const res = await sdk.CreateUser({ data });
      const user = transformDate(res?.insert_auth_users_one, "emailVerified");

      return user as AdapterUser;
    },
    getUser: async (id) => {
      const res = await sdk.GetUser({ id });
      const user = transformDate(res?.auth_users_by_pk, "emailVerified");

      return user as AdapterUser;
    },
    getUserByEmail: async (email) => {
      const res = await sdk.GetUsers({ where: { email: { _eq: email } } });
      const user = transformDate(res?.auth_users?.[0], "emailVerified");

      if (!user) return null;

      return user as AdapterUser;
    },
    getUserByAccount: async ({ providerAccountId, provider }) => {
      const res = await sdk.GetUsers({
        where: {
          accounts: {
            provider: { _eq: provider },
            providerAccountId: { _eq: providerAccountId },
          },
        },
      });
      const user = transformDate(res?.auth_users?.[0], "emailVerified");

      if (!user) return null;

      return user as AdapterUser;
    },
    updateUser: async ({ id, ...data }) => {
      const res = await sdk.UpdateUser({ id, data });
      const user = transformDate(res?.update_auth_users_by_pk, "emailVerified");

      return user as AdapterUser;
    },
    deleteUser: async (id) => {
      const res = await sdk.DeleteUser({ id });
      const user = transformDate(res?.delete_auth_users_by_pk, "emailVerified");

      return user as AdapterUser;
    },
    // Session
    createSession: async (data) => {
      const res = await sdk.CreateSession({ data });
      const session = transformDate(res?.insert_auth_sessions_one, "expires");

      return session as AdapterSession;
    },
    getSessionAndUser: async (sessionToken) => {
      const res = await sdk.GetSession({ sessionToken });
      const session = transformDate(res?.auth_sessions?.[0], "expires");
      const user = transformDate(session?.user, "emailVerified");

      return {
        session: session as AdapterSession,
        user: user as AdapterUser,
      };
    },
    updateSession: async ({ sessionToken, ...data }) => {
      const res = await sdk.UpdateSession({ sessionToken, data });
      const session = transformDate(
        res?.update_auth_sessions?.returning?.[0],
        "expires",
      );

      if (!session) return;

      return session as AdapterSession;
    },
    deleteSession: async (sessionToken) => {
      const res = await sdk.DeleteSession({ sessionToken });
      const session = transformDate(
        res?.delete_auth_sessions?.returning?.[0],
        "expires",
      );

      if (!session) return;

      return session as AdapterSession;
    },
    // Account
    linkAccount: async (data) => {
      const res = await sdk.CreateAccount({ data });
      const account = res?.insert_auth_accounts_one;

      return account as AdapterAccount;
    },
    unlinkAccount: async ({ providerAccountId, provider }) => {
      const res = await sdk.DeleteAccount({ provider, providerAccountId });
      const account = res?.delete_auth_accounts?.returning?.[0];

      if (!account) return;

      return account as AdapterAccount;
    },
    // Verification Token
    createVerificationToken: async (data) => {
      const res = await sdk.CreateVerificationToken({ data });
      const verificationToken = transformDate(
        res?.insert_auth_verification_tokens_one,
        "expires",
      );

      return verificationToken as VerificationToken;
    },
    useVerificationToken: async ({ identifier, token }) => {
      const res = await sdk.DeleteVerificationToken({ identifier, token });
      const verificationToken = transformDate(
        res?.delete_auth_verification_tokens?.returning?.[0],
        "expires",
      );

      if (!verificationToken) return null;

      return verificationToken as VerificationToken;
    },
  };
};
