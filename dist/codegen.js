"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    overwrite: true,
    schema: {
        "http://localhost:8080/v1/graphql": {
            headers: {
                "content-type": "application/json",
                "x-hasura-admin-secret": "admin_secret",
            },
        },
    },
    documents: "src/queries/*.graphql",
    generates: {
        "src/generated/graphql.ts": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-graphql-request",
            ],
            config: {
                preResolveTypes: true,
                skipTypename: false,
                enumsAsTypes: true,
                constEnums: true,
            },
        },
    },
};
exports.default = config;
