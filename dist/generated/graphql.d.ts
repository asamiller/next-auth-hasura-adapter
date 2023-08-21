import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    bigint: {
        input: any;
        output: any;
    };
    jsonb: {
        input: any;
        output: any;
    };
    timestamp: {
        input: any;
        output: any;
    };
    timestamptz: {
        input: any;
        output: any;
    };
    uuid: {
        input: any;
        output: any;
    };
};
/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['Boolean']['input']>;
    _gt?: InputMaybe<Scalars['Boolean']['input']>;
    _gte?: InputMaybe<Scalars['Boolean']['input']>;
    _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    _lt?: InputMaybe<Scalars['Boolean']['input']>;
    _lte?: InputMaybe<Scalars['Boolean']['input']>;
    _neq?: InputMaybe<Scalars['Boolean']['input']>;
    _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};
/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['Int']['input']>;
    _gt?: InputMaybe<Scalars['Int']['input']>;
    _gte?: InputMaybe<Scalars['Int']['input']>;
    _in?: InputMaybe<Array<Scalars['Int']['input']>>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    _lt?: InputMaybe<Scalars['Int']['input']>;
    _lte?: InputMaybe<Scalars['Int']['input']>;
    _neq?: InputMaybe<Scalars['Int']['input']>;
    _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};
/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['String']['input']>;
    _gt?: InputMaybe<Scalars['String']['input']>;
    _gte?: InputMaybe<Scalars['String']['input']>;
    /** does the column match the given case-insensitive pattern */
    _ilike?: InputMaybe<Scalars['String']['input']>;
    _in?: InputMaybe<Array<Scalars['String']['input']>>;
    /** does the column match the given POSIX regular expression, case insensitive */
    _iregex?: InputMaybe<Scalars['String']['input']>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    /** does the column match the given pattern */
    _like?: InputMaybe<Scalars['String']['input']>;
    _lt?: InputMaybe<Scalars['String']['input']>;
    _lte?: InputMaybe<Scalars['String']['input']>;
    _neq?: InputMaybe<Scalars['String']['input']>;
    /** does the column NOT match the given case-insensitive pattern */
    _nilike?: InputMaybe<Scalars['String']['input']>;
    _nin?: InputMaybe<Array<Scalars['String']['input']>>;
    /** does the column NOT match the given POSIX regular expression, case insensitive */
    _niregex?: InputMaybe<Scalars['String']['input']>;
    /** does the column NOT match the given pattern */
    _nlike?: InputMaybe<Scalars['String']['input']>;
    /** does the column NOT match the given POSIX regular expression, case sensitive */
    _nregex?: InputMaybe<Scalars['String']['input']>;
    /** does the column NOT match the given SQL regular expression */
    _nsimilar?: InputMaybe<Scalars['String']['input']>;
    /** does the column match the given POSIX regular expression, case sensitive */
    _regex?: InputMaybe<Scalars['String']['input']>;
    /** does the column match the given SQL regular expression */
    _similar?: InputMaybe<Scalars['String']['input']>;
};
/** columns and relationships of "auth_accounts" */
export type Auth_Accounts = {
    __typename?: 'auth_accounts';
    access_token?: Maybe<Scalars['String']['output']>;
    expires_at?: Maybe<Scalars['bigint']['output']>;
    id: Scalars['uuid']['output'];
    id_token?: Maybe<Scalars['String']['output']>;
    oauth_token?: Maybe<Scalars['String']['output']>;
    oauth_token_secret?: Maybe<Scalars['String']['output']>;
    provider: Scalars['String']['output'];
    providerAccountId: Scalars['String']['output'];
    refresh_token?: Maybe<Scalars['String']['output']>;
    refresh_token_expires_in?: Maybe<Scalars['bigint']['output']>;
    scope?: Maybe<Scalars['String']['output']>;
    session_state?: Maybe<Scalars['String']['output']>;
    token_type?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
    /** An object relationship */
    user: Auth_Users;
    userId: Scalars['uuid']['output'];
};
/** aggregated selection of "auth_accounts" */
export type Auth_Accounts_Aggregate = {
    __typename?: 'auth_accounts_aggregate';
    aggregate?: Maybe<Auth_Accounts_Aggregate_Fields>;
    nodes: Array<Auth_Accounts>;
};
export type Auth_Accounts_Aggregate_Bool_Exp = {
    count?: InputMaybe<Auth_Accounts_Aggregate_Bool_Exp_Count>;
};
export type Auth_Accounts_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Auth_Accounts_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};
/** aggregate fields of "auth_accounts" */
export type Auth_Accounts_Aggregate_Fields = {
    __typename?: 'auth_accounts_aggregate_fields';
    avg?: Maybe<Auth_Accounts_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<Auth_Accounts_Max_Fields>;
    min?: Maybe<Auth_Accounts_Min_Fields>;
    stddev?: Maybe<Auth_Accounts_Stddev_Fields>;
    stddev_pop?: Maybe<Auth_Accounts_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Auth_Accounts_Stddev_Samp_Fields>;
    sum?: Maybe<Auth_Accounts_Sum_Fields>;
    var_pop?: Maybe<Auth_Accounts_Var_Pop_Fields>;
    var_samp?: Maybe<Auth_Accounts_Var_Samp_Fields>;
    variance?: Maybe<Auth_Accounts_Variance_Fields>;
};
/** aggregate fields of "auth_accounts" */
export type Auth_Accounts_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};
/** order by aggregate values of table "auth_accounts" */
export type Auth_Accounts_Aggregate_Order_By = {
    avg?: InputMaybe<Auth_Accounts_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Auth_Accounts_Max_Order_By>;
    min?: InputMaybe<Auth_Accounts_Min_Order_By>;
    stddev?: InputMaybe<Auth_Accounts_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Auth_Accounts_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Auth_Accounts_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Auth_Accounts_Sum_Order_By>;
    var_pop?: InputMaybe<Auth_Accounts_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Auth_Accounts_Var_Samp_Order_By>;
    variance?: InputMaybe<Auth_Accounts_Variance_Order_By>;
};
/** input type for inserting array relation for remote table "auth_accounts" */
export type Auth_Accounts_Arr_Rel_Insert_Input = {
    data: Array<Auth_Accounts_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Auth_Accounts_On_Conflict>;
};
/** aggregate avg on columns */
export type Auth_Accounts_Avg_Fields = {
    __typename?: 'auth_accounts_avg_fields';
    expires_at?: Maybe<Scalars['Float']['output']>;
    refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};
/** order by avg() on columns of table "auth_accounts" */
export type Auth_Accounts_Avg_Order_By = {
    expires_at?: InputMaybe<Order_By>;
    refresh_token_expires_in?: InputMaybe<Order_By>;
};
/** Boolean expression to filter rows from the table "auth_accounts". All fields are combined with a logical 'AND'. */
export type Auth_Accounts_Bool_Exp = {
    _and?: InputMaybe<Array<Auth_Accounts_Bool_Exp>>;
    _not?: InputMaybe<Auth_Accounts_Bool_Exp>;
    _or?: InputMaybe<Array<Auth_Accounts_Bool_Exp>>;
    access_token?: InputMaybe<String_Comparison_Exp>;
    expires_at?: InputMaybe<Bigint_Comparison_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    id_token?: InputMaybe<String_Comparison_Exp>;
    oauth_token?: InputMaybe<String_Comparison_Exp>;
    oauth_token_secret?: InputMaybe<String_Comparison_Exp>;
    provider?: InputMaybe<String_Comparison_Exp>;
    providerAccountId?: InputMaybe<String_Comparison_Exp>;
    refresh_token?: InputMaybe<String_Comparison_Exp>;
    refresh_token_expires_in?: InputMaybe<Bigint_Comparison_Exp>;
    scope?: InputMaybe<String_Comparison_Exp>;
    session_state?: InputMaybe<String_Comparison_Exp>;
    token_type?: InputMaybe<String_Comparison_Exp>;
    type?: InputMaybe<String_Comparison_Exp>;
    user?: InputMaybe<Auth_Users_Bool_Exp>;
    userId?: InputMaybe<Uuid_Comparison_Exp>;
};
/** unique or primary key constraints on table "auth_accounts" */
export type Auth_Accounts_Constraint = 
/** unique or primary key constraint on columns "id" */
'auth_accounts_pkey';
/** input type for incrementing numeric columns in table "auth_accounts" */
export type Auth_Accounts_Inc_Input = {
    expires_at?: InputMaybe<Scalars['bigint']['input']>;
    refresh_token_expires_in?: InputMaybe<Scalars['bigint']['input']>;
};
/** input type for inserting data into table "auth_accounts" */
export type Auth_Accounts_Insert_Input = {
    access_token?: InputMaybe<Scalars['String']['input']>;
    expires_at?: InputMaybe<Scalars['bigint']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    id_token?: InputMaybe<Scalars['String']['input']>;
    oauth_token?: InputMaybe<Scalars['String']['input']>;
    oauth_token_secret?: InputMaybe<Scalars['String']['input']>;
    provider?: InputMaybe<Scalars['String']['input']>;
    providerAccountId?: InputMaybe<Scalars['String']['input']>;
    refresh_token?: InputMaybe<Scalars['String']['input']>;
    refresh_token_expires_in?: InputMaybe<Scalars['bigint']['input']>;
    scope?: InputMaybe<Scalars['String']['input']>;
    session_state?: InputMaybe<Scalars['String']['input']>;
    token_type?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<Scalars['String']['input']>;
    user?: InputMaybe<Auth_Users_Obj_Rel_Insert_Input>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};
/** aggregate max on columns */
export type Auth_Accounts_Max_Fields = {
    __typename?: 'auth_accounts_max_fields';
    access_token?: Maybe<Scalars['String']['output']>;
    expires_at?: Maybe<Scalars['bigint']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    id_token?: Maybe<Scalars['String']['output']>;
    oauth_token?: Maybe<Scalars['String']['output']>;
    oauth_token_secret?: Maybe<Scalars['String']['output']>;
    provider?: Maybe<Scalars['String']['output']>;
    providerAccountId?: Maybe<Scalars['String']['output']>;
    refresh_token?: Maybe<Scalars['String']['output']>;
    refresh_token_expires_in?: Maybe<Scalars['bigint']['output']>;
    scope?: Maybe<Scalars['String']['output']>;
    session_state?: Maybe<Scalars['String']['output']>;
    token_type?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    userId?: Maybe<Scalars['uuid']['output']>;
};
/** order by max() on columns of table "auth_accounts" */
export type Auth_Accounts_Max_Order_By = {
    access_token?: InputMaybe<Order_By>;
    expires_at?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    id_token?: InputMaybe<Order_By>;
    oauth_token?: InputMaybe<Order_By>;
    oauth_token_secret?: InputMaybe<Order_By>;
    provider?: InputMaybe<Order_By>;
    providerAccountId?: InputMaybe<Order_By>;
    refresh_token?: InputMaybe<Order_By>;
    refresh_token_expires_in?: InputMaybe<Order_By>;
    scope?: InputMaybe<Order_By>;
    session_state?: InputMaybe<Order_By>;
    token_type?: InputMaybe<Order_By>;
    type?: InputMaybe<Order_By>;
    userId?: InputMaybe<Order_By>;
};
/** aggregate min on columns */
export type Auth_Accounts_Min_Fields = {
    __typename?: 'auth_accounts_min_fields';
    access_token?: Maybe<Scalars['String']['output']>;
    expires_at?: Maybe<Scalars['bigint']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    id_token?: Maybe<Scalars['String']['output']>;
    oauth_token?: Maybe<Scalars['String']['output']>;
    oauth_token_secret?: Maybe<Scalars['String']['output']>;
    provider?: Maybe<Scalars['String']['output']>;
    providerAccountId?: Maybe<Scalars['String']['output']>;
    refresh_token?: Maybe<Scalars['String']['output']>;
    refresh_token_expires_in?: Maybe<Scalars['bigint']['output']>;
    scope?: Maybe<Scalars['String']['output']>;
    session_state?: Maybe<Scalars['String']['output']>;
    token_type?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    userId?: Maybe<Scalars['uuid']['output']>;
};
/** order by min() on columns of table "auth_accounts" */
export type Auth_Accounts_Min_Order_By = {
    access_token?: InputMaybe<Order_By>;
    expires_at?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    id_token?: InputMaybe<Order_By>;
    oauth_token?: InputMaybe<Order_By>;
    oauth_token_secret?: InputMaybe<Order_By>;
    provider?: InputMaybe<Order_By>;
    providerAccountId?: InputMaybe<Order_By>;
    refresh_token?: InputMaybe<Order_By>;
    refresh_token_expires_in?: InputMaybe<Order_By>;
    scope?: InputMaybe<Order_By>;
    session_state?: InputMaybe<Order_By>;
    token_type?: InputMaybe<Order_By>;
    type?: InputMaybe<Order_By>;
    userId?: InputMaybe<Order_By>;
};
/** response of any mutation on the table "auth_accounts" */
export type Auth_Accounts_Mutation_Response = {
    __typename?: 'auth_accounts_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Auth_Accounts>;
};
/** on_conflict condition type for table "auth_accounts" */
export type Auth_Accounts_On_Conflict = {
    constraint: Auth_Accounts_Constraint;
    update_columns?: Array<Auth_Accounts_Update_Column>;
    where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};
/** Ordering options when selecting data from "auth_accounts". */
export type Auth_Accounts_Order_By = {
    access_token?: InputMaybe<Order_By>;
    expires_at?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    id_token?: InputMaybe<Order_By>;
    oauth_token?: InputMaybe<Order_By>;
    oauth_token_secret?: InputMaybe<Order_By>;
    provider?: InputMaybe<Order_By>;
    providerAccountId?: InputMaybe<Order_By>;
    refresh_token?: InputMaybe<Order_By>;
    refresh_token_expires_in?: InputMaybe<Order_By>;
    scope?: InputMaybe<Order_By>;
    session_state?: InputMaybe<Order_By>;
    token_type?: InputMaybe<Order_By>;
    type?: InputMaybe<Order_By>;
    user?: InputMaybe<Auth_Users_Order_By>;
    userId?: InputMaybe<Order_By>;
};
/** primary key columns input for table: auth_accounts */
export type Auth_Accounts_Pk_Columns_Input = {
    id: Scalars['uuid']['input'];
};
/** select columns of table "auth_accounts" */
export type Auth_Accounts_Select_Column = 
/** column name */
'access_token'
/** column name */
 | 'expires_at'
/** column name */
 | 'id'
/** column name */
 | 'id_token'
/** column name */
 | 'oauth_token'
/** column name */
 | 'oauth_token_secret'
/** column name */
 | 'provider'
/** column name */
 | 'providerAccountId'
/** column name */
 | 'refresh_token'
/** column name */
 | 'refresh_token_expires_in'
/** column name */
 | 'scope'
/** column name */
 | 'session_state'
/** column name */
 | 'token_type'
/** column name */
 | 'type'
/** column name */
 | 'userId';
/** input type for updating data in table "auth_accounts" */
export type Auth_Accounts_Set_Input = {
    access_token?: InputMaybe<Scalars['String']['input']>;
    expires_at?: InputMaybe<Scalars['bigint']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    id_token?: InputMaybe<Scalars['String']['input']>;
    oauth_token?: InputMaybe<Scalars['String']['input']>;
    oauth_token_secret?: InputMaybe<Scalars['String']['input']>;
    provider?: InputMaybe<Scalars['String']['input']>;
    providerAccountId?: InputMaybe<Scalars['String']['input']>;
    refresh_token?: InputMaybe<Scalars['String']['input']>;
    refresh_token_expires_in?: InputMaybe<Scalars['bigint']['input']>;
    scope?: InputMaybe<Scalars['String']['input']>;
    session_state?: InputMaybe<Scalars['String']['input']>;
    token_type?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<Scalars['String']['input']>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};
/** aggregate stddev on columns */
export type Auth_Accounts_Stddev_Fields = {
    __typename?: 'auth_accounts_stddev_fields';
    expires_at?: Maybe<Scalars['Float']['output']>;
    refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};
/** order by stddev() on columns of table "auth_accounts" */
export type Auth_Accounts_Stddev_Order_By = {
    expires_at?: InputMaybe<Order_By>;
    refresh_token_expires_in?: InputMaybe<Order_By>;
};
/** aggregate stddev_pop on columns */
export type Auth_Accounts_Stddev_Pop_Fields = {
    __typename?: 'auth_accounts_stddev_pop_fields';
    expires_at?: Maybe<Scalars['Float']['output']>;
    refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};
/** order by stddev_pop() on columns of table "auth_accounts" */
export type Auth_Accounts_Stddev_Pop_Order_By = {
    expires_at?: InputMaybe<Order_By>;
    refresh_token_expires_in?: InputMaybe<Order_By>;
};
/** aggregate stddev_samp on columns */
export type Auth_Accounts_Stddev_Samp_Fields = {
    __typename?: 'auth_accounts_stddev_samp_fields';
    expires_at?: Maybe<Scalars['Float']['output']>;
    refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};
/** order by stddev_samp() on columns of table "auth_accounts" */
export type Auth_Accounts_Stddev_Samp_Order_By = {
    expires_at?: InputMaybe<Order_By>;
    refresh_token_expires_in?: InputMaybe<Order_By>;
};
/** Streaming cursor of the table "auth_accounts" */
export type Auth_Accounts_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Auth_Accounts_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};
/** Initial value of the column from where the streaming should start */
export type Auth_Accounts_Stream_Cursor_Value_Input = {
    access_token?: InputMaybe<Scalars['String']['input']>;
    expires_at?: InputMaybe<Scalars['bigint']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    id_token?: InputMaybe<Scalars['String']['input']>;
    oauth_token?: InputMaybe<Scalars['String']['input']>;
    oauth_token_secret?: InputMaybe<Scalars['String']['input']>;
    provider?: InputMaybe<Scalars['String']['input']>;
    providerAccountId?: InputMaybe<Scalars['String']['input']>;
    refresh_token?: InputMaybe<Scalars['String']['input']>;
    refresh_token_expires_in?: InputMaybe<Scalars['bigint']['input']>;
    scope?: InputMaybe<Scalars['String']['input']>;
    session_state?: InputMaybe<Scalars['String']['input']>;
    token_type?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<Scalars['String']['input']>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};
/** aggregate sum on columns */
export type Auth_Accounts_Sum_Fields = {
    __typename?: 'auth_accounts_sum_fields';
    expires_at?: Maybe<Scalars['bigint']['output']>;
    refresh_token_expires_in?: Maybe<Scalars['bigint']['output']>;
};
/** order by sum() on columns of table "auth_accounts" */
export type Auth_Accounts_Sum_Order_By = {
    expires_at?: InputMaybe<Order_By>;
    refresh_token_expires_in?: InputMaybe<Order_By>;
};
/** update columns of table "auth_accounts" */
export type Auth_Accounts_Update_Column = 
/** column name */
'access_token'
/** column name */
 | 'expires_at'
/** column name */
 | 'id'
/** column name */
 | 'id_token'
/** column name */
 | 'oauth_token'
/** column name */
 | 'oauth_token_secret'
/** column name */
 | 'provider'
/** column name */
 | 'providerAccountId'
/** column name */
 | 'refresh_token'
/** column name */
 | 'refresh_token_expires_in'
/** column name */
 | 'scope'
/** column name */
 | 'session_state'
/** column name */
 | 'token_type'
/** column name */
 | 'type'
/** column name */
 | 'userId';
export type Auth_Accounts_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Auth_Accounts_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Auth_Accounts_Set_Input>;
    /** filter the rows which have to be updated */
    where: Auth_Accounts_Bool_Exp;
};
/** aggregate var_pop on columns */
export type Auth_Accounts_Var_Pop_Fields = {
    __typename?: 'auth_accounts_var_pop_fields';
    expires_at?: Maybe<Scalars['Float']['output']>;
    refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};
/** order by var_pop() on columns of table "auth_accounts" */
export type Auth_Accounts_Var_Pop_Order_By = {
    expires_at?: InputMaybe<Order_By>;
    refresh_token_expires_in?: InputMaybe<Order_By>;
};
/** aggregate var_samp on columns */
export type Auth_Accounts_Var_Samp_Fields = {
    __typename?: 'auth_accounts_var_samp_fields';
    expires_at?: Maybe<Scalars['Float']['output']>;
    refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};
/** order by var_samp() on columns of table "auth_accounts" */
export type Auth_Accounts_Var_Samp_Order_By = {
    expires_at?: InputMaybe<Order_By>;
    refresh_token_expires_in?: InputMaybe<Order_By>;
};
/** aggregate variance on columns */
export type Auth_Accounts_Variance_Fields = {
    __typename?: 'auth_accounts_variance_fields';
    expires_at?: Maybe<Scalars['Float']['output']>;
    refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};
/** order by variance() on columns of table "auth_accounts" */
export type Auth_Accounts_Variance_Order_By = {
    expires_at?: InputMaybe<Order_By>;
    refresh_token_expires_in?: InputMaybe<Order_By>;
};
/** columns and relationships of "auth_sessions" */
export type Auth_Sessions = {
    __typename?: 'auth_sessions';
    expires?: Maybe<Scalars['timestamptz']['output']>;
    id: Scalars['uuid']['output'];
    sessionToken: Scalars['String']['output'];
    /** An object relationship */
    user: Auth_Users;
    userId: Scalars['uuid']['output'];
};
/** aggregated selection of "auth_sessions" */
export type Auth_Sessions_Aggregate = {
    __typename?: 'auth_sessions_aggregate';
    aggregate?: Maybe<Auth_Sessions_Aggregate_Fields>;
    nodes: Array<Auth_Sessions>;
};
export type Auth_Sessions_Aggregate_Bool_Exp = {
    count?: InputMaybe<Auth_Sessions_Aggregate_Bool_Exp_Count>;
};
export type Auth_Sessions_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Auth_Sessions_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Auth_Sessions_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};
/** aggregate fields of "auth_sessions" */
export type Auth_Sessions_Aggregate_Fields = {
    __typename?: 'auth_sessions_aggregate_fields';
    count: Scalars['Int']['output'];
    max?: Maybe<Auth_Sessions_Max_Fields>;
    min?: Maybe<Auth_Sessions_Min_Fields>;
};
/** aggregate fields of "auth_sessions" */
export type Auth_Sessions_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Auth_Sessions_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};
/** order by aggregate values of table "auth_sessions" */
export type Auth_Sessions_Aggregate_Order_By = {
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Auth_Sessions_Max_Order_By>;
    min?: InputMaybe<Auth_Sessions_Min_Order_By>;
};
/** input type for inserting array relation for remote table "auth_sessions" */
export type Auth_Sessions_Arr_Rel_Insert_Input = {
    data: Array<Auth_Sessions_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Auth_Sessions_On_Conflict>;
};
/** Boolean expression to filter rows from the table "auth_sessions". All fields are combined with a logical 'AND'. */
export type Auth_Sessions_Bool_Exp = {
    _and?: InputMaybe<Array<Auth_Sessions_Bool_Exp>>;
    _not?: InputMaybe<Auth_Sessions_Bool_Exp>;
    _or?: InputMaybe<Array<Auth_Sessions_Bool_Exp>>;
    expires?: InputMaybe<Timestamptz_Comparison_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    sessionToken?: InputMaybe<String_Comparison_Exp>;
    user?: InputMaybe<Auth_Users_Bool_Exp>;
    userId?: InputMaybe<Uuid_Comparison_Exp>;
};
/** unique or primary key constraints on table "auth_sessions" */
export type Auth_Sessions_Constraint = 
/** unique or primary key constraint on columns "id" */
'auth_sessions_pkey';
/** input type for inserting data into table "auth_sessions" */
export type Auth_Sessions_Insert_Input = {
    expires?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    sessionToken?: InputMaybe<Scalars['String']['input']>;
    user?: InputMaybe<Auth_Users_Obj_Rel_Insert_Input>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};
/** aggregate max on columns */
export type Auth_Sessions_Max_Fields = {
    __typename?: 'auth_sessions_max_fields';
    expires?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    sessionToken?: Maybe<Scalars['String']['output']>;
    userId?: Maybe<Scalars['uuid']['output']>;
};
/** order by max() on columns of table "auth_sessions" */
export type Auth_Sessions_Max_Order_By = {
    expires?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    sessionToken?: InputMaybe<Order_By>;
    userId?: InputMaybe<Order_By>;
};
/** aggregate min on columns */
export type Auth_Sessions_Min_Fields = {
    __typename?: 'auth_sessions_min_fields';
    expires?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    sessionToken?: Maybe<Scalars['String']['output']>;
    userId?: Maybe<Scalars['uuid']['output']>;
};
/** order by min() on columns of table "auth_sessions" */
export type Auth_Sessions_Min_Order_By = {
    expires?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    sessionToken?: InputMaybe<Order_By>;
    userId?: InputMaybe<Order_By>;
};
/** response of any mutation on the table "auth_sessions" */
export type Auth_Sessions_Mutation_Response = {
    __typename?: 'auth_sessions_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Auth_Sessions>;
};
/** on_conflict condition type for table "auth_sessions" */
export type Auth_Sessions_On_Conflict = {
    constraint: Auth_Sessions_Constraint;
    update_columns?: Array<Auth_Sessions_Update_Column>;
    where?: InputMaybe<Auth_Sessions_Bool_Exp>;
};
/** Ordering options when selecting data from "auth_sessions". */
export type Auth_Sessions_Order_By = {
    expires?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    sessionToken?: InputMaybe<Order_By>;
    user?: InputMaybe<Auth_Users_Order_By>;
    userId?: InputMaybe<Order_By>;
};
/** primary key columns input for table: auth_sessions */
export type Auth_Sessions_Pk_Columns_Input = {
    id: Scalars['uuid']['input'];
};
/** select columns of table "auth_sessions" */
export type Auth_Sessions_Select_Column = 
/** column name */
'expires'
/** column name */
 | 'id'
/** column name */
 | 'sessionToken'
/** column name */
 | 'userId';
/** input type for updating data in table "auth_sessions" */
export type Auth_Sessions_Set_Input = {
    expires?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    sessionToken?: InputMaybe<Scalars['String']['input']>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};
/** Streaming cursor of the table "auth_sessions" */
export type Auth_Sessions_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Auth_Sessions_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};
/** Initial value of the column from where the streaming should start */
export type Auth_Sessions_Stream_Cursor_Value_Input = {
    expires?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    sessionToken?: InputMaybe<Scalars['String']['input']>;
    userId?: InputMaybe<Scalars['uuid']['input']>;
};
/** update columns of table "auth_sessions" */
export type Auth_Sessions_Update_Column = 
/** column name */
'expires'
/** column name */
 | 'id'
/** column name */
 | 'sessionToken'
/** column name */
 | 'userId';
export type Auth_Sessions_Updates = {
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Auth_Sessions_Set_Input>;
    /** filter the rows which have to be updated */
    where: Auth_Sessions_Bool_Exp;
};
/** columns and relationships of "auth_users" */
export type Auth_Users = {
    __typename?: 'auth_users';
    /** An array relationship */
    accounts: Array<Auth_Accounts>;
    /** An aggregate relationship */
    accounts_aggregate: Auth_Accounts_Aggregate;
    /** An array relationship */
    createdProfiles: Array<Profiles>;
    /** An aggregate relationship */
    createdProfiles_aggregate: Profiles_Aggregate;
    email?: Maybe<Scalars['String']['output']>;
    emailVerified?: Maybe<Scalars['timestamptz']['output']>;
    id: Scalars['uuid']['output'];
    /** An array relationship */
    identityVerifications: Array<Identity_Verifications>;
    /** An aggregate relationship */
    identityVerifications_aggregate: Identity_Verifications_Aggregate;
    image?: Maybe<Scalars['String']['output']>;
    /** An array relationship */
    managedProfiles: Array<ProfileManagers>;
    /** An aggregate relationship */
    managedProfiles_aggregate: ProfileManagers_Aggregate;
    name?: Maybe<Scalars['String']['output']>;
    /** An object relationship */
    profile?: Maybe<Profiles>;
    /** An array relationship */
    sessions: Array<Auth_Sessions>;
    /** An aggregate relationship */
    sessions_aggregate: Auth_Sessions_Aggregate;
};
/** columns and relationships of "auth_users" */
export type Auth_UsersAccountsArgs = {
    distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
    where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};
/** columns and relationships of "auth_users" */
export type Auth_UsersAccounts_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
    where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};
/** columns and relationships of "auth_users" */
export type Auth_UsersCreatedProfilesArgs = {
    distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Profiles_Order_By>>;
    where?: InputMaybe<Profiles_Bool_Exp>;
};
/** columns and relationships of "auth_users" */
export type Auth_UsersCreatedProfiles_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Profiles_Order_By>>;
    where?: InputMaybe<Profiles_Bool_Exp>;
};
/** columns and relationships of "auth_users" */
export type Auth_UsersIdentityVerificationsArgs = {
    distinct_on?: InputMaybe<Array<Identity_Verifications_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Identity_Verifications_Order_By>>;
    where?: InputMaybe<Identity_Verifications_Bool_Exp>;
};
/** columns and relationships of "auth_users" */
export type Auth_UsersIdentityVerifications_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Identity_Verifications_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Identity_Verifications_Order_By>>;
    where?: InputMaybe<Identity_Verifications_Bool_Exp>;
};
/** columns and relationships of "auth_users" */
export type Auth_UsersManagedProfilesArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagers_Order_By>>;
    where?: InputMaybe<ProfileManagers_Bool_Exp>;
};
/** columns and relationships of "auth_users" */
export type Auth_UsersManagedProfiles_AggregateArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagers_Order_By>>;
    where?: InputMaybe<ProfileManagers_Bool_Exp>;
};
/** columns and relationships of "auth_users" */
export type Auth_UsersSessionsArgs = {
    distinct_on?: InputMaybe<Array<Auth_Sessions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Sessions_Order_By>>;
    where?: InputMaybe<Auth_Sessions_Bool_Exp>;
};
/** columns and relationships of "auth_users" */
export type Auth_UsersSessions_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Auth_Sessions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Sessions_Order_By>>;
    where?: InputMaybe<Auth_Sessions_Bool_Exp>;
};
/** aggregated selection of "auth_users" */
export type Auth_Users_Aggregate = {
    __typename?: 'auth_users_aggregate';
    aggregate?: Maybe<Auth_Users_Aggregate_Fields>;
    nodes: Array<Auth_Users>;
};
/** aggregate fields of "auth_users" */
export type Auth_Users_Aggregate_Fields = {
    __typename?: 'auth_users_aggregate_fields';
    count: Scalars['Int']['output'];
    max?: Maybe<Auth_Users_Max_Fields>;
    min?: Maybe<Auth_Users_Min_Fields>;
};
/** aggregate fields of "auth_users" */
export type Auth_Users_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Auth_Users_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Boolean expression to filter rows from the table "auth_users". All fields are combined with a logical 'AND'. */
export type Auth_Users_Bool_Exp = {
    _and?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
    _not?: InputMaybe<Auth_Users_Bool_Exp>;
    _or?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
    accounts?: InputMaybe<Auth_Accounts_Bool_Exp>;
    accounts_aggregate?: InputMaybe<Auth_Accounts_Aggregate_Bool_Exp>;
    createdProfiles?: InputMaybe<Profiles_Bool_Exp>;
    createdProfiles_aggregate?: InputMaybe<Profiles_Aggregate_Bool_Exp>;
    email?: InputMaybe<String_Comparison_Exp>;
    emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    identityVerifications?: InputMaybe<Identity_Verifications_Bool_Exp>;
    identityVerifications_aggregate?: InputMaybe<Identity_Verifications_Aggregate_Bool_Exp>;
    image?: InputMaybe<String_Comparison_Exp>;
    managedProfiles?: InputMaybe<ProfileManagers_Bool_Exp>;
    managedProfiles_aggregate?: InputMaybe<ProfileManagers_Aggregate_Bool_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    profile?: InputMaybe<Profiles_Bool_Exp>;
    sessions?: InputMaybe<Auth_Sessions_Bool_Exp>;
    sessions_aggregate?: InputMaybe<Auth_Sessions_Aggregate_Bool_Exp>;
};
/** unique or primary key constraints on table "auth_users" */
export type Auth_Users_Constraint = 
/** unique or primary key constraint on columns "email" */
'auth_users_email_key'
/** unique or primary key constraint on columns "id" */
 | 'auth_users_pkey';
/** input type for inserting data into table "auth_users" */
export type Auth_Users_Insert_Input = {
    accounts?: InputMaybe<Auth_Accounts_Arr_Rel_Insert_Input>;
    createdProfiles?: InputMaybe<Profiles_Arr_Rel_Insert_Input>;
    email?: InputMaybe<Scalars['String']['input']>;
    emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    identityVerifications?: InputMaybe<Identity_Verifications_Arr_Rel_Insert_Input>;
    image?: InputMaybe<Scalars['String']['input']>;
    managedProfiles?: InputMaybe<ProfileManagers_Arr_Rel_Insert_Input>;
    name?: InputMaybe<Scalars['String']['input']>;
    profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
    sessions?: InputMaybe<Auth_Sessions_Arr_Rel_Insert_Input>;
};
/** aggregate max on columns */
export type Auth_Users_Max_Fields = {
    __typename?: 'auth_users_max_fields';
    email?: Maybe<Scalars['String']['output']>;
    emailVerified?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    image?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
/** aggregate min on columns */
export type Auth_Users_Min_Fields = {
    __typename?: 'auth_users_min_fields';
    email?: Maybe<Scalars['String']['output']>;
    emailVerified?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    image?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
/** response of any mutation on the table "auth_users" */
export type Auth_Users_Mutation_Response = {
    __typename?: 'auth_users_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Auth_Users>;
};
/** input type for inserting object relation for remote table "auth_users" */
export type Auth_Users_Obj_Rel_Insert_Input = {
    data: Auth_Users_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};
/** on_conflict condition type for table "auth_users" */
export type Auth_Users_On_Conflict = {
    constraint: Auth_Users_Constraint;
    update_columns?: Array<Auth_Users_Update_Column>;
    where?: InputMaybe<Auth_Users_Bool_Exp>;
};
/** Ordering options when selecting data from "auth_users". */
export type Auth_Users_Order_By = {
    accounts_aggregate?: InputMaybe<Auth_Accounts_Aggregate_Order_By>;
    createdProfiles_aggregate?: InputMaybe<Profiles_Aggregate_Order_By>;
    email?: InputMaybe<Order_By>;
    emailVerified?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    identityVerifications_aggregate?: InputMaybe<Identity_Verifications_Aggregate_Order_By>;
    image?: InputMaybe<Order_By>;
    managedProfiles_aggregate?: InputMaybe<ProfileManagers_Aggregate_Order_By>;
    name?: InputMaybe<Order_By>;
    profile?: InputMaybe<Profiles_Order_By>;
    sessions_aggregate?: InputMaybe<Auth_Sessions_Aggregate_Order_By>;
};
/** primary key columns input for table: auth_users */
export type Auth_Users_Pk_Columns_Input = {
    id: Scalars['uuid']['input'];
};
/** select columns of table "auth_users" */
export type Auth_Users_Select_Column = 
/** column name */
'email'
/** column name */
 | 'emailVerified'
/** column name */
 | 'id'
/** column name */
 | 'image'
/** column name */
 | 'name';
/** input type for updating data in table "auth_users" */
export type Auth_Users_Set_Input = {
    email?: InputMaybe<Scalars['String']['input']>;
    emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
};
/** Streaming cursor of the table "auth_users" */
export type Auth_Users_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Auth_Users_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};
/** Initial value of the column from where the streaming should start */
export type Auth_Users_Stream_Cursor_Value_Input = {
    email?: InputMaybe<Scalars['String']['input']>;
    emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
};
/** update columns of table "auth_users" */
export type Auth_Users_Update_Column = 
/** column name */
'email'
/** column name */
 | 'emailVerified'
/** column name */
 | 'id'
/** column name */
 | 'image'
/** column name */
 | 'name';
export type Auth_Users_Updates = {
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Auth_Users_Set_Input>;
    /** filter the rows which have to be updated */
    where: Auth_Users_Bool_Exp;
};
/** columns and relationships of "auth_verification_tokens" */
export type Auth_Verification_Tokens = {
    __typename?: 'auth_verification_tokens';
    expires?: Maybe<Scalars['timestamptz']['output']>;
    identifier: Scalars['String']['output'];
    token: Scalars['String']['output'];
};
/** aggregated selection of "auth_verification_tokens" */
export type Auth_Verification_Tokens_Aggregate = {
    __typename?: 'auth_verification_tokens_aggregate';
    aggregate?: Maybe<Auth_Verification_Tokens_Aggregate_Fields>;
    nodes: Array<Auth_Verification_Tokens>;
};
/** aggregate fields of "auth_verification_tokens" */
export type Auth_Verification_Tokens_Aggregate_Fields = {
    __typename?: 'auth_verification_tokens_aggregate_fields';
    count: Scalars['Int']['output'];
    max?: Maybe<Auth_Verification_Tokens_Max_Fields>;
    min?: Maybe<Auth_Verification_Tokens_Min_Fields>;
};
/** aggregate fields of "auth_verification_tokens" */
export type Auth_Verification_Tokens_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Auth_Verification_Tokens_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Boolean expression to filter rows from the table "auth_verification_tokens". All fields are combined with a logical 'AND'. */
export type Auth_Verification_Tokens_Bool_Exp = {
    _and?: InputMaybe<Array<Auth_Verification_Tokens_Bool_Exp>>;
    _not?: InputMaybe<Auth_Verification_Tokens_Bool_Exp>;
    _or?: InputMaybe<Array<Auth_Verification_Tokens_Bool_Exp>>;
    expires?: InputMaybe<Timestamptz_Comparison_Exp>;
    identifier?: InputMaybe<String_Comparison_Exp>;
    token?: InputMaybe<String_Comparison_Exp>;
};
/** unique or primary key constraints on table "auth_verification_tokens" */
export type Auth_Verification_Tokens_Constraint = 
/** unique or primary key constraint on columns "token" */
'auth_verification_tokens_pkey';
/** input type for inserting data into table "auth_verification_tokens" */
export type Auth_Verification_Tokens_Insert_Input = {
    expires?: InputMaybe<Scalars['timestamptz']['input']>;
    identifier?: InputMaybe<Scalars['String']['input']>;
    token?: InputMaybe<Scalars['String']['input']>;
};
/** aggregate max on columns */
export type Auth_Verification_Tokens_Max_Fields = {
    __typename?: 'auth_verification_tokens_max_fields';
    expires?: Maybe<Scalars['timestamptz']['output']>;
    identifier?: Maybe<Scalars['String']['output']>;
    token?: Maybe<Scalars['String']['output']>;
};
/** aggregate min on columns */
export type Auth_Verification_Tokens_Min_Fields = {
    __typename?: 'auth_verification_tokens_min_fields';
    expires?: Maybe<Scalars['timestamptz']['output']>;
    identifier?: Maybe<Scalars['String']['output']>;
    token?: Maybe<Scalars['String']['output']>;
};
/** response of any mutation on the table "auth_verification_tokens" */
export type Auth_Verification_Tokens_Mutation_Response = {
    __typename?: 'auth_verification_tokens_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Auth_Verification_Tokens>;
};
/** on_conflict condition type for table "auth_verification_tokens" */
export type Auth_Verification_Tokens_On_Conflict = {
    constraint: Auth_Verification_Tokens_Constraint;
    update_columns?: Array<Auth_Verification_Tokens_Update_Column>;
    where?: InputMaybe<Auth_Verification_Tokens_Bool_Exp>;
};
/** Ordering options when selecting data from "auth_verification_tokens". */
export type Auth_Verification_Tokens_Order_By = {
    expires?: InputMaybe<Order_By>;
    identifier?: InputMaybe<Order_By>;
    token?: InputMaybe<Order_By>;
};
/** primary key columns input for table: auth_verification_tokens */
export type Auth_Verification_Tokens_Pk_Columns_Input = {
    token: Scalars['String']['input'];
};
/** select columns of table "auth_verification_tokens" */
export type Auth_Verification_Tokens_Select_Column = 
/** column name */
'expires'
/** column name */
 | 'identifier'
/** column name */
 | 'token';
/** input type for updating data in table "auth_verification_tokens" */
export type Auth_Verification_Tokens_Set_Input = {
    expires?: InputMaybe<Scalars['timestamptz']['input']>;
    identifier?: InputMaybe<Scalars['String']['input']>;
    token?: InputMaybe<Scalars['String']['input']>;
};
/** Streaming cursor of the table "auth_verification_tokens" */
export type Auth_Verification_Tokens_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Auth_Verification_Tokens_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};
/** Initial value of the column from where the streaming should start */
export type Auth_Verification_Tokens_Stream_Cursor_Value_Input = {
    expires?: InputMaybe<Scalars['timestamptz']['input']>;
    identifier?: InputMaybe<Scalars['String']['input']>;
    token?: InputMaybe<Scalars['String']['input']>;
};
/** update columns of table "auth_verification_tokens" */
export type Auth_Verification_Tokens_Update_Column = 
/** column name */
'expires'
/** column name */
 | 'identifier'
/** column name */
 | 'token';
export type Auth_Verification_Tokens_Updates = {
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Auth_Verification_Tokens_Set_Input>;
    /** filter the rows which have to be updated */
    where: Auth_Verification_Tokens_Bool_Exp;
};
/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['bigint']['input']>;
    _gt?: InputMaybe<Scalars['bigint']['input']>;
    _gte?: InputMaybe<Scalars['bigint']['input']>;
    _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    _lt?: InputMaybe<Scalars['bigint']['input']>;
    _lte?: InputMaybe<Scalars['bigint']['input']>;
    _neq?: InputMaybe<Scalars['bigint']['input']>;
    _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};
/** ordering argument of a cursor */
export type Cursor_Ordering = 
/** ascending ordering of the cursor */
'ASC'
/** descending ordering of the cursor */
 | 'DESC';
/** Storage of when we verify identity and the results */
export type Identity_Verifications = {
    __typename?: 'identity_verifications';
    authUserId: Scalars['uuid']['output'];
    createdAt: Scalars['timestamptz']['output'];
    id: Scalars['uuid']['output'];
    metadata?: Maybe<Scalars['jsonb']['output']>;
    updatedAt: Scalars['timestamptz']['output'];
    verificationSource?: Maybe<Scalars['String']['output']>;
    verificationStatus?: Maybe<Scalars['String']['output']>;
    verifiedAt?: Maybe<Scalars['timestamptz']['output']>;
};
/** Storage of when we verify identity and the results */
export type Identity_VerificationsMetadataArgs = {
    path?: InputMaybe<Scalars['String']['input']>;
};
/** aggregated selection of "identity_verifications" */
export type Identity_Verifications_Aggregate = {
    __typename?: 'identity_verifications_aggregate';
    aggregate?: Maybe<Identity_Verifications_Aggregate_Fields>;
    nodes: Array<Identity_Verifications>;
};
export type Identity_Verifications_Aggregate_Bool_Exp = {
    count?: InputMaybe<Identity_Verifications_Aggregate_Bool_Exp_Count>;
};
export type Identity_Verifications_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Identity_Verifications_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Identity_Verifications_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};
/** aggregate fields of "identity_verifications" */
export type Identity_Verifications_Aggregate_Fields = {
    __typename?: 'identity_verifications_aggregate_fields';
    count: Scalars['Int']['output'];
    max?: Maybe<Identity_Verifications_Max_Fields>;
    min?: Maybe<Identity_Verifications_Min_Fields>;
};
/** aggregate fields of "identity_verifications" */
export type Identity_Verifications_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Identity_Verifications_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};
/** order by aggregate values of table "identity_verifications" */
export type Identity_Verifications_Aggregate_Order_By = {
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Identity_Verifications_Max_Order_By>;
    min?: InputMaybe<Identity_Verifications_Min_Order_By>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export type Identity_Verifications_Append_Input = {
    metadata?: InputMaybe<Scalars['jsonb']['input']>;
};
/** input type for inserting array relation for remote table "identity_verifications" */
export type Identity_Verifications_Arr_Rel_Insert_Input = {
    data: Array<Identity_Verifications_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Identity_Verifications_On_Conflict>;
};
/** Boolean expression to filter rows from the table "identity_verifications". All fields are combined with a logical 'AND'. */
export type Identity_Verifications_Bool_Exp = {
    _and?: InputMaybe<Array<Identity_Verifications_Bool_Exp>>;
    _not?: InputMaybe<Identity_Verifications_Bool_Exp>;
    _or?: InputMaybe<Array<Identity_Verifications_Bool_Exp>>;
    authUserId?: InputMaybe<Uuid_Comparison_Exp>;
    createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    metadata?: InputMaybe<Jsonb_Comparison_Exp>;
    updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    verificationSource?: InputMaybe<String_Comparison_Exp>;
    verificationStatus?: InputMaybe<String_Comparison_Exp>;
    verifiedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};
/** unique or primary key constraints on table "identity_verifications" */
export type Identity_Verifications_Constraint = 
/** unique or primary key constraint on columns "id" */
'identity_verifications_pkey';
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Identity_Verifications_Delete_At_Path_Input = {
    metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Identity_Verifications_Delete_Elem_Input = {
    metadata?: InputMaybe<Scalars['Int']['input']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Identity_Verifications_Delete_Key_Input = {
    metadata?: InputMaybe<Scalars['String']['input']>;
};
/** input type for inserting data into table "identity_verifications" */
export type Identity_Verifications_Insert_Input = {
    authUserId?: InputMaybe<Scalars['uuid']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    metadata?: InputMaybe<Scalars['jsonb']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
    verificationSource?: InputMaybe<Scalars['String']['input']>;
    verificationStatus?: InputMaybe<Scalars['String']['input']>;
    verifiedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};
/** aggregate max on columns */
export type Identity_Verifications_Max_Fields = {
    __typename?: 'identity_verifications_max_fields';
    authUserId?: Maybe<Scalars['uuid']['output']>;
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
    verificationSource?: Maybe<Scalars['String']['output']>;
    verificationStatus?: Maybe<Scalars['String']['output']>;
    verifiedAt?: Maybe<Scalars['timestamptz']['output']>;
};
/** order by max() on columns of table "identity_verifications" */
export type Identity_Verifications_Max_Order_By = {
    authUserId?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
    verificationSource?: InputMaybe<Order_By>;
    verificationStatus?: InputMaybe<Order_By>;
    verifiedAt?: InputMaybe<Order_By>;
};
/** aggregate min on columns */
export type Identity_Verifications_Min_Fields = {
    __typename?: 'identity_verifications_min_fields';
    authUserId?: Maybe<Scalars['uuid']['output']>;
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
    verificationSource?: Maybe<Scalars['String']['output']>;
    verificationStatus?: Maybe<Scalars['String']['output']>;
    verifiedAt?: Maybe<Scalars['timestamptz']['output']>;
};
/** order by min() on columns of table "identity_verifications" */
export type Identity_Verifications_Min_Order_By = {
    authUserId?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
    verificationSource?: InputMaybe<Order_By>;
    verificationStatus?: InputMaybe<Order_By>;
    verifiedAt?: InputMaybe<Order_By>;
};
/** response of any mutation on the table "identity_verifications" */
export type Identity_Verifications_Mutation_Response = {
    __typename?: 'identity_verifications_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Identity_Verifications>;
};
/** on_conflict condition type for table "identity_verifications" */
export type Identity_Verifications_On_Conflict = {
    constraint: Identity_Verifications_Constraint;
    update_columns?: Array<Identity_Verifications_Update_Column>;
    where?: InputMaybe<Identity_Verifications_Bool_Exp>;
};
/** Ordering options when selecting data from "identity_verifications". */
export type Identity_Verifications_Order_By = {
    authUserId?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    metadata?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
    verificationSource?: InputMaybe<Order_By>;
    verificationStatus?: InputMaybe<Order_By>;
    verifiedAt?: InputMaybe<Order_By>;
};
/** primary key columns input for table: identity_verifications */
export type Identity_Verifications_Pk_Columns_Input = {
    id: Scalars['uuid']['input'];
};
/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Identity_Verifications_Prepend_Input = {
    metadata?: InputMaybe<Scalars['jsonb']['input']>;
};
/** select columns of table "identity_verifications" */
export type Identity_Verifications_Select_Column = 
/** column name */
'authUserId'
/** column name */
 | 'createdAt'
/** column name */
 | 'id'
/** column name */
 | 'metadata'
/** column name */
 | 'updatedAt'
/** column name */
 | 'verificationSource'
/** column name */
 | 'verificationStatus'
/** column name */
 | 'verifiedAt';
/** input type for updating data in table "identity_verifications" */
export type Identity_Verifications_Set_Input = {
    authUserId?: InputMaybe<Scalars['uuid']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    metadata?: InputMaybe<Scalars['jsonb']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
    verificationSource?: InputMaybe<Scalars['String']['input']>;
    verificationStatus?: InputMaybe<Scalars['String']['input']>;
    verifiedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};
/** Streaming cursor of the table "identity_verifications" */
export type Identity_Verifications_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Identity_Verifications_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};
/** Initial value of the column from where the streaming should start */
export type Identity_Verifications_Stream_Cursor_Value_Input = {
    authUserId?: InputMaybe<Scalars['uuid']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    metadata?: InputMaybe<Scalars['jsonb']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
    verificationSource?: InputMaybe<Scalars['String']['input']>;
    verificationStatus?: InputMaybe<Scalars['String']['input']>;
    verifiedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};
/** update columns of table "identity_verifications" */
export type Identity_Verifications_Update_Column = 
/** column name */
'authUserId'
/** column name */
 | 'createdAt'
/** column name */
 | 'id'
/** column name */
 | 'metadata'
/** column name */
 | 'updatedAt'
/** column name */
 | 'verificationSource'
/** column name */
 | 'verificationStatus'
/** column name */
 | 'verifiedAt';
export type Identity_Verifications_Updates = {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: InputMaybe<Identity_Verifications_Append_Input>;
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: InputMaybe<Identity_Verifications_Delete_At_Path_Input>;
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: InputMaybe<Identity_Verifications_Delete_Elem_Input>;
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: InputMaybe<Identity_Verifications_Delete_Key_Input>;
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: InputMaybe<Identity_Verifications_Prepend_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Identity_Verifications_Set_Input>;
    /** filter the rows which have to be updated */
    where: Identity_Verifications_Bool_Exp;
};
export type Jsonb_Cast_Exp = {
    String?: InputMaybe<String_Comparison_Exp>;
};
/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
    _cast?: InputMaybe<Jsonb_Cast_Exp>;
    /** is the column contained in the given json value */
    _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
    /** does the column contain the given json value at the top level */
    _contains?: InputMaybe<Scalars['jsonb']['input']>;
    _eq?: InputMaybe<Scalars['jsonb']['input']>;
    _gt?: InputMaybe<Scalars['jsonb']['input']>;
    _gte?: InputMaybe<Scalars['jsonb']['input']>;
    /** does the string exist as a top-level key in the column */
    _has_key?: InputMaybe<Scalars['String']['input']>;
    /** do all of these strings exist as top-level keys in the column */
    _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
    /** do any of these strings exist as top-level keys in the column */
    _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
    _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    _lt?: InputMaybe<Scalars['jsonb']['input']>;
    _lte?: InputMaybe<Scalars['jsonb']['input']>;
    _neq?: InputMaybe<Scalars['jsonb']['input']>;
    _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};
/** mutation root */
export type Mutation_Root = {
    __typename?: 'mutation_root';
    /** delete single row from the table: "profiles" */
    deleteProfileByKey?: Maybe<Profiles>;
    /** delete single row from the table: "profile_managers" */
    deleteProfileManagerByKey?: Maybe<ProfileManagers>;
    /** delete single row from the table: "profile_managers_invites" */
    deleteProfileManagerInvite?: Maybe<Profile_Managers_Invites>;
    /** delete data from the table: "profile_managers_invites" */
    deleteProfileManagerInvites?: Maybe<Profile_Managers_Invites_Mutation_Response>;
    /** delete data from the table: "profile_managers" */
    deleteProfileManagers?: Maybe<ProfileManagers_Mutation_Response>;
    /** delete data from the table: "profiles" */
    deleteProfiles?: Maybe<Profiles_Mutation_Response>;
    /** delete data from the table: "auth_accounts" */
    delete_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
    /** delete single row from the table: "auth_accounts" */
    delete_auth_accounts_by_pk?: Maybe<Auth_Accounts>;
    /** delete data from the table: "auth_sessions" */
    delete_auth_sessions?: Maybe<Auth_Sessions_Mutation_Response>;
    /** delete single row from the table: "auth_sessions" */
    delete_auth_sessions_by_pk?: Maybe<Auth_Sessions>;
    /** delete data from the table: "auth_users" */
    delete_auth_users?: Maybe<Auth_Users_Mutation_Response>;
    /** delete single row from the table: "auth_users" */
    delete_auth_users_by_pk?: Maybe<Auth_Users>;
    /** delete data from the table: "auth_verification_tokens" */
    delete_auth_verification_tokens?: Maybe<Auth_Verification_Tokens_Mutation_Response>;
    /** delete single row from the table: "auth_verification_tokens" */
    delete_auth_verification_tokens_by_pk?: Maybe<Auth_Verification_Tokens>;
    /** delete data from the table: "identity_verifications" */
    delete_identity_verifications?: Maybe<Identity_Verifications_Mutation_Response>;
    /** delete single row from the table: "identity_verifications" */
    delete_identity_verifications_by_pk?: Maybe<Identity_Verifications>;
    /** delete data from the table: "profile_managers_invites_profiles" */
    delete_profileManagerInviteProfiles?: Maybe<ProfileManagerInviteProfiles_Mutation_Response>;
    /** delete single row from the table: "profile_managers_invites_profiles" */
    delete_profileManagerInviteProfiles_by_pk?: Maybe<ProfileManagerInviteProfiles>;
    /** delete data from the table: "profile_managers_invites_active" */
    delete_profileManagerInvitesActive?: Maybe<ProfileManagerInvitesActive_Mutation_Response>;
    /** insert a single row into the table: "profiles" */
    insertProfile?: Maybe<Profiles>;
    /** insert a single row into the table: "profile_managers" */
    insertProfileManager?: Maybe<ProfileManagers>;
    /** insert a single row into the table: "profile_managers_invites" */
    insertProfileManagerInvite?: Maybe<Profile_Managers_Invites>;
    /** insert data into the table: "profile_managers_invites" */
    insertProfileManagerInvites?: Maybe<Profile_Managers_Invites_Mutation_Response>;
    /** insert data into the table: "profile_managers" */
    insertProfileManagers?: Maybe<ProfileManagers_Mutation_Response>;
    /** insert data into the table: "profiles" */
    insertProfiles?: Maybe<Profiles_Mutation_Response>;
    /** insert data into the table: "auth_accounts" */
    insert_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
    /** insert a single row into the table: "auth_accounts" */
    insert_auth_accounts_one?: Maybe<Auth_Accounts>;
    /** insert data into the table: "auth_sessions" */
    insert_auth_sessions?: Maybe<Auth_Sessions_Mutation_Response>;
    /** insert a single row into the table: "auth_sessions" */
    insert_auth_sessions_one?: Maybe<Auth_Sessions>;
    /** insert data into the table: "auth_users" */
    insert_auth_users?: Maybe<Auth_Users_Mutation_Response>;
    /** insert a single row into the table: "auth_users" */
    insert_auth_users_one?: Maybe<Auth_Users>;
    /** insert data into the table: "auth_verification_tokens" */
    insert_auth_verification_tokens?: Maybe<Auth_Verification_Tokens_Mutation_Response>;
    /** insert a single row into the table: "auth_verification_tokens" */
    insert_auth_verification_tokens_one?: Maybe<Auth_Verification_Tokens>;
    /** insert data into the table: "identity_verifications" */
    insert_identity_verifications?: Maybe<Identity_Verifications_Mutation_Response>;
    /** insert a single row into the table: "identity_verifications" */
    insert_identity_verifications_one?: Maybe<Identity_Verifications>;
    /** insert data into the table: "profile_managers_invites_profiles" */
    insert_profileManagerInviteProfiles?: Maybe<ProfileManagerInviteProfiles_Mutation_Response>;
    /** insert a single row into the table: "profile_managers_invites_profiles" */
    insert_profileManagerInviteProfiles_one?: Maybe<ProfileManagerInviteProfiles>;
    /** insert data into the table: "profile_managers_invites_active" */
    insert_profileManagerInvitesActive?: Maybe<ProfileManagerInvitesActive_Mutation_Response>;
    /** insert a single row into the table: "profile_managers_invites_active" */
    insert_profileManagerInvitesActive_one?: Maybe<ProfileManagerInvitesActive>;
    /** update single row of the table: "profiles" */
    updateProfileByKey?: Maybe<Profiles>;
    /** update single row of the table: "profile_managers" */
    updateProfileManagerByKey?: Maybe<ProfileManagers>;
    /** update single row of the table: "profile_managers_invites" */
    updateProfileManagerInvite?: Maybe<Profile_Managers_Invites>;
    /** update data of the table: "profile_managers_invites" */
    updateProfileManagerInvites?: Maybe<Profile_Managers_Invites_Mutation_Response>;
    /** update data of the table: "profile_managers" */
    updateProfileManagers?: Maybe<ProfileManagers_Mutation_Response>;
    /** update data of the table: "profiles" */
    updateProfiles?: Maybe<Profiles_Mutation_Response>;
    /** update data of the table: "auth_accounts" */
    update_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
    /** update single row of the table: "auth_accounts" */
    update_auth_accounts_by_pk?: Maybe<Auth_Accounts>;
    /** update multiples rows of table: "auth_accounts" */
    update_auth_accounts_many?: Maybe<Array<Maybe<Auth_Accounts_Mutation_Response>>>;
    /** update data of the table: "auth_sessions" */
    update_auth_sessions?: Maybe<Auth_Sessions_Mutation_Response>;
    /** update single row of the table: "auth_sessions" */
    update_auth_sessions_by_pk?: Maybe<Auth_Sessions>;
    /** update multiples rows of table: "auth_sessions" */
    update_auth_sessions_many?: Maybe<Array<Maybe<Auth_Sessions_Mutation_Response>>>;
    /** update data of the table: "auth_users" */
    update_auth_users?: Maybe<Auth_Users_Mutation_Response>;
    /** update single row of the table: "auth_users" */
    update_auth_users_by_pk?: Maybe<Auth_Users>;
    /** update multiples rows of table: "auth_users" */
    update_auth_users_many?: Maybe<Array<Maybe<Auth_Users_Mutation_Response>>>;
    /** update data of the table: "auth_verification_tokens" */
    update_auth_verification_tokens?: Maybe<Auth_Verification_Tokens_Mutation_Response>;
    /** update single row of the table: "auth_verification_tokens" */
    update_auth_verification_tokens_by_pk?: Maybe<Auth_Verification_Tokens>;
    /** update multiples rows of table: "auth_verification_tokens" */
    update_auth_verification_tokens_many?: Maybe<Array<Maybe<Auth_Verification_Tokens_Mutation_Response>>>;
    /** update data of the table: "identity_verifications" */
    update_identity_verifications?: Maybe<Identity_Verifications_Mutation_Response>;
    /** update single row of the table: "identity_verifications" */
    update_identity_verifications_by_pk?: Maybe<Identity_Verifications>;
    /** update multiples rows of table: "identity_verifications" */
    update_identity_verifications_many?: Maybe<Array<Maybe<Identity_Verifications_Mutation_Response>>>;
    /** update data of the table: "profile_managers_invites_profiles" */
    update_profileManagerInviteProfiles?: Maybe<ProfileManagerInviteProfiles_Mutation_Response>;
    /** update single row of the table: "profile_managers_invites_profiles" */
    update_profileManagerInviteProfiles_by_pk?: Maybe<ProfileManagerInviteProfiles>;
    /** update multiples rows of table: "profile_managers_invites_profiles" */
    update_profileManagerInviteProfiles_many?: Maybe<Array<Maybe<ProfileManagerInviteProfiles_Mutation_Response>>>;
    /** update data of the table: "profile_managers_invites_active" */
    update_profileManagerInvitesActive?: Maybe<ProfileManagerInvitesActive_Mutation_Response>;
    /** update multiples rows of table: "profile_managers_invites_active" */
    update_profileManagerInvitesActive_many?: Maybe<Array<Maybe<ProfileManagerInvitesActive_Mutation_Response>>>;
    /** update multiples rows of table: "profile_managers" */
    update_profileManagers_many?: Maybe<Array<Maybe<ProfileManagers_Mutation_Response>>>;
    /** update multiples rows of table: "profile_managers_invites" */
    update_profile_managers_invites_many?: Maybe<Array<Maybe<Profile_Managers_Invites_Mutation_Response>>>;
    /** update multiples rows of table: "profiles" */
    update_profiles_many?: Maybe<Array<Maybe<Profiles_Mutation_Response>>>;
};
/** mutation root */
export type Mutation_RootDeleteProfileByKeyArgs = {
    id: Scalars['uuid']['input'];
};
/** mutation root */
export type Mutation_RootDeleteProfileManagerByKeyArgs = {
    id: Scalars['uuid']['input'];
};
/** mutation root */
export type Mutation_RootDeleteProfileManagerInviteArgs = {
    id: Scalars['uuid']['input'];
};
/** mutation root */
export type Mutation_RootDeleteProfileManagerInvitesArgs = {
    where: Profile_Managers_Invites_Bool_Exp;
};
/** mutation root */
export type Mutation_RootDeleteProfileManagersArgs = {
    where: ProfileManagers_Bool_Exp;
};
/** mutation root */
export type Mutation_RootDeleteProfilesArgs = {
    where: Profiles_Bool_Exp;
};
/** mutation root */
export type Mutation_RootDelete_Auth_AccountsArgs = {
    where: Auth_Accounts_Bool_Exp;
};
/** mutation root */
export type Mutation_RootDelete_Auth_Accounts_By_PkArgs = {
    id: Scalars['uuid']['input'];
};
/** mutation root */
export type Mutation_RootDelete_Auth_SessionsArgs = {
    where: Auth_Sessions_Bool_Exp;
};
/** mutation root */
export type Mutation_RootDelete_Auth_Sessions_By_PkArgs = {
    id: Scalars['uuid']['input'];
};
/** mutation root */
export type Mutation_RootDelete_Auth_UsersArgs = {
    where: Auth_Users_Bool_Exp;
};
/** mutation root */
export type Mutation_RootDelete_Auth_Users_By_PkArgs = {
    id: Scalars['uuid']['input'];
};
/** mutation root */
export type Mutation_RootDelete_Auth_Verification_TokensArgs = {
    where: Auth_Verification_Tokens_Bool_Exp;
};
/** mutation root */
export type Mutation_RootDelete_Auth_Verification_Tokens_By_PkArgs = {
    token: Scalars['String']['input'];
};
/** mutation root */
export type Mutation_RootDelete_Identity_VerificationsArgs = {
    where: Identity_Verifications_Bool_Exp;
};
/** mutation root */
export type Mutation_RootDelete_Identity_Verifications_By_PkArgs = {
    id: Scalars['uuid']['input'];
};
/** mutation root */
export type Mutation_RootDelete_ProfileManagerInviteProfilesArgs = {
    where: ProfileManagerInviteProfiles_Bool_Exp;
};
/** mutation root */
export type Mutation_RootDelete_ProfileManagerInviteProfiles_By_PkArgs = {
    id: Scalars['Int']['input'];
};
/** mutation root */
export type Mutation_RootDelete_ProfileManagerInvitesActiveArgs = {
    where: ProfileManagerInvitesActive_Bool_Exp;
};
/** mutation root */
export type Mutation_RootInsertProfileArgs = {
    object: Profiles_Insert_Input;
    on_conflict?: InputMaybe<Profiles_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsertProfileManagerArgs = {
    object: ProfileManagers_Insert_Input;
    on_conflict?: InputMaybe<ProfileManagers_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsertProfileManagerInviteArgs = {
    object: Profile_Managers_Invites_Insert_Input;
    on_conflict?: InputMaybe<Profile_Managers_Invites_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsertProfileManagerInvitesArgs = {
    objects: Array<Profile_Managers_Invites_Insert_Input>;
    on_conflict?: InputMaybe<Profile_Managers_Invites_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsertProfileManagersArgs = {
    objects: Array<ProfileManagers_Insert_Input>;
    on_conflict?: InputMaybe<ProfileManagers_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsertProfilesArgs = {
    objects: Array<Profiles_Insert_Input>;
    on_conflict?: InputMaybe<Profiles_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsert_Auth_AccountsArgs = {
    objects: Array<Auth_Accounts_Insert_Input>;
    on_conflict?: InputMaybe<Auth_Accounts_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsert_Auth_Accounts_OneArgs = {
    object: Auth_Accounts_Insert_Input;
    on_conflict?: InputMaybe<Auth_Accounts_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsert_Auth_SessionsArgs = {
    objects: Array<Auth_Sessions_Insert_Input>;
    on_conflict?: InputMaybe<Auth_Sessions_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsert_Auth_Sessions_OneArgs = {
    object: Auth_Sessions_Insert_Input;
    on_conflict?: InputMaybe<Auth_Sessions_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsert_Auth_UsersArgs = {
    objects: Array<Auth_Users_Insert_Input>;
    on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsert_Auth_Users_OneArgs = {
    object: Auth_Users_Insert_Input;
    on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsert_Auth_Verification_TokensArgs = {
    objects: Array<Auth_Verification_Tokens_Insert_Input>;
    on_conflict?: InputMaybe<Auth_Verification_Tokens_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsert_Auth_Verification_Tokens_OneArgs = {
    object: Auth_Verification_Tokens_Insert_Input;
    on_conflict?: InputMaybe<Auth_Verification_Tokens_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsert_Identity_VerificationsArgs = {
    objects: Array<Identity_Verifications_Insert_Input>;
    on_conflict?: InputMaybe<Identity_Verifications_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsert_Identity_Verifications_OneArgs = {
    object: Identity_Verifications_Insert_Input;
    on_conflict?: InputMaybe<Identity_Verifications_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsert_ProfileManagerInviteProfilesArgs = {
    objects: Array<ProfileManagerInviteProfiles_Insert_Input>;
    on_conflict?: InputMaybe<ProfileManagerInviteProfiles_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsert_ProfileManagerInviteProfiles_OneArgs = {
    object: ProfileManagerInviteProfiles_Insert_Input;
    on_conflict?: InputMaybe<ProfileManagerInviteProfiles_On_Conflict>;
};
/** mutation root */
export type Mutation_RootInsert_ProfileManagerInvitesActiveArgs = {
    objects: Array<ProfileManagerInvitesActive_Insert_Input>;
};
/** mutation root */
export type Mutation_RootInsert_ProfileManagerInvitesActive_OneArgs = {
    object: ProfileManagerInvitesActive_Insert_Input;
};
/** mutation root */
export type Mutation_RootUpdateProfileByKeyArgs = {
    _set?: InputMaybe<Profiles_Set_Input>;
    pk_columns: Profiles_Pk_Columns_Input;
};
/** mutation root */
export type Mutation_RootUpdateProfileManagerByKeyArgs = {
    _set?: InputMaybe<ProfileManagers_Set_Input>;
    pk_columns: ProfileManagers_Pk_Columns_Input;
};
/** mutation root */
export type Mutation_RootUpdateProfileManagerInviteArgs = {
    _set?: InputMaybe<Profile_Managers_Invites_Set_Input>;
    pk_columns: Profile_Managers_Invites_Pk_Columns_Input;
};
/** mutation root */
export type Mutation_RootUpdateProfileManagerInvitesArgs = {
    _set?: InputMaybe<Profile_Managers_Invites_Set_Input>;
    where: Profile_Managers_Invites_Bool_Exp;
};
/** mutation root */
export type Mutation_RootUpdateProfileManagersArgs = {
    _set?: InputMaybe<ProfileManagers_Set_Input>;
    where: ProfileManagers_Bool_Exp;
};
/** mutation root */
export type Mutation_RootUpdateProfilesArgs = {
    _set?: InputMaybe<Profiles_Set_Input>;
    where: Profiles_Bool_Exp;
};
/** mutation root */
export type Mutation_RootUpdate_Auth_AccountsArgs = {
    _inc?: InputMaybe<Auth_Accounts_Inc_Input>;
    _set?: InputMaybe<Auth_Accounts_Set_Input>;
    where: Auth_Accounts_Bool_Exp;
};
/** mutation root */
export type Mutation_RootUpdate_Auth_Accounts_By_PkArgs = {
    _inc?: InputMaybe<Auth_Accounts_Inc_Input>;
    _set?: InputMaybe<Auth_Accounts_Set_Input>;
    pk_columns: Auth_Accounts_Pk_Columns_Input;
};
/** mutation root */
export type Mutation_RootUpdate_Auth_Accounts_ManyArgs = {
    updates: Array<Auth_Accounts_Updates>;
};
/** mutation root */
export type Mutation_RootUpdate_Auth_SessionsArgs = {
    _set?: InputMaybe<Auth_Sessions_Set_Input>;
    where: Auth_Sessions_Bool_Exp;
};
/** mutation root */
export type Mutation_RootUpdate_Auth_Sessions_By_PkArgs = {
    _set?: InputMaybe<Auth_Sessions_Set_Input>;
    pk_columns: Auth_Sessions_Pk_Columns_Input;
};
/** mutation root */
export type Mutation_RootUpdate_Auth_Sessions_ManyArgs = {
    updates: Array<Auth_Sessions_Updates>;
};
/** mutation root */
export type Mutation_RootUpdate_Auth_UsersArgs = {
    _set?: InputMaybe<Auth_Users_Set_Input>;
    where: Auth_Users_Bool_Exp;
};
/** mutation root */
export type Mutation_RootUpdate_Auth_Users_By_PkArgs = {
    _set?: InputMaybe<Auth_Users_Set_Input>;
    pk_columns: Auth_Users_Pk_Columns_Input;
};
/** mutation root */
export type Mutation_RootUpdate_Auth_Users_ManyArgs = {
    updates: Array<Auth_Users_Updates>;
};
/** mutation root */
export type Mutation_RootUpdate_Auth_Verification_TokensArgs = {
    _set?: InputMaybe<Auth_Verification_Tokens_Set_Input>;
    where: Auth_Verification_Tokens_Bool_Exp;
};
/** mutation root */
export type Mutation_RootUpdate_Auth_Verification_Tokens_By_PkArgs = {
    _set?: InputMaybe<Auth_Verification_Tokens_Set_Input>;
    pk_columns: Auth_Verification_Tokens_Pk_Columns_Input;
};
/** mutation root */
export type Mutation_RootUpdate_Auth_Verification_Tokens_ManyArgs = {
    updates: Array<Auth_Verification_Tokens_Updates>;
};
/** mutation root */
export type Mutation_RootUpdate_Identity_VerificationsArgs = {
    _append?: InputMaybe<Identity_Verifications_Append_Input>;
    _delete_at_path?: InputMaybe<Identity_Verifications_Delete_At_Path_Input>;
    _delete_elem?: InputMaybe<Identity_Verifications_Delete_Elem_Input>;
    _delete_key?: InputMaybe<Identity_Verifications_Delete_Key_Input>;
    _prepend?: InputMaybe<Identity_Verifications_Prepend_Input>;
    _set?: InputMaybe<Identity_Verifications_Set_Input>;
    where: Identity_Verifications_Bool_Exp;
};
/** mutation root */
export type Mutation_RootUpdate_Identity_Verifications_By_PkArgs = {
    _append?: InputMaybe<Identity_Verifications_Append_Input>;
    _delete_at_path?: InputMaybe<Identity_Verifications_Delete_At_Path_Input>;
    _delete_elem?: InputMaybe<Identity_Verifications_Delete_Elem_Input>;
    _delete_key?: InputMaybe<Identity_Verifications_Delete_Key_Input>;
    _prepend?: InputMaybe<Identity_Verifications_Prepend_Input>;
    _set?: InputMaybe<Identity_Verifications_Set_Input>;
    pk_columns: Identity_Verifications_Pk_Columns_Input;
};
/** mutation root */
export type Mutation_RootUpdate_Identity_Verifications_ManyArgs = {
    updates: Array<Identity_Verifications_Updates>;
};
/** mutation root */
export type Mutation_RootUpdate_ProfileManagerInviteProfilesArgs = {
    _inc?: InputMaybe<ProfileManagerInviteProfiles_Inc_Input>;
    _set?: InputMaybe<ProfileManagerInviteProfiles_Set_Input>;
    where: ProfileManagerInviteProfiles_Bool_Exp;
};
/** mutation root */
export type Mutation_RootUpdate_ProfileManagerInviteProfiles_By_PkArgs = {
    _inc?: InputMaybe<ProfileManagerInviteProfiles_Inc_Input>;
    _set?: InputMaybe<ProfileManagerInviteProfiles_Set_Input>;
    pk_columns: ProfileManagerInviteProfiles_Pk_Columns_Input;
};
/** mutation root */
export type Mutation_RootUpdate_ProfileManagerInviteProfiles_ManyArgs = {
    updates: Array<ProfileManagerInviteProfiles_Updates>;
};
/** mutation root */
export type Mutation_RootUpdate_ProfileManagerInvitesActiveArgs = {
    _set?: InputMaybe<ProfileManagerInvitesActive_Set_Input>;
    where: ProfileManagerInvitesActive_Bool_Exp;
};
/** mutation root */
export type Mutation_RootUpdate_ProfileManagerInvitesActive_ManyArgs = {
    updates: Array<ProfileManagerInvitesActive_Updates>;
};
/** mutation root */
export type Mutation_RootUpdate_ProfileManagers_ManyArgs = {
    updates: Array<ProfileManagers_Updates>;
};
/** mutation root */
export type Mutation_RootUpdate_Profile_Managers_Invites_ManyArgs = {
    updates: Array<Profile_Managers_Invites_Updates>;
};
/** mutation root */
export type Mutation_RootUpdate_Profiles_ManyArgs = {
    updates: Array<Profiles_Updates>;
};
/** column ordering options */
export type Order_By = 
/** in ascending order, nulls last */
'asc'
/** in ascending order, nulls first */
 | 'asc_nulls_first'
/** in ascending order, nulls last */
 | 'asc_nulls_last'
/** in descending order, nulls first */
 | 'desc'
/** in descending order, nulls first */
 | 'desc_nulls_first'
/** in descending order, nulls last */
 | 'desc_nulls_last';
/** The profiles associated with each invite */
export type ProfileManagerInviteProfiles = {
    __typename?: 'profileManagerInviteProfiles';
    id: Scalars['Int']['output'];
    /** An object relationship */
    invite: Profile_Managers_Invites;
    inviteId: Scalars['uuid']['output'];
    /** An object relationship */
    profile: Profiles;
    profileId: Scalars['uuid']['output'];
};
/** aggregated selection of "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Aggregate = {
    __typename?: 'profileManagerInviteProfiles_aggregate';
    aggregate?: Maybe<ProfileManagerInviteProfiles_Aggregate_Fields>;
    nodes: Array<ProfileManagerInviteProfiles>;
};
export type ProfileManagerInviteProfiles_Aggregate_Bool_Exp = {
    count?: InputMaybe<ProfileManagerInviteProfiles_Aggregate_Bool_Exp_Count>;
};
export type ProfileManagerInviteProfiles_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<ProfileManagerInviteProfiles_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<ProfileManagerInviteProfiles_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};
/** aggregate fields of "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Aggregate_Fields = {
    __typename?: 'profileManagerInviteProfiles_aggregate_fields';
    avg?: Maybe<ProfileManagerInviteProfiles_Avg_Fields>;
    count: Scalars['Int']['output'];
    max?: Maybe<ProfileManagerInviteProfiles_Max_Fields>;
    min?: Maybe<ProfileManagerInviteProfiles_Min_Fields>;
    stddev?: Maybe<ProfileManagerInviteProfiles_Stddev_Fields>;
    stddev_pop?: Maybe<ProfileManagerInviteProfiles_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<ProfileManagerInviteProfiles_Stddev_Samp_Fields>;
    sum?: Maybe<ProfileManagerInviteProfiles_Sum_Fields>;
    var_pop?: Maybe<ProfileManagerInviteProfiles_Var_Pop_Fields>;
    var_samp?: Maybe<ProfileManagerInviteProfiles_Var_Samp_Fields>;
    variance?: Maybe<ProfileManagerInviteProfiles_Variance_Fields>;
};
/** aggregate fields of "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<ProfileManagerInviteProfiles_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};
/** order by aggregate values of table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Aggregate_Order_By = {
    avg?: InputMaybe<ProfileManagerInviteProfiles_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<ProfileManagerInviteProfiles_Max_Order_By>;
    min?: InputMaybe<ProfileManagerInviteProfiles_Min_Order_By>;
    stddev?: InputMaybe<ProfileManagerInviteProfiles_Stddev_Order_By>;
    stddev_pop?: InputMaybe<ProfileManagerInviteProfiles_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<ProfileManagerInviteProfiles_Stddev_Samp_Order_By>;
    sum?: InputMaybe<ProfileManagerInviteProfiles_Sum_Order_By>;
    var_pop?: InputMaybe<ProfileManagerInviteProfiles_Var_Pop_Order_By>;
    var_samp?: InputMaybe<ProfileManagerInviteProfiles_Var_Samp_Order_By>;
    variance?: InputMaybe<ProfileManagerInviteProfiles_Variance_Order_By>;
};
/** input type for inserting array relation for remote table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Arr_Rel_Insert_Input = {
    data: Array<ProfileManagerInviteProfiles_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<ProfileManagerInviteProfiles_On_Conflict>;
};
/** aggregate avg on columns */
export type ProfileManagerInviteProfiles_Avg_Fields = {
    __typename?: 'profileManagerInviteProfiles_avg_fields';
    id?: Maybe<Scalars['Float']['output']>;
};
/** order by avg() on columns of table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Avg_Order_By = {
    id?: InputMaybe<Order_By>;
};
/** Boolean expression to filter rows from the table "profile_managers_invites_profiles". All fields are combined with a logical 'AND'. */
export type ProfileManagerInviteProfiles_Bool_Exp = {
    _and?: InputMaybe<Array<ProfileManagerInviteProfiles_Bool_Exp>>;
    _not?: InputMaybe<ProfileManagerInviteProfiles_Bool_Exp>;
    _or?: InputMaybe<Array<ProfileManagerInviteProfiles_Bool_Exp>>;
    id?: InputMaybe<Int_Comparison_Exp>;
    invite?: InputMaybe<Profile_Managers_Invites_Bool_Exp>;
    inviteId?: InputMaybe<Uuid_Comparison_Exp>;
    profile?: InputMaybe<Profiles_Bool_Exp>;
    profileId?: InputMaybe<Uuid_Comparison_Exp>;
};
/** unique or primary key constraints on table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Constraint = 
/** unique or primary key constraint on columns "id" */
'profile_managers_invites_profiles_pkey';
/** input type for incrementing numeric columns in table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Inc_Input = {
    id?: InputMaybe<Scalars['Int']['input']>;
};
/** input type for inserting data into table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Insert_Input = {
    id?: InputMaybe<Scalars['Int']['input']>;
    invite?: InputMaybe<Profile_Managers_Invites_Obj_Rel_Insert_Input>;
    inviteId?: InputMaybe<Scalars['uuid']['input']>;
    profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
    profileId?: InputMaybe<Scalars['uuid']['input']>;
};
/** aggregate max on columns */
export type ProfileManagerInviteProfiles_Max_Fields = {
    __typename?: 'profileManagerInviteProfiles_max_fields';
    id?: Maybe<Scalars['Int']['output']>;
    inviteId?: Maybe<Scalars['uuid']['output']>;
    profileId?: Maybe<Scalars['uuid']['output']>;
};
/** order by max() on columns of table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Max_Order_By = {
    id?: InputMaybe<Order_By>;
    inviteId?: InputMaybe<Order_By>;
    profileId?: InputMaybe<Order_By>;
};
/** aggregate min on columns */
export type ProfileManagerInviteProfiles_Min_Fields = {
    __typename?: 'profileManagerInviteProfiles_min_fields';
    id?: Maybe<Scalars['Int']['output']>;
    inviteId?: Maybe<Scalars['uuid']['output']>;
    profileId?: Maybe<Scalars['uuid']['output']>;
};
/** order by min() on columns of table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Min_Order_By = {
    id?: InputMaybe<Order_By>;
    inviteId?: InputMaybe<Order_By>;
    profileId?: InputMaybe<Order_By>;
};
/** response of any mutation on the table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Mutation_Response = {
    __typename?: 'profileManagerInviteProfiles_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<ProfileManagerInviteProfiles>;
};
/** on_conflict condition type for table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_On_Conflict = {
    constraint: ProfileManagerInviteProfiles_Constraint;
    update_columns?: Array<ProfileManagerInviteProfiles_Update_Column>;
    where?: InputMaybe<ProfileManagerInviteProfiles_Bool_Exp>;
};
/** Ordering options when selecting data from "profile_managers_invites_profiles". */
export type ProfileManagerInviteProfiles_Order_By = {
    id?: InputMaybe<Order_By>;
    invite?: InputMaybe<Profile_Managers_Invites_Order_By>;
    inviteId?: InputMaybe<Order_By>;
    profile?: InputMaybe<Profiles_Order_By>;
    profileId?: InputMaybe<Order_By>;
};
/** primary key columns input for table: profile_managers_invites_profiles */
export type ProfileManagerInviteProfiles_Pk_Columns_Input = {
    id: Scalars['Int']['input'];
};
/** select columns of table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Select_Column = 
/** column name */
'id'
/** column name */
 | 'inviteId'
/** column name */
 | 'profileId';
/** input type for updating data in table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Set_Input = {
    id?: InputMaybe<Scalars['Int']['input']>;
    inviteId?: InputMaybe<Scalars['uuid']['input']>;
    profileId?: InputMaybe<Scalars['uuid']['input']>;
};
/** aggregate stddev on columns */
export type ProfileManagerInviteProfiles_Stddev_Fields = {
    __typename?: 'profileManagerInviteProfiles_stddev_fields';
    id?: Maybe<Scalars['Float']['output']>;
};
/** order by stddev() on columns of table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Stddev_Order_By = {
    id?: InputMaybe<Order_By>;
};
/** aggregate stddev_pop on columns */
export type ProfileManagerInviteProfiles_Stddev_Pop_Fields = {
    __typename?: 'profileManagerInviteProfiles_stddev_pop_fields';
    id?: Maybe<Scalars['Float']['output']>;
};
/** order by stddev_pop() on columns of table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Stddev_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
};
/** aggregate stddev_samp on columns */
export type ProfileManagerInviteProfiles_Stddev_Samp_Fields = {
    __typename?: 'profileManagerInviteProfiles_stddev_samp_fields';
    id?: Maybe<Scalars['Float']['output']>;
};
/** order by stddev_samp() on columns of table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Stddev_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
};
/** Streaming cursor of the table "profileManagerInviteProfiles" */
export type ProfileManagerInviteProfiles_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: ProfileManagerInviteProfiles_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};
/** Initial value of the column from where the streaming should start */
export type ProfileManagerInviteProfiles_Stream_Cursor_Value_Input = {
    id?: InputMaybe<Scalars['Int']['input']>;
    inviteId?: InputMaybe<Scalars['uuid']['input']>;
    profileId?: InputMaybe<Scalars['uuid']['input']>;
};
/** aggregate sum on columns */
export type ProfileManagerInviteProfiles_Sum_Fields = {
    __typename?: 'profileManagerInviteProfiles_sum_fields';
    id?: Maybe<Scalars['Int']['output']>;
};
/** order by sum() on columns of table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Sum_Order_By = {
    id?: InputMaybe<Order_By>;
};
/** update columns of table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Update_Column = 
/** column name */
'id'
/** column name */
 | 'inviteId'
/** column name */
 | 'profileId';
export type ProfileManagerInviteProfiles_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<ProfileManagerInviteProfiles_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<ProfileManagerInviteProfiles_Set_Input>;
    /** filter the rows which have to be updated */
    where: ProfileManagerInviteProfiles_Bool_Exp;
};
/** aggregate var_pop on columns */
export type ProfileManagerInviteProfiles_Var_Pop_Fields = {
    __typename?: 'profileManagerInviteProfiles_var_pop_fields';
    id?: Maybe<Scalars['Float']['output']>;
};
/** order by var_pop() on columns of table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Var_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
};
/** aggregate var_samp on columns */
export type ProfileManagerInviteProfiles_Var_Samp_Fields = {
    __typename?: 'profileManagerInviteProfiles_var_samp_fields';
    id?: Maybe<Scalars['Float']['output']>;
};
/** order by var_samp() on columns of table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Var_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
};
/** aggregate variance on columns */
export type ProfileManagerInviteProfiles_Variance_Fields = {
    __typename?: 'profileManagerInviteProfiles_variance_fields';
    id?: Maybe<Scalars['Float']['output']>;
};
/** order by variance() on columns of table "profile_managers_invites_profiles" */
export type ProfileManagerInviteProfiles_Variance_Order_By = {
    id?: InputMaybe<Order_By>;
};
/** columns and relationships of "profile_managers_invites_active" */
export type ProfileManagerInvitesActive = {
    __typename?: 'profileManagerInvitesActive';
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    createdByAuthUserId?: Maybe<Scalars['uuid']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    isRejected?: Maybe<Scalars['Boolean']['output']>;
    phoneNumber?: Maybe<Scalars['String']['output']>;
    /** An array relationship */
    profiles: Array<ProfileManagerInviteProfiles>;
    /** An aggregate relationship */
    profiles_aggregate: ProfileManagerInviteProfiles_Aggregate;
    redeemedProfileManagerId?: Maybe<Scalars['uuid']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};
/** columns and relationships of "profile_managers_invites_active" */
export type ProfileManagerInvitesActiveProfilesArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagerInviteProfiles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagerInviteProfiles_Order_By>>;
    where?: InputMaybe<ProfileManagerInviteProfiles_Bool_Exp>;
};
/** columns and relationships of "profile_managers_invites_active" */
export type ProfileManagerInvitesActiveProfiles_AggregateArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagerInviteProfiles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagerInviteProfiles_Order_By>>;
    where?: InputMaybe<ProfileManagerInviteProfiles_Bool_Exp>;
};
/** aggregated selection of "profile_managers_invites_active" */
export type ProfileManagerInvitesActive_Aggregate = {
    __typename?: 'profileManagerInvitesActive_aggregate';
    aggregate?: Maybe<ProfileManagerInvitesActive_Aggregate_Fields>;
    nodes: Array<ProfileManagerInvitesActive>;
};
/** aggregate fields of "profile_managers_invites_active" */
export type ProfileManagerInvitesActive_Aggregate_Fields = {
    __typename?: 'profileManagerInvitesActive_aggregate_fields';
    count: Scalars['Int']['output'];
    max?: Maybe<ProfileManagerInvitesActive_Max_Fields>;
    min?: Maybe<ProfileManagerInvitesActive_Min_Fields>;
};
/** aggregate fields of "profile_managers_invites_active" */
export type ProfileManagerInvitesActive_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<ProfileManagerInvitesActive_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Boolean expression to filter rows from the table "profile_managers_invites_active". All fields are combined with a logical 'AND'. */
export type ProfileManagerInvitesActive_Bool_Exp = {
    _and?: InputMaybe<Array<ProfileManagerInvitesActive_Bool_Exp>>;
    _not?: InputMaybe<ProfileManagerInvitesActive_Bool_Exp>;
    _or?: InputMaybe<Array<ProfileManagerInvitesActive_Bool_Exp>>;
    createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    createdByAuthUserId?: InputMaybe<Uuid_Comparison_Exp>;
    email?: InputMaybe<String_Comparison_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    isRejected?: InputMaybe<Boolean_Comparison_Exp>;
    phoneNumber?: InputMaybe<String_Comparison_Exp>;
    profiles?: InputMaybe<ProfileManagerInviteProfiles_Bool_Exp>;
    profiles_aggregate?: InputMaybe<ProfileManagerInviteProfiles_Aggregate_Bool_Exp>;
    redeemedProfileManagerId?: InputMaybe<Uuid_Comparison_Exp>;
    updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};
/** input type for inserting data into table "profile_managers_invites_active" */
export type ProfileManagerInvitesActive_Insert_Input = {
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    createdByAuthUserId?: InputMaybe<Scalars['uuid']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    isRejected?: InputMaybe<Scalars['Boolean']['input']>;
    phoneNumber?: InputMaybe<Scalars['String']['input']>;
    profiles?: InputMaybe<ProfileManagerInviteProfiles_Arr_Rel_Insert_Input>;
    redeemedProfileManagerId?: InputMaybe<Scalars['uuid']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};
/** aggregate max on columns */
export type ProfileManagerInvitesActive_Max_Fields = {
    __typename?: 'profileManagerInvitesActive_max_fields';
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    createdByAuthUserId?: Maybe<Scalars['uuid']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    phoneNumber?: Maybe<Scalars['String']['output']>;
    redeemedProfileManagerId?: Maybe<Scalars['uuid']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};
/** aggregate min on columns */
export type ProfileManagerInvitesActive_Min_Fields = {
    __typename?: 'profileManagerInvitesActive_min_fields';
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    createdByAuthUserId?: Maybe<Scalars['uuid']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    phoneNumber?: Maybe<Scalars['String']['output']>;
    redeemedProfileManagerId?: Maybe<Scalars['uuid']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};
/** response of any mutation on the table "profile_managers_invites_active" */
export type ProfileManagerInvitesActive_Mutation_Response = {
    __typename?: 'profileManagerInvitesActive_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<ProfileManagerInvitesActive>;
};
/** Ordering options when selecting data from "profile_managers_invites_active". */
export type ProfileManagerInvitesActive_Order_By = {
    createdAt?: InputMaybe<Order_By>;
    createdByAuthUserId?: InputMaybe<Order_By>;
    email?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    isRejected?: InputMaybe<Order_By>;
    phoneNumber?: InputMaybe<Order_By>;
    profiles_aggregate?: InputMaybe<ProfileManagerInviteProfiles_Aggregate_Order_By>;
    redeemedProfileManagerId?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
};
/** select columns of table "profile_managers_invites_active" */
export type ProfileManagerInvitesActive_Select_Column = 
/** column name */
'createdAt'
/** column name */
 | 'createdByAuthUserId'
/** column name */
 | 'email'
/** column name */
 | 'id'
/** column name */
 | 'isRejected'
/** column name */
 | 'phoneNumber'
/** column name */
 | 'redeemedProfileManagerId'
/** column name */
 | 'updatedAt';
/** input type for updating data in table "profile_managers_invites_active" */
export type ProfileManagerInvitesActive_Set_Input = {
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    createdByAuthUserId?: InputMaybe<Scalars['uuid']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    isRejected?: InputMaybe<Scalars['Boolean']['input']>;
    phoneNumber?: InputMaybe<Scalars['String']['input']>;
    redeemedProfileManagerId?: InputMaybe<Scalars['uuid']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};
/** Streaming cursor of the table "profileManagerInvitesActive" */
export type ProfileManagerInvitesActive_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: ProfileManagerInvitesActive_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};
/** Initial value of the column from where the streaming should start */
export type ProfileManagerInvitesActive_Stream_Cursor_Value_Input = {
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    createdByAuthUserId?: InputMaybe<Scalars['uuid']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    isRejected?: InputMaybe<Scalars['Boolean']['input']>;
    phoneNumber?: InputMaybe<Scalars['String']['input']>;
    redeemedProfileManagerId?: InputMaybe<Scalars['uuid']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};
export type ProfileManagerInvitesActive_Updates = {
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<ProfileManagerInvitesActive_Set_Input>;
    /** filter the rows which have to be updated */
    where: ProfileManagerInvitesActive_Bool_Exp;
};
/** Profiles the user is able to manage */
export type ProfileManagers = {
    __typename?: 'profileManagers';
    createdAt: Scalars['timestamptz']['output'];
    createdByAuthUserId: Scalars['uuid']['output'];
    /** An object relationship */
    createdByUser: Auth_Users;
    id: Scalars['uuid']['output'];
    managerAuthUserId: Scalars['uuid']['output'];
    /** An object relationship */
    profile: Profiles;
    profileId: Scalars['uuid']['output'];
    updatedAt: Scalars['timestamptz']['output'];
};
/** aggregated selection of "profile_managers" */
export type ProfileManagers_Aggregate = {
    __typename?: 'profileManagers_aggregate';
    aggregate?: Maybe<ProfileManagers_Aggregate_Fields>;
    nodes: Array<ProfileManagers>;
};
export type ProfileManagers_Aggregate_Bool_Exp = {
    count?: InputMaybe<ProfileManagers_Aggregate_Bool_Exp_Count>;
};
export type ProfileManagers_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<ProfileManagers_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<ProfileManagers_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};
/** aggregate fields of "profile_managers" */
export type ProfileManagers_Aggregate_Fields = {
    __typename?: 'profileManagers_aggregate_fields';
    count: Scalars['Int']['output'];
    max?: Maybe<ProfileManagers_Max_Fields>;
    min?: Maybe<ProfileManagers_Min_Fields>;
};
/** aggregate fields of "profile_managers" */
export type ProfileManagers_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<ProfileManagers_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};
/** order by aggregate values of table "profile_managers" */
export type ProfileManagers_Aggregate_Order_By = {
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<ProfileManagers_Max_Order_By>;
    min?: InputMaybe<ProfileManagers_Min_Order_By>;
};
/** input type for inserting array relation for remote table "profile_managers" */
export type ProfileManagers_Arr_Rel_Insert_Input = {
    data: Array<ProfileManagers_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<ProfileManagers_On_Conflict>;
};
/** Boolean expression to filter rows from the table "profile_managers". All fields are combined with a logical 'AND'. */
export type ProfileManagers_Bool_Exp = {
    _and?: InputMaybe<Array<ProfileManagers_Bool_Exp>>;
    _not?: InputMaybe<ProfileManagers_Bool_Exp>;
    _or?: InputMaybe<Array<ProfileManagers_Bool_Exp>>;
    createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    createdByAuthUserId?: InputMaybe<Uuid_Comparison_Exp>;
    createdByUser?: InputMaybe<Auth_Users_Bool_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    managerAuthUserId?: InputMaybe<Uuid_Comparison_Exp>;
    profile?: InputMaybe<Profiles_Bool_Exp>;
    profileId?: InputMaybe<Uuid_Comparison_Exp>;
    updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};
/** unique or primary key constraints on table "profile_managers" */
export type ProfileManagers_Constraint = 
/** unique or primary key constraint on columns "id" */
'profile_managers_pkey';
/** input type for inserting data into table "profile_managers" */
export type ProfileManagers_Insert_Input = {
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    createdByAuthUserId?: InputMaybe<Scalars['uuid']['input']>;
    createdByUser?: InputMaybe<Auth_Users_Obj_Rel_Insert_Input>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    managerAuthUserId?: InputMaybe<Scalars['uuid']['input']>;
    profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
    profileId?: InputMaybe<Scalars['uuid']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};
/** aggregate max on columns */
export type ProfileManagers_Max_Fields = {
    __typename?: 'profileManagers_max_fields';
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    createdByAuthUserId?: Maybe<Scalars['uuid']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    managerAuthUserId?: Maybe<Scalars['uuid']['output']>;
    profileId?: Maybe<Scalars['uuid']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};
/** order by max() on columns of table "profile_managers" */
export type ProfileManagers_Max_Order_By = {
    createdAt?: InputMaybe<Order_By>;
    createdByAuthUserId?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    managerAuthUserId?: InputMaybe<Order_By>;
    profileId?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
};
/** aggregate min on columns */
export type ProfileManagers_Min_Fields = {
    __typename?: 'profileManagers_min_fields';
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    createdByAuthUserId?: Maybe<Scalars['uuid']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    managerAuthUserId?: Maybe<Scalars['uuid']['output']>;
    profileId?: Maybe<Scalars['uuid']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};
/** order by min() on columns of table "profile_managers" */
export type ProfileManagers_Min_Order_By = {
    createdAt?: InputMaybe<Order_By>;
    createdByAuthUserId?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    managerAuthUserId?: InputMaybe<Order_By>;
    profileId?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
};
/** response of any mutation on the table "profile_managers" */
export type ProfileManagers_Mutation_Response = {
    __typename?: 'profileManagers_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<ProfileManagers>;
};
/** on_conflict condition type for table "profile_managers" */
export type ProfileManagers_On_Conflict = {
    constraint: ProfileManagers_Constraint;
    update_columns?: Array<ProfileManagers_Update_Column>;
    where?: InputMaybe<ProfileManagers_Bool_Exp>;
};
/** Ordering options when selecting data from "profile_managers". */
export type ProfileManagers_Order_By = {
    createdAt?: InputMaybe<Order_By>;
    createdByAuthUserId?: InputMaybe<Order_By>;
    createdByUser?: InputMaybe<Auth_Users_Order_By>;
    id?: InputMaybe<Order_By>;
    managerAuthUserId?: InputMaybe<Order_By>;
    profile?: InputMaybe<Profiles_Order_By>;
    profileId?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
};
/** primary key columns input for table: profile_managers */
export type ProfileManagers_Pk_Columns_Input = {
    id: Scalars['uuid']['input'];
};
/** select columns of table "profile_managers" */
export type ProfileManagers_Select_Column = 
/** column name */
'createdAt'
/** column name */
 | 'createdByAuthUserId'
/** column name */
 | 'id'
/** column name */
 | 'managerAuthUserId'
/** column name */
 | 'profileId'
/** column name */
 | 'updatedAt';
/** input type for updating data in table "profile_managers" */
export type ProfileManagers_Set_Input = {
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    createdByAuthUserId?: InputMaybe<Scalars['uuid']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    managerAuthUserId?: InputMaybe<Scalars['uuid']['input']>;
    profileId?: InputMaybe<Scalars['uuid']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};
/** Streaming cursor of the table "profileManagers" */
export type ProfileManagers_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: ProfileManagers_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};
/** Initial value of the column from where the streaming should start */
export type ProfileManagers_Stream_Cursor_Value_Input = {
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    createdByAuthUserId?: InputMaybe<Scalars['uuid']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    managerAuthUserId?: InputMaybe<Scalars['uuid']['input']>;
    profileId?: InputMaybe<Scalars['uuid']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};
/** update columns of table "profile_managers" */
export type ProfileManagers_Update_Column = 
/** column name */
'createdAt'
/** column name */
 | 'createdByAuthUserId'
/** column name */
 | 'id'
/** column name */
 | 'managerAuthUserId'
/** column name */
 | 'profileId'
/** column name */
 | 'updatedAt';
export type ProfileManagers_Updates = {
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<ProfileManagers_Set_Input>;
    /** filter the rows which have to be updated */
    where: ProfileManagers_Bool_Exp;
};
/** Invites a user creates when inviting another adult to manage a profile */
export type Profile_Managers_Invites = {
    __typename?: 'profile_managers_invites';
    code: Scalars['String']['output'];
    createdAt: Scalars['timestamptz']['output'];
    createdByAuthUserId: Scalars['uuid']['output'];
    email?: Maybe<Scalars['String']['output']>;
    id: Scalars['uuid']['output'];
    isRejected: Scalars['Boolean']['output'];
    phoneNumber?: Maybe<Scalars['String']['output']>;
    /** An array relationship */
    profiles: Array<ProfileManagerInviteProfiles>;
    /** An aggregate relationship */
    profiles_aggregate: ProfileManagerInviteProfiles_Aggregate;
    redeemedProfileManagerId?: Maybe<Scalars['uuid']['output']>;
    updatedAt: Scalars['timestamptz']['output'];
};
/** Invites a user creates when inviting another adult to manage a profile */
export type Profile_Managers_InvitesProfilesArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagerInviteProfiles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagerInviteProfiles_Order_By>>;
    where?: InputMaybe<ProfileManagerInviteProfiles_Bool_Exp>;
};
/** Invites a user creates when inviting another adult to manage a profile */
export type Profile_Managers_InvitesProfiles_AggregateArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagerInviteProfiles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagerInviteProfiles_Order_By>>;
    where?: InputMaybe<ProfileManagerInviteProfiles_Bool_Exp>;
};
/** aggregated selection of "profile_managers_invites" */
export type Profile_Managers_Invites_Aggregate = {
    __typename?: 'profile_managers_invites_aggregate';
    aggregate?: Maybe<Profile_Managers_Invites_Aggregate_Fields>;
    nodes: Array<Profile_Managers_Invites>;
};
/** aggregate fields of "profile_managers_invites" */
export type Profile_Managers_Invites_Aggregate_Fields = {
    __typename?: 'profile_managers_invites_aggregate_fields';
    count: Scalars['Int']['output'];
    max?: Maybe<Profile_Managers_Invites_Max_Fields>;
    min?: Maybe<Profile_Managers_Invites_Min_Fields>;
};
/** aggregate fields of "profile_managers_invites" */
export type Profile_Managers_Invites_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Profile_Managers_Invites_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};
/** Boolean expression to filter rows from the table "profile_managers_invites". All fields are combined with a logical 'AND'. */
export type Profile_Managers_Invites_Bool_Exp = {
    _and?: InputMaybe<Array<Profile_Managers_Invites_Bool_Exp>>;
    _not?: InputMaybe<Profile_Managers_Invites_Bool_Exp>;
    _or?: InputMaybe<Array<Profile_Managers_Invites_Bool_Exp>>;
    code?: InputMaybe<String_Comparison_Exp>;
    createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    createdByAuthUserId?: InputMaybe<Uuid_Comparison_Exp>;
    email?: InputMaybe<String_Comparison_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    isRejected?: InputMaybe<Boolean_Comparison_Exp>;
    phoneNumber?: InputMaybe<String_Comparison_Exp>;
    profiles?: InputMaybe<ProfileManagerInviteProfiles_Bool_Exp>;
    profiles_aggregate?: InputMaybe<ProfileManagerInviteProfiles_Aggregate_Bool_Exp>;
    redeemedProfileManagerId?: InputMaybe<Uuid_Comparison_Exp>;
    updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};
/** unique or primary key constraints on table "profile_managers_invites" */
export type Profile_Managers_Invites_Constraint = 
/** unique or primary key constraint on columns "id" */
'profile_managers_invites_pkey';
/** input type for inserting data into table "profile_managers_invites" */
export type Profile_Managers_Invites_Insert_Input = {
    code?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    createdByAuthUserId?: InputMaybe<Scalars['uuid']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    isRejected?: InputMaybe<Scalars['Boolean']['input']>;
    phoneNumber?: InputMaybe<Scalars['String']['input']>;
    profiles?: InputMaybe<ProfileManagerInviteProfiles_Arr_Rel_Insert_Input>;
    redeemedProfileManagerId?: InputMaybe<Scalars['uuid']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};
/** aggregate max on columns */
export type Profile_Managers_Invites_Max_Fields = {
    __typename?: 'profile_managers_invites_max_fields';
    code?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    createdByAuthUserId?: Maybe<Scalars['uuid']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    phoneNumber?: Maybe<Scalars['String']['output']>;
    redeemedProfileManagerId?: Maybe<Scalars['uuid']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};
/** aggregate min on columns */
export type Profile_Managers_Invites_Min_Fields = {
    __typename?: 'profile_managers_invites_min_fields';
    code?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['timestamptz']['output']>;
    createdByAuthUserId?: Maybe<Scalars['uuid']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    phoneNumber?: Maybe<Scalars['String']['output']>;
    redeemedProfileManagerId?: Maybe<Scalars['uuid']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};
/** response of any mutation on the table "profile_managers_invites" */
export type Profile_Managers_Invites_Mutation_Response = {
    __typename?: 'profile_managers_invites_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Profile_Managers_Invites>;
};
/** input type for inserting object relation for remote table "profile_managers_invites" */
export type Profile_Managers_Invites_Obj_Rel_Insert_Input = {
    data: Profile_Managers_Invites_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Profile_Managers_Invites_On_Conflict>;
};
/** on_conflict condition type for table "profile_managers_invites" */
export type Profile_Managers_Invites_On_Conflict = {
    constraint: Profile_Managers_Invites_Constraint;
    update_columns?: Array<Profile_Managers_Invites_Update_Column>;
    where?: InputMaybe<Profile_Managers_Invites_Bool_Exp>;
};
/** Ordering options when selecting data from "profile_managers_invites". */
export type Profile_Managers_Invites_Order_By = {
    code?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    createdByAuthUserId?: InputMaybe<Order_By>;
    email?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    isRejected?: InputMaybe<Order_By>;
    phoneNumber?: InputMaybe<Order_By>;
    profiles_aggregate?: InputMaybe<ProfileManagerInviteProfiles_Aggregate_Order_By>;
    redeemedProfileManagerId?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
};
/** primary key columns input for table: profile_managers_invites */
export type Profile_Managers_Invites_Pk_Columns_Input = {
    id: Scalars['uuid']['input'];
};
/** select columns of table "profile_managers_invites" */
export type Profile_Managers_Invites_Select_Column = 
/** column name */
'code'
/** column name */
 | 'createdAt'
/** column name */
 | 'createdByAuthUserId'
/** column name */
 | 'email'
/** column name */
 | 'id'
/** column name */
 | 'isRejected'
/** column name */
 | 'phoneNumber'
/** column name */
 | 'redeemedProfileManagerId'
/** column name */
 | 'updatedAt';
/** input type for updating data in table "profile_managers_invites" */
export type Profile_Managers_Invites_Set_Input = {
    code?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    createdByAuthUserId?: InputMaybe<Scalars['uuid']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    isRejected?: InputMaybe<Scalars['Boolean']['input']>;
    phoneNumber?: InputMaybe<Scalars['String']['input']>;
    redeemedProfileManagerId?: InputMaybe<Scalars['uuid']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};
/** Streaming cursor of the table "profile_managers_invites" */
export type Profile_Managers_Invites_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Profile_Managers_Invites_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};
/** Initial value of the column from where the streaming should start */
export type Profile_Managers_Invites_Stream_Cursor_Value_Input = {
    code?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
    createdByAuthUserId?: InputMaybe<Scalars['uuid']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    isRejected?: InputMaybe<Scalars['Boolean']['input']>;
    phoneNumber?: InputMaybe<Scalars['String']['input']>;
    redeemedProfileManagerId?: InputMaybe<Scalars['uuid']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};
/** update columns of table "profile_managers_invites" */
export type Profile_Managers_Invites_Update_Column = 
/** column name */
'code'
/** column name */
 | 'createdAt'
/** column name */
 | 'createdByAuthUserId'
/** column name */
 | 'email'
/** column name */
 | 'id'
/** column name */
 | 'isRejected'
/** column name */
 | 'phoneNumber'
/** column name */
 | 'redeemedProfileManagerId'
/** column name */
 | 'updatedAt';
export type Profile_Managers_Invites_Updates = {
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Profile_Managers_Invites_Set_Input>;
    /** filter the rows which have to be updated */
    where: Profile_Managers_Invites_Bool_Exp;
};
/** Each auth user can have one profile with their info. */
export type Profiles = {
    __typename?: 'profiles';
    authUserId?: Maybe<Scalars['uuid']['output']>;
    createdAt: Scalars['timestamp']['output'];
    createdByAuthUserId: Scalars['uuid']['output'];
    /** An object relationship */
    createdByUser: Auth_Users;
    firstName: Scalars['String']['output'];
    id: Scalars['uuid']['output'];
    isAdult: Scalars['Boolean']['output'];
    lastName: Scalars['String']['output'];
    /** An array relationship */
    managers: Array<ProfileManagers>;
    /** An aggregate relationship */
    managers_aggregate: ProfileManagers_Aggregate;
    updatedAt: Scalars['timestamptz']['output'];
    username: Scalars['String']['output'];
    usernameLastUpdated: Scalars['timestamptz']['output'];
};
/** Each auth user can have one profile with their info. */
export type ProfilesManagersArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagers_Order_By>>;
    where?: InputMaybe<ProfileManagers_Bool_Exp>;
};
/** Each auth user can have one profile with their info. */
export type ProfilesManagers_AggregateArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagers_Order_By>>;
    where?: InputMaybe<ProfileManagers_Bool_Exp>;
};
/** aggregated selection of "profiles" */
export type Profiles_Aggregate = {
    __typename?: 'profiles_aggregate';
    aggregate?: Maybe<Profiles_Aggregate_Fields>;
    nodes: Array<Profiles>;
};
export type Profiles_Aggregate_Bool_Exp = {
    bool_and?: InputMaybe<Profiles_Aggregate_Bool_Exp_Bool_And>;
    bool_or?: InputMaybe<Profiles_Aggregate_Bool_Exp_Bool_Or>;
    count?: InputMaybe<Profiles_Aggregate_Bool_Exp_Count>;
};
export type Profiles_Aggregate_Bool_Exp_Bool_And = {
    arguments: Profiles_Select_Column_Profiles_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Profiles_Bool_Exp>;
    predicate: Boolean_Comparison_Exp;
};
export type Profiles_Aggregate_Bool_Exp_Bool_Or = {
    arguments: Profiles_Select_Column_Profiles_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Profiles_Bool_Exp>;
    predicate: Boolean_Comparison_Exp;
};
export type Profiles_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Profiles_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
    filter?: InputMaybe<Profiles_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};
/** aggregate fields of "profiles" */
export type Profiles_Aggregate_Fields = {
    __typename?: 'profiles_aggregate_fields';
    count: Scalars['Int']['output'];
    max?: Maybe<Profiles_Max_Fields>;
    min?: Maybe<Profiles_Min_Fields>;
};
/** aggregate fields of "profiles" */
export type Profiles_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Profiles_Select_Column>>;
    distinct?: InputMaybe<Scalars['Boolean']['input']>;
};
/** order by aggregate values of table "profiles" */
export type Profiles_Aggregate_Order_By = {
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Profiles_Max_Order_By>;
    min?: InputMaybe<Profiles_Min_Order_By>;
};
/** input type for inserting array relation for remote table "profiles" */
export type Profiles_Arr_Rel_Insert_Input = {
    data: Array<Profiles_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Profiles_On_Conflict>;
};
/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
    _and?: InputMaybe<Array<Profiles_Bool_Exp>>;
    _not?: InputMaybe<Profiles_Bool_Exp>;
    _or?: InputMaybe<Array<Profiles_Bool_Exp>>;
    authUserId?: InputMaybe<Uuid_Comparison_Exp>;
    createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
    createdByAuthUserId?: InputMaybe<Uuid_Comparison_Exp>;
    createdByUser?: InputMaybe<Auth_Users_Bool_Exp>;
    firstName?: InputMaybe<String_Comparison_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    isAdult?: InputMaybe<Boolean_Comparison_Exp>;
    lastName?: InputMaybe<String_Comparison_Exp>;
    managers?: InputMaybe<ProfileManagers_Bool_Exp>;
    managers_aggregate?: InputMaybe<ProfileManagers_Aggregate_Bool_Exp>;
    updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
    username?: InputMaybe<String_Comparison_Exp>;
    usernameLastUpdated?: InputMaybe<Timestamptz_Comparison_Exp>;
};
/** unique or primary key constraints on table "profiles" */
export type Profiles_Constraint = 
/** unique or primary key constraint on columns "id" */
'profiles_pkey'
/** unique or primary key constraint on columns "username" */
 | 'profiles_username_key';
/** input type for inserting data into table "profiles" */
export type Profiles_Insert_Input = {
    authUserId?: InputMaybe<Scalars['uuid']['input']>;
    createdAt?: InputMaybe<Scalars['timestamp']['input']>;
    createdByAuthUserId?: InputMaybe<Scalars['uuid']['input']>;
    createdByUser?: InputMaybe<Auth_Users_Obj_Rel_Insert_Input>;
    firstName?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    isAdult?: InputMaybe<Scalars['Boolean']['input']>;
    lastName?: InputMaybe<Scalars['String']['input']>;
    managers?: InputMaybe<ProfileManagers_Arr_Rel_Insert_Input>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
    username?: InputMaybe<Scalars['String']['input']>;
    usernameLastUpdated?: InputMaybe<Scalars['timestamptz']['input']>;
};
/** aggregate max on columns */
export type Profiles_Max_Fields = {
    __typename?: 'profiles_max_fields';
    authUserId?: Maybe<Scalars['uuid']['output']>;
    createdAt?: Maybe<Scalars['timestamp']['output']>;
    createdByAuthUserId?: Maybe<Scalars['uuid']['output']>;
    firstName?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    lastName?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
    username?: Maybe<Scalars['String']['output']>;
    usernameLastUpdated?: Maybe<Scalars['timestamptz']['output']>;
};
/** order by max() on columns of table "profiles" */
export type Profiles_Max_Order_By = {
    authUserId?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    createdByAuthUserId?: InputMaybe<Order_By>;
    firstName?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    lastName?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
    username?: InputMaybe<Order_By>;
    usernameLastUpdated?: InputMaybe<Order_By>;
};
/** aggregate min on columns */
export type Profiles_Min_Fields = {
    __typename?: 'profiles_min_fields';
    authUserId?: Maybe<Scalars['uuid']['output']>;
    createdAt?: Maybe<Scalars['timestamp']['output']>;
    createdByAuthUserId?: Maybe<Scalars['uuid']['output']>;
    firstName?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['uuid']['output']>;
    lastName?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['timestamptz']['output']>;
    username?: Maybe<Scalars['String']['output']>;
    usernameLastUpdated?: Maybe<Scalars['timestamptz']['output']>;
};
/** order by min() on columns of table "profiles" */
export type Profiles_Min_Order_By = {
    authUserId?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    createdByAuthUserId?: InputMaybe<Order_By>;
    firstName?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    lastName?: InputMaybe<Order_By>;
    updatedAt?: InputMaybe<Order_By>;
    username?: InputMaybe<Order_By>;
    usernameLastUpdated?: InputMaybe<Order_By>;
};
/** response of any mutation on the table "profiles" */
export type Profiles_Mutation_Response = {
    __typename?: 'profiles_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']['output'];
    /** data from the rows affected by the mutation */
    returning: Array<Profiles>;
};
/** input type for inserting object relation for remote table "profiles" */
export type Profiles_Obj_Rel_Insert_Input = {
    data: Profiles_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Profiles_On_Conflict>;
};
/** on_conflict condition type for table "profiles" */
export type Profiles_On_Conflict = {
    constraint: Profiles_Constraint;
    update_columns?: Array<Profiles_Update_Column>;
    where?: InputMaybe<Profiles_Bool_Exp>;
};
/** Ordering options when selecting data from "profiles". */
export type Profiles_Order_By = {
    authUserId?: InputMaybe<Order_By>;
    createdAt?: InputMaybe<Order_By>;
    createdByAuthUserId?: InputMaybe<Order_By>;
    createdByUser?: InputMaybe<Auth_Users_Order_By>;
    firstName?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    isAdult?: InputMaybe<Order_By>;
    lastName?: InputMaybe<Order_By>;
    managers_aggregate?: InputMaybe<ProfileManagers_Aggregate_Order_By>;
    updatedAt?: InputMaybe<Order_By>;
    username?: InputMaybe<Order_By>;
    usernameLastUpdated?: InputMaybe<Order_By>;
};
/** primary key columns input for table: profiles */
export type Profiles_Pk_Columns_Input = {
    id: Scalars['uuid']['input'];
};
/** select columns of table "profiles" */
export type Profiles_Select_Column = 
/** column name */
'authUserId'
/** column name */
 | 'createdAt'
/** column name */
 | 'createdByAuthUserId'
/** column name */
 | 'firstName'
/** column name */
 | 'id'
/** column name */
 | 'isAdult'
/** column name */
 | 'lastName'
/** column name */
 | 'updatedAt'
/** column name */
 | 'username'
/** column name */
 | 'usernameLastUpdated';
/** select "profiles_aggregate_bool_exp_bool_and_arguments_columns" columns of table "profiles" */
export type Profiles_Select_Column_Profiles_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = 
/** column name */
'isAdult';
/** select "profiles_aggregate_bool_exp_bool_or_arguments_columns" columns of table "profiles" */
export type Profiles_Select_Column_Profiles_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = 
/** column name */
'isAdult';
/** input type for updating data in table "profiles" */
export type Profiles_Set_Input = {
    authUserId?: InputMaybe<Scalars['uuid']['input']>;
    createdAt?: InputMaybe<Scalars['timestamp']['input']>;
    createdByAuthUserId?: InputMaybe<Scalars['uuid']['input']>;
    firstName?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    isAdult?: InputMaybe<Scalars['Boolean']['input']>;
    lastName?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
    username?: InputMaybe<Scalars['String']['input']>;
    usernameLastUpdated?: InputMaybe<Scalars['timestamptz']['input']>;
};
/** Streaming cursor of the table "profiles" */
export type Profiles_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Profiles_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};
/** Initial value of the column from where the streaming should start */
export type Profiles_Stream_Cursor_Value_Input = {
    authUserId?: InputMaybe<Scalars['uuid']['input']>;
    createdAt?: InputMaybe<Scalars['timestamp']['input']>;
    createdByAuthUserId?: InputMaybe<Scalars['uuid']['input']>;
    firstName?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    isAdult?: InputMaybe<Scalars['Boolean']['input']>;
    lastName?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
    username?: InputMaybe<Scalars['String']['input']>;
    usernameLastUpdated?: InputMaybe<Scalars['timestamptz']['input']>;
};
/** update columns of table "profiles" */
export type Profiles_Update_Column = 
/** column name */
'authUserId'
/** column name */
 | 'createdAt'
/** column name */
 | 'createdByAuthUserId'
/** column name */
 | 'firstName'
/** column name */
 | 'id'
/** column name */
 | 'isAdult'
/** column name */
 | 'lastName'
/** column name */
 | 'updatedAt'
/** column name */
 | 'username'
/** column name */
 | 'usernameLastUpdated';
export type Profiles_Updates = {
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Profiles_Set_Input>;
    /** filter the rows which have to be updated */
    where: Profiles_Bool_Exp;
};
export type Query_Root = {
    __typename?: 'query_root';
    /** fetch data from the table: "auth_accounts" */
    auth_accounts: Array<Auth_Accounts>;
    /** fetch aggregated fields from the table: "auth_accounts" */
    auth_accounts_aggregate: Auth_Accounts_Aggregate;
    /** fetch data from the table: "auth_accounts" using primary key columns */
    auth_accounts_by_pk?: Maybe<Auth_Accounts>;
    /** fetch data from the table: "auth_sessions" */
    auth_sessions: Array<Auth_Sessions>;
    /** fetch aggregated fields from the table: "auth_sessions" */
    auth_sessions_aggregate: Auth_Sessions_Aggregate;
    /** fetch data from the table: "auth_sessions" using primary key columns */
    auth_sessions_by_pk?: Maybe<Auth_Sessions>;
    /** fetch data from the table: "auth_users" */
    auth_users: Array<Auth_Users>;
    /** fetch aggregated fields from the table: "auth_users" */
    auth_users_aggregate: Auth_Users_Aggregate;
    /** fetch data from the table: "auth_users" using primary key columns */
    auth_users_by_pk?: Maybe<Auth_Users>;
    /** fetch data from the table: "auth_verification_tokens" */
    auth_verification_tokens: Array<Auth_Verification_Tokens>;
    /** fetch aggregated fields from the table: "auth_verification_tokens" */
    auth_verification_tokens_aggregate: Auth_Verification_Tokens_Aggregate;
    /** fetch data from the table: "auth_verification_tokens" using primary key columns */
    auth_verification_tokens_by_pk?: Maybe<Auth_Verification_Tokens>;
    /** fetch data from the table: "identity_verifications" */
    identity_verifications: Array<Identity_Verifications>;
    /** fetch aggregated fields from the table: "identity_verifications" */
    identity_verifications_aggregate: Identity_Verifications_Aggregate;
    /** fetch data from the table: "identity_verifications" using primary key columns */
    identity_verifications_by_pk?: Maybe<Identity_Verifications>;
    /** fetch data from the table: "profile_managers_invites_profiles" */
    profileManagerInviteProfiles: Array<ProfileManagerInviteProfiles>;
    /** fetch aggregated fields from the table: "profile_managers_invites_profiles" */
    profileManagerInviteProfiles_aggregate: ProfileManagerInviteProfiles_Aggregate;
    /** fetch data from the table: "profile_managers_invites_profiles" using primary key columns */
    profileManagerInviteProfiles_by_pk?: Maybe<ProfileManagerInviteProfiles>;
    /** fetch data from the table: "profile_managers_invites_active" */
    profileManagerInvites: Array<ProfileManagerInvitesActive>;
    /** fetch aggregated fields from the table: "profile_managers_invites_active" */
    profileManagerInvitesActive_aggregate: ProfileManagerInvitesActive_Aggregate;
    /** fetch data from the table: "profile_managers" */
    profileManagers: Array<ProfileManagers>;
    /** fetch data from the table: "profile_managers" using primary key columns */
    profileManagersByKey?: Maybe<ProfileManagers>;
    /** fetch aggregated fields from the table: "profile_managers" */
    profileManagers_aggregate: ProfileManagers_Aggregate;
    /** fetch data from the table: "profile_managers_invites" */
    profile_managers_invites: Array<Profile_Managers_Invites>;
    /** fetch aggregated fields from the table: "profile_managers_invites" */
    profile_managers_invites_aggregate: Profile_Managers_Invites_Aggregate;
    /** fetch data from the table: "profile_managers_invites" using primary key columns */
    profile_managers_invites_by_pk?: Maybe<Profile_Managers_Invites>;
    /** fetch data from the table: "profiles" */
    profiles: Array<Profiles>;
    /** fetch data from the table: "profiles" using primary key columns */
    profilesByKey?: Maybe<Profiles>;
    /** fetch aggregated fields from the table: "profiles" */
    profiles_aggregate: Profiles_Aggregate;
};
export type Query_RootAuth_AccountsArgs = {
    distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
    where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};
export type Query_RootAuth_Accounts_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
    where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};
export type Query_RootAuth_Accounts_By_PkArgs = {
    id: Scalars['uuid']['input'];
};
export type Query_RootAuth_SessionsArgs = {
    distinct_on?: InputMaybe<Array<Auth_Sessions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Sessions_Order_By>>;
    where?: InputMaybe<Auth_Sessions_Bool_Exp>;
};
export type Query_RootAuth_Sessions_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Auth_Sessions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Sessions_Order_By>>;
    where?: InputMaybe<Auth_Sessions_Bool_Exp>;
};
export type Query_RootAuth_Sessions_By_PkArgs = {
    id: Scalars['uuid']['input'];
};
export type Query_RootAuth_UsersArgs = {
    distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
    where?: InputMaybe<Auth_Users_Bool_Exp>;
};
export type Query_RootAuth_Users_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
    where?: InputMaybe<Auth_Users_Bool_Exp>;
};
export type Query_RootAuth_Users_By_PkArgs = {
    id: Scalars['uuid']['input'];
};
export type Query_RootAuth_Verification_TokensArgs = {
    distinct_on?: InputMaybe<Array<Auth_Verification_Tokens_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Verification_Tokens_Order_By>>;
    where?: InputMaybe<Auth_Verification_Tokens_Bool_Exp>;
};
export type Query_RootAuth_Verification_Tokens_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Auth_Verification_Tokens_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Verification_Tokens_Order_By>>;
    where?: InputMaybe<Auth_Verification_Tokens_Bool_Exp>;
};
export type Query_RootAuth_Verification_Tokens_By_PkArgs = {
    token: Scalars['String']['input'];
};
export type Query_RootIdentity_VerificationsArgs = {
    distinct_on?: InputMaybe<Array<Identity_Verifications_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Identity_Verifications_Order_By>>;
    where?: InputMaybe<Identity_Verifications_Bool_Exp>;
};
export type Query_RootIdentity_Verifications_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Identity_Verifications_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Identity_Verifications_Order_By>>;
    where?: InputMaybe<Identity_Verifications_Bool_Exp>;
};
export type Query_RootIdentity_Verifications_By_PkArgs = {
    id: Scalars['uuid']['input'];
};
export type Query_RootProfileManagerInviteProfilesArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagerInviteProfiles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagerInviteProfiles_Order_By>>;
    where?: InputMaybe<ProfileManagerInviteProfiles_Bool_Exp>;
};
export type Query_RootProfileManagerInviteProfiles_AggregateArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagerInviteProfiles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagerInviteProfiles_Order_By>>;
    where?: InputMaybe<ProfileManagerInviteProfiles_Bool_Exp>;
};
export type Query_RootProfileManagerInviteProfiles_By_PkArgs = {
    id: Scalars['Int']['input'];
};
export type Query_RootProfileManagerInvitesArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagerInvitesActive_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagerInvitesActive_Order_By>>;
    where?: InputMaybe<ProfileManagerInvitesActive_Bool_Exp>;
};
export type Query_RootProfileManagerInvitesActive_AggregateArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagerInvitesActive_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagerInvitesActive_Order_By>>;
    where?: InputMaybe<ProfileManagerInvitesActive_Bool_Exp>;
};
export type Query_RootProfileManagersArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagers_Order_By>>;
    where?: InputMaybe<ProfileManagers_Bool_Exp>;
};
export type Query_RootProfileManagersByKeyArgs = {
    id: Scalars['uuid']['input'];
};
export type Query_RootProfileManagers_AggregateArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagers_Order_By>>;
    where?: InputMaybe<ProfileManagers_Bool_Exp>;
};
export type Query_RootProfile_Managers_InvitesArgs = {
    distinct_on?: InputMaybe<Array<Profile_Managers_Invites_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Profile_Managers_Invites_Order_By>>;
    where?: InputMaybe<Profile_Managers_Invites_Bool_Exp>;
};
export type Query_RootProfile_Managers_Invites_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Profile_Managers_Invites_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Profile_Managers_Invites_Order_By>>;
    where?: InputMaybe<Profile_Managers_Invites_Bool_Exp>;
};
export type Query_RootProfile_Managers_Invites_By_PkArgs = {
    id: Scalars['uuid']['input'];
};
export type Query_RootProfilesArgs = {
    distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Profiles_Order_By>>;
    where?: InputMaybe<Profiles_Bool_Exp>;
};
export type Query_RootProfilesByKeyArgs = {
    id: Scalars['uuid']['input'];
};
export type Query_RootProfiles_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Profiles_Order_By>>;
    where?: InputMaybe<Profiles_Bool_Exp>;
};
export type Subscription_Root = {
    __typename?: 'subscription_root';
    /** fetch data from the table: "auth_accounts" */
    auth_accounts: Array<Auth_Accounts>;
    /** fetch aggregated fields from the table: "auth_accounts" */
    auth_accounts_aggregate: Auth_Accounts_Aggregate;
    /** fetch data from the table: "auth_accounts" using primary key columns */
    auth_accounts_by_pk?: Maybe<Auth_Accounts>;
    /** fetch data from the table in a streaming manner: "auth_accounts" */
    auth_accounts_stream: Array<Auth_Accounts>;
    /** fetch data from the table: "auth_sessions" */
    auth_sessions: Array<Auth_Sessions>;
    /** fetch aggregated fields from the table: "auth_sessions" */
    auth_sessions_aggregate: Auth_Sessions_Aggregate;
    /** fetch data from the table: "auth_sessions" using primary key columns */
    auth_sessions_by_pk?: Maybe<Auth_Sessions>;
    /** fetch data from the table in a streaming manner: "auth_sessions" */
    auth_sessions_stream: Array<Auth_Sessions>;
    /** fetch data from the table: "auth_users" */
    auth_users: Array<Auth_Users>;
    /** fetch aggregated fields from the table: "auth_users" */
    auth_users_aggregate: Auth_Users_Aggregate;
    /** fetch data from the table: "auth_users" using primary key columns */
    auth_users_by_pk?: Maybe<Auth_Users>;
    /** fetch data from the table in a streaming manner: "auth_users" */
    auth_users_stream: Array<Auth_Users>;
    /** fetch data from the table: "auth_verification_tokens" */
    auth_verification_tokens: Array<Auth_Verification_Tokens>;
    /** fetch aggregated fields from the table: "auth_verification_tokens" */
    auth_verification_tokens_aggregate: Auth_Verification_Tokens_Aggregate;
    /** fetch data from the table: "auth_verification_tokens" using primary key columns */
    auth_verification_tokens_by_pk?: Maybe<Auth_Verification_Tokens>;
    /** fetch data from the table in a streaming manner: "auth_verification_tokens" */
    auth_verification_tokens_stream: Array<Auth_Verification_Tokens>;
    /** fetch data from the table: "identity_verifications" */
    identity_verifications: Array<Identity_Verifications>;
    /** fetch aggregated fields from the table: "identity_verifications" */
    identity_verifications_aggregate: Identity_Verifications_Aggregate;
    /** fetch data from the table: "identity_verifications" using primary key columns */
    identity_verifications_by_pk?: Maybe<Identity_Verifications>;
    /** fetch data from the table in a streaming manner: "identity_verifications" */
    identity_verifications_stream: Array<Identity_Verifications>;
    /** fetch data from the table: "profile_managers_invites_profiles" */
    profileManagerInviteProfiles: Array<ProfileManagerInviteProfiles>;
    /** fetch aggregated fields from the table: "profile_managers_invites_profiles" */
    profileManagerInviteProfiles_aggregate: ProfileManagerInviteProfiles_Aggregate;
    /** fetch data from the table: "profile_managers_invites_profiles" using primary key columns */
    profileManagerInviteProfiles_by_pk?: Maybe<ProfileManagerInviteProfiles>;
    /** fetch data from the table in a streaming manner: "profile_managers_invites_profiles" */
    profileManagerInviteProfiles_stream: Array<ProfileManagerInviteProfiles>;
    /** fetch data from the table: "profile_managers_invites_active" */
    profileManagerInvites: Array<ProfileManagerInvitesActive>;
    /** fetch aggregated fields from the table: "profile_managers_invites_active" */
    profileManagerInvitesActive_aggregate: ProfileManagerInvitesActive_Aggregate;
    /** fetch data from the table in a streaming manner: "profile_managers_invites_active" */
    profileManagerInvitesActive_stream: Array<ProfileManagerInvitesActive>;
    /** fetch data from the table: "profile_managers" */
    profileManagers: Array<ProfileManagers>;
    /** fetch data from the table: "profile_managers" using primary key columns */
    profileManagersByKey?: Maybe<ProfileManagers>;
    /** fetch aggregated fields from the table: "profile_managers" */
    profileManagers_aggregate: ProfileManagers_Aggregate;
    /** fetch data from the table in a streaming manner: "profile_managers" */
    profileManagers_stream: Array<ProfileManagers>;
    /** fetch data from the table: "profile_managers_invites" */
    profile_managers_invites: Array<Profile_Managers_Invites>;
    /** fetch aggregated fields from the table: "profile_managers_invites" */
    profile_managers_invites_aggregate: Profile_Managers_Invites_Aggregate;
    /** fetch data from the table: "profile_managers_invites" using primary key columns */
    profile_managers_invites_by_pk?: Maybe<Profile_Managers_Invites>;
    /** fetch data from the table in a streaming manner: "profile_managers_invites" */
    profile_managers_invites_stream: Array<Profile_Managers_Invites>;
    /** fetch data from the table: "profiles" */
    profiles: Array<Profiles>;
    /** fetch data from the table: "profiles" using primary key columns */
    profilesByKey?: Maybe<Profiles>;
    /** fetch aggregated fields from the table: "profiles" */
    profiles_aggregate: Profiles_Aggregate;
    /** fetch data from the table in a streaming manner: "profiles" */
    profiles_stream: Array<Profiles>;
};
export type Subscription_RootAuth_AccountsArgs = {
    distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
    where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};
export type Subscription_RootAuth_Accounts_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Auth_Accounts_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Accounts_Order_By>>;
    where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};
export type Subscription_RootAuth_Accounts_By_PkArgs = {
    id: Scalars['uuid']['input'];
};
export type Subscription_RootAuth_Accounts_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Auth_Accounts_Stream_Cursor_Input>>;
    where?: InputMaybe<Auth_Accounts_Bool_Exp>;
};
export type Subscription_RootAuth_SessionsArgs = {
    distinct_on?: InputMaybe<Array<Auth_Sessions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Sessions_Order_By>>;
    where?: InputMaybe<Auth_Sessions_Bool_Exp>;
};
export type Subscription_RootAuth_Sessions_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Auth_Sessions_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Sessions_Order_By>>;
    where?: InputMaybe<Auth_Sessions_Bool_Exp>;
};
export type Subscription_RootAuth_Sessions_By_PkArgs = {
    id: Scalars['uuid']['input'];
};
export type Subscription_RootAuth_Sessions_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Auth_Sessions_Stream_Cursor_Input>>;
    where?: InputMaybe<Auth_Sessions_Bool_Exp>;
};
export type Subscription_RootAuth_UsersArgs = {
    distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
    where?: InputMaybe<Auth_Users_Bool_Exp>;
};
export type Subscription_RootAuth_Users_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
    where?: InputMaybe<Auth_Users_Bool_Exp>;
};
export type Subscription_RootAuth_Users_By_PkArgs = {
    id: Scalars['uuid']['input'];
};
export type Subscription_RootAuth_Users_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Auth_Users_Stream_Cursor_Input>>;
    where?: InputMaybe<Auth_Users_Bool_Exp>;
};
export type Subscription_RootAuth_Verification_TokensArgs = {
    distinct_on?: InputMaybe<Array<Auth_Verification_Tokens_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Verification_Tokens_Order_By>>;
    where?: InputMaybe<Auth_Verification_Tokens_Bool_Exp>;
};
export type Subscription_RootAuth_Verification_Tokens_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Auth_Verification_Tokens_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Auth_Verification_Tokens_Order_By>>;
    where?: InputMaybe<Auth_Verification_Tokens_Bool_Exp>;
};
export type Subscription_RootAuth_Verification_Tokens_By_PkArgs = {
    token: Scalars['String']['input'];
};
export type Subscription_RootAuth_Verification_Tokens_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Auth_Verification_Tokens_Stream_Cursor_Input>>;
    where?: InputMaybe<Auth_Verification_Tokens_Bool_Exp>;
};
export type Subscription_RootIdentity_VerificationsArgs = {
    distinct_on?: InputMaybe<Array<Identity_Verifications_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Identity_Verifications_Order_By>>;
    where?: InputMaybe<Identity_Verifications_Bool_Exp>;
};
export type Subscription_RootIdentity_Verifications_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Identity_Verifications_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Identity_Verifications_Order_By>>;
    where?: InputMaybe<Identity_Verifications_Bool_Exp>;
};
export type Subscription_RootIdentity_Verifications_By_PkArgs = {
    id: Scalars['uuid']['input'];
};
export type Subscription_RootIdentity_Verifications_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Identity_Verifications_Stream_Cursor_Input>>;
    where?: InputMaybe<Identity_Verifications_Bool_Exp>;
};
export type Subscription_RootProfileManagerInviteProfilesArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagerInviteProfiles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagerInviteProfiles_Order_By>>;
    where?: InputMaybe<ProfileManagerInviteProfiles_Bool_Exp>;
};
export type Subscription_RootProfileManagerInviteProfiles_AggregateArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagerInviteProfiles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagerInviteProfiles_Order_By>>;
    where?: InputMaybe<ProfileManagerInviteProfiles_Bool_Exp>;
};
export type Subscription_RootProfileManagerInviteProfiles_By_PkArgs = {
    id: Scalars['Int']['input'];
};
export type Subscription_RootProfileManagerInviteProfiles_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<ProfileManagerInviteProfiles_Stream_Cursor_Input>>;
    where?: InputMaybe<ProfileManagerInviteProfiles_Bool_Exp>;
};
export type Subscription_RootProfileManagerInvitesArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagerInvitesActive_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagerInvitesActive_Order_By>>;
    where?: InputMaybe<ProfileManagerInvitesActive_Bool_Exp>;
};
export type Subscription_RootProfileManagerInvitesActive_AggregateArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagerInvitesActive_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagerInvitesActive_Order_By>>;
    where?: InputMaybe<ProfileManagerInvitesActive_Bool_Exp>;
};
export type Subscription_RootProfileManagerInvitesActive_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<ProfileManagerInvitesActive_Stream_Cursor_Input>>;
    where?: InputMaybe<ProfileManagerInvitesActive_Bool_Exp>;
};
export type Subscription_RootProfileManagersArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagers_Order_By>>;
    where?: InputMaybe<ProfileManagers_Bool_Exp>;
};
export type Subscription_RootProfileManagersByKeyArgs = {
    id: Scalars['uuid']['input'];
};
export type Subscription_RootProfileManagers_AggregateArgs = {
    distinct_on?: InputMaybe<Array<ProfileManagers_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<ProfileManagers_Order_By>>;
    where?: InputMaybe<ProfileManagers_Bool_Exp>;
};
export type Subscription_RootProfileManagers_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<ProfileManagers_Stream_Cursor_Input>>;
    where?: InputMaybe<ProfileManagers_Bool_Exp>;
};
export type Subscription_RootProfile_Managers_InvitesArgs = {
    distinct_on?: InputMaybe<Array<Profile_Managers_Invites_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Profile_Managers_Invites_Order_By>>;
    where?: InputMaybe<Profile_Managers_Invites_Bool_Exp>;
};
export type Subscription_RootProfile_Managers_Invites_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Profile_Managers_Invites_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Profile_Managers_Invites_Order_By>>;
    where?: InputMaybe<Profile_Managers_Invites_Bool_Exp>;
};
export type Subscription_RootProfile_Managers_Invites_By_PkArgs = {
    id: Scalars['uuid']['input'];
};
export type Subscription_RootProfile_Managers_Invites_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Profile_Managers_Invites_Stream_Cursor_Input>>;
    where?: InputMaybe<Profile_Managers_Invites_Bool_Exp>;
};
export type Subscription_RootProfilesArgs = {
    distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Profiles_Order_By>>;
    where?: InputMaybe<Profiles_Bool_Exp>;
};
export type Subscription_RootProfilesByKeyArgs = {
    id: Scalars['uuid']['input'];
};
export type Subscription_RootProfiles_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order_by?: InputMaybe<Array<Profiles_Order_By>>;
    where?: InputMaybe<Profiles_Bool_Exp>;
};
export type Subscription_RootProfiles_StreamArgs = {
    batch_size: Scalars['Int']['input'];
    cursor: Array<InputMaybe<Profiles_Stream_Cursor_Input>>;
    where?: InputMaybe<Profiles_Bool_Exp>;
};
/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['timestamp']['input']>;
    _gt?: InputMaybe<Scalars['timestamp']['input']>;
    _gte?: InputMaybe<Scalars['timestamp']['input']>;
    _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    _lt?: InputMaybe<Scalars['timestamp']['input']>;
    _lte?: InputMaybe<Scalars['timestamp']['input']>;
    _neq?: InputMaybe<Scalars['timestamp']['input']>;
    _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};
/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['timestamptz']['input']>;
    _gt?: InputMaybe<Scalars['timestamptz']['input']>;
    _gte?: InputMaybe<Scalars['timestamptz']['input']>;
    _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    _lt?: InputMaybe<Scalars['timestamptz']['input']>;
    _lte?: InputMaybe<Scalars['timestamptz']['input']>;
    _neq?: InputMaybe<Scalars['timestamptz']['input']>;
    _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};
/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
    _eq?: InputMaybe<Scalars['uuid']['input']>;
    _gt?: InputMaybe<Scalars['uuid']['input']>;
    _gte?: InputMaybe<Scalars['uuid']['input']>;
    _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
    _is_null?: InputMaybe<Scalars['Boolean']['input']>;
    _lt?: InputMaybe<Scalars['uuid']['input']>;
    _lte?: InputMaybe<Scalars['uuid']['input']>;
    _neq?: InputMaybe<Scalars['uuid']['input']>;
    _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};
export type CreateAccountMutationVariables = Exact<{
    data: Auth_Accounts_Insert_Input;
}>;
export type CreateAccountMutation = {
    __typename?: 'mutation_root';
    insert_auth_accounts_one?: {
        __typename: 'auth_accounts';
        id: any;
        type: string;
        scope?: string | null;
        userId: any;
        id_token?: string | null;
        provider: string;
        expires_at?: any | null;
        token_type?: string | null;
        oauth_token?: string | null;
        access_token?: string | null;
        refresh_token?: string | null;
        session_state?: string | null;
        providerAccountId: string;
        oauth_token_secret?: string | null;
    } | null;
};
export type DeleteAccountMutationVariables = Exact<{
    provider: Scalars['String']['input'];
    providerAccountId: Scalars['String']['input'];
}>;
export type DeleteAccountMutation = {
    __typename?: 'mutation_root';
    delete_auth_accounts?: {
        __typename?: 'auth_accounts_mutation_response';
        returning: Array<{
            __typename: 'auth_accounts';
            id: any;
            type: string;
            scope?: string | null;
            userId: any;
            id_token?: string | null;
            provider: string;
            expires_at?: any | null;
            token_type?: string | null;
            oauth_token?: string | null;
            access_token?: string | null;
            refresh_token?: string | null;
            session_state?: string | null;
            providerAccountId: string;
            oauth_token_secret?: string | null;
        }>;
    } | null;
};
export type UserFragment = {
    __typename: 'auth_users';
    id: any;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    emailVerified?: any | null;
};
export type SessionFragment = {
    __typename: 'auth_sessions';
    id: any;
    userId: any;
    expires?: any | null;
    sessionToken: string;
};
export type AccountFragment = {
    __typename: 'auth_accounts';
    id: any;
    type: string;
    scope?: string | null;
    userId: any;
    id_token?: string | null;
    provider: string;
    expires_at?: any | null;
    token_type?: string | null;
    oauth_token?: string | null;
    access_token?: string | null;
    refresh_token?: string | null;
    session_state?: string | null;
    providerAccountId: string;
    oauth_token_secret?: string | null;
};
export type VerificationTokenFragment = {
    __typename: 'auth_verification_tokens';
    token: string;
    expires?: any | null;
    identifier: string;
};
export type GetSessionQueryVariables = Exact<{
    sessionToken?: InputMaybe<Scalars['String']['input']>;
}>;
export type GetSessionQuery = {
    __typename?: 'query_root';
    auth_sessions: Array<{
        __typename: 'auth_sessions';
        id: any;
        userId: any;
        expires?: any | null;
        sessionToken: string;
        user: {
            __typename: 'auth_users';
            id: any;
            name?: string | null;
            email?: string | null;
            image?: string | null;
            emailVerified?: any | null;
        };
    }>;
};
export type CreateSessionMutationVariables = Exact<{
    data: Auth_Sessions_Insert_Input;
}>;
export type CreateSessionMutation = {
    __typename?: 'mutation_root';
    insert_auth_sessions_one?: {
        __typename: 'auth_sessions';
        id: any;
        userId: any;
        expires?: any | null;
        sessionToken: string;
    } | null;
};
export type UpdateSessionMutationVariables = Exact<{
    sessionToken?: InputMaybe<Scalars['String']['input']>;
    data: Auth_Sessions_Set_Input;
}>;
export type UpdateSessionMutation = {
    __typename?: 'mutation_root';
    update_auth_sessions?: {
        __typename?: 'auth_sessions_mutation_response';
        returning: Array<{
            __typename: 'auth_sessions';
            id: any;
            userId: any;
            expires?: any | null;
            sessionToken: string;
        }>;
    } | null;
};
export type DeleteSessionMutationVariables = Exact<{
    sessionToken?: InputMaybe<Scalars['String']['input']>;
}>;
export type DeleteSessionMutation = {
    __typename?: 'mutation_root';
    delete_auth_sessions?: {
        __typename?: 'auth_sessions_mutation_response';
        returning: Array<{
            __typename: 'auth_sessions';
            id: any;
            userId: any;
            expires?: any | null;
            sessionToken: string;
        }>;
    } | null;
};
export type GetUserQueryVariables = Exact<{
    id: Scalars['uuid']['input'];
}>;
export type GetUserQuery = {
    __typename?: 'query_root';
    auth_users_by_pk?: {
        __typename: 'auth_users';
        id: any;
        name?: string | null;
        email?: string | null;
        image?: string | null;
        emailVerified?: any | null;
    } | null;
};
export type GetUsersQueryVariables = Exact<{
    where: Auth_Users_Bool_Exp;
}>;
export type GetUsersQuery = {
    __typename?: 'query_root';
    auth_users: Array<{
        __typename: 'auth_users';
        id: any;
        name?: string | null;
        email?: string | null;
        image?: string | null;
        emailVerified?: any | null;
    }>;
};
export type CreateUserMutationVariables = Exact<{
    data: Auth_Users_Insert_Input;
}>;
export type CreateUserMutation = {
    __typename?: 'mutation_root';
    insert_auth_users_one?: {
        __typename: 'auth_users';
        id: any;
        name?: string | null;
        email?: string | null;
        image?: string | null;
        emailVerified?: any | null;
    } | null;
};
export type UpdateUserMutationVariables = Exact<{
    id: Scalars['uuid']['input'];
    data: Auth_Users_Set_Input;
}>;
export type UpdateUserMutation = {
    __typename?: 'mutation_root';
    update_auth_users_by_pk?: {
        __typename: 'auth_users';
        id: any;
        name?: string | null;
        email?: string | null;
        image?: string | null;
        emailVerified?: any | null;
    } | null;
};
export type DeleteUserMutationVariables = Exact<{
    id: Scalars['uuid']['input'];
}>;
export type DeleteUserMutation = {
    __typename?: 'mutation_root';
    delete_auth_users_by_pk?: {
        __typename: 'auth_users';
        id: any;
        name?: string | null;
        email?: string | null;
        image?: string | null;
        emailVerified?: any | null;
    } | null;
};
export type CreateVerificationTokenMutationVariables = Exact<{
    data: Auth_Verification_Tokens_Insert_Input;
}>;
export type CreateVerificationTokenMutation = {
    __typename?: 'mutation_root';
    insert_auth_verification_tokens_one?: {
        __typename: 'auth_verification_tokens';
        token: string;
        expires?: any | null;
        identifier: string;
    } | null;
};
export type DeleteVerificationTokenMutationVariables = Exact<{
    identifier: Scalars['String']['input'];
    token: Scalars['String']['input'];
}>;
export type DeleteVerificationTokenMutation = {
    __typename?: 'mutation_root';
    delete_auth_verification_tokens?: {
        __typename?: 'auth_verification_tokens_mutation_response';
        returning: Array<{
            __typename: 'auth_verification_tokens';
            token: string;
            expires?: any | null;
            identifier: string;
        }>;
    } | null;
};
export declare const UserFragmentDoc: import("graphql").DocumentNode;
export declare const SessionFragmentDoc: import("graphql").DocumentNode;
export declare const AccountFragmentDoc: import("graphql").DocumentNode;
export declare const VerificationTokenFragmentDoc: import("graphql").DocumentNode;
export declare const CreateAccountDocument: import("graphql").DocumentNode;
export declare const DeleteAccountDocument: import("graphql").DocumentNode;
export declare const GetSessionDocument: import("graphql").DocumentNode;
export declare const CreateSessionDocument: import("graphql").DocumentNode;
export declare const UpdateSessionDocument: import("graphql").DocumentNode;
export declare const DeleteSessionDocument: import("graphql").DocumentNode;
export declare const GetUserDocument: import("graphql").DocumentNode;
export declare const GetUsersDocument: import("graphql").DocumentNode;
export declare const CreateUserDocument: import("graphql").DocumentNode;
export declare const UpdateUserDocument: import("graphql").DocumentNode;
export declare const DeleteUserDocument: import("graphql").DocumentNode;
export declare const CreateVerificationTokenDocument: import("graphql").DocumentNode;
export declare const DeleteVerificationTokenDocument: import("graphql").DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    CreateAccount(variables: CreateAccountMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateAccountMutation>;
    DeleteAccount(variables: DeleteAccountMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteAccountMutation>;
    GetSession(variables?: GetSessionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSessionQuery>;
    CreateSession(variables: CreateSessionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateSessionMutation>;
    UpdateSession(variables: UpdateSessionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateSessionMutation>;
    DeleteSession(variables?: DeleteSessionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteSessionMutation>;
    GetUser(variables: GetUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUserQuery>;
    GetUsers(variables: GetUsersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUsersQuery>;
    CreateUser(variables: CreateUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateUserMutation>;
    UpdateUser(variables: UpdateUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateUserMutation>;
    DeleteUser(variables: DeleteUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteUserMutation>;
    CreateVerificationToken(variables: CreateVerificationTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateVerificationTokenMutation>;
    DeleteVerificationToken(variables: DeleteVerificationTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteVerificationTokenMutation>;
};
export type Sdk = ReturnType<typeof getSdk>;
