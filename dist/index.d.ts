import { Adapter } from "next-auth/adapters";
type HasuraAdapterArgs = {
    endpoint: string;
    adminSecret: string;
};
export declare const HasuraAdapter: ({ endpoint, adminSecret, }: HasuraAdapterArgs) => Adapter;
export {};
