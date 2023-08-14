import { Adapter } from "next-auth/adapters";
type HasuraAdapterArgs = {
    endpoint: string;
    authToken: string;
};
export declare const HasuraAdapter: ({ endpoint, authToken, }: HasuraAdapterArgs) => Adapter;
export {};
