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
    timestamptz: {
        input: any;
        output: any;
    };
    uuid: {
        input: any;
        output: any;
    };
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
    email?: Maybe<Scalars['String']['output']>;
    emailVerified?: Maybe<Scalars['timestamptz']['output']>;
    id: Scalars['uuid']['output'];
    image?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
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
    email?: InputMaybe<String_Comparison_Exp>;
    emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    image?: InputMaybe<String_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
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
    email?: InputMaybe<Scalars['String']['input']>;
    emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
    id?: InputMaybe<Scalars['uuid']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
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
    email?: InputMaybe<Order_By>;
    emailVerified?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    image?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
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
/** mutation root */
export type Mutation_Root = {
    __typename?: 'mutation_root';
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
