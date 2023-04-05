import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  email: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Link = {
  __typename?: 'Link';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  message: Scalars['String'];
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  /** Create new Account */
  createAccount?: Maybe<Account>;
  /** Create a new link */
  createLink?: Maybe<Link>;
  /** Create new Message */
  createMessage?: Maybe<Message>;
  /** Create new User */
  createUser?: Maybe<User>;
  /** Delete link */
  deleteLink?: Maybe<Scalars['ID']>;
};


export type RootMutationTypeCreateAccountArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type RootMutationTypeCreateLinkArgs = {
  description: Scalars['String'];
  url: Scalars['String'];
};


export type RootMutationTypeCreateMessageArgs = {
  message: Scalars['String'];
  userId: Scalars['ID'];
};


export type RootMutationTypeCreateUserArgs = {
  username: Scalars['String'];
};


export type RootMutationTypeDeleteLinkArgs = {
  id: Scalars['ID'];
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  /** Get all links */
  allLinks: Array<Link>;
  /** Get all users */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /** Get all companies */
  getCompanies: Array<Company>;
  /** Get all messages */
  getMessages: Array<Company>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'RootQueryType', allUsers?: Array<{ __typename?: 'User', username: string } | null> | null };


export const AllUsersDocument = `
    query allUsers {
  allUsers {
    username
  }
}
    `;
export const useAllUsersQuery = <
      TData = AllUsersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: AllUsersQueryVariables,
      options?: UseQueryOptions<AllUsersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<AllUsersQuery, TError, TData>(
      variables === undefined ? ['allUsers'] : ['allUsers', variables],
      fetcher<AllUsersQuery, AllUsersQueryVariables>(client, AllUsersDocument, variables, headers),
      options
    );