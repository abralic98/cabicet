import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
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

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  message: Scalars['String'];
  room?: Maybe<Room>;
  user?: Maybe<User>;
};

export type Room = {
  __typename?: 'Room';
  id: Scalars['ID'];
  messages?: Maybe<Array<Maybe<Message>>>;
  name: Scalars['String'];
  password?: Maybe<Scalars['String']>;
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  /** Create new Account */
  createAccount?: Maybe<Account>;
  /** Create new Message */
  createMessage?: Maybe<Message>;
  /** Create new Room */
  createRoom?: Maybe<Room>;
  /** Create new User */
  createUser?: Maybe<User>;
  /** Login */
  loginUser?: Maybe<User>;
};


export type RootMutationTypeCreateAccountArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type RootMutationTypeCreateMessageArgs = {
  message: Scalars['String'];
  roomId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type RootMutationTypeCreateRoomArgs = {
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeCreateUserArgs = {
  username: Scalars['String'];
};


export type RootMutationTypeLoginUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  /** Get all Rooms */
  allRooms?: Maybe<Array<Maybe<Room>>>;
  /** Get all users */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /** Get all messages */
  getMessages?: Maybe<Array<Maybe<Message>>>;
};


export type RootQueryTypeGetMessagesArgs = {
  roomId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type CreateAccountMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type CreateAccountMutation = { __typename?: 'RootMutationType', createAccount?: { __typename?: 'Account', id: string } | null };

export type LoginUserMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type LoginUserMutation = { __typename?: 'RootMutationType', loginUser?: { __typename?: 'User', username: string, id: string } | null };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'RootQueryType', allUsers?: Array<{ __typename?: 'User', username: string, id: string } | null> | null };

export type CreateMessageMutationVariables = Exact<{
  message: Scalars['String'];
  userId: Scalars['ID'];
  roomId: Scalars['ID'];
}>;


export type CreateMessageMutation = { __typename?: 'RootMutationType', createMessage?: { __typename?: 'Message', message: string } | null };

export type GetMessagesQueryVariables = Exact<{
  roomId: Scalars['ID'];
}>;


export type GetMessagesQuery = { __typename?: 'RootQueryType', getMessages?: Array<{ __typename?: 'Message', id: string, message: string, user?: { __typename?: 'User', username: string } | null } | null> | null };

export type CreateRoomMutationVariables = Exact<{
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
}>;


export type CreateRoomMutation = { __typename?: 'RootMutationType', createRoom?: { __typename?: 'Room', name: string } | null };

export type AllRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllRoomsQuery = { __typename?: 'RootQueryType', allRooms?: Array<{ __typename?: 'Room', name: string, id: string, password?: string | null } | null> | null };


export const CreateAccountDocument = `
    mutation createAccount($email: String!, $password: String!, $username: String!) {
  createAccount(email: $email, password: $password, username: $username) {
    id
  }
}
    `;
export const useCreateAccountMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateAccountMutation, TError, CreateAccountMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateAccountMutation, TError, CreateAccountMutationVariables, TContext>(
      ['createAccount'],
      (variables?: CreateAccountMutationVariables) => fetcher<CreateAccountMutation, CreateAccountMutationVariables>(client, CreateAccountDocument, variables, headers)(),
      options
    );
export const LoginUserDocument = `
    mutation loginUser($password: String!, $username: String!) {
  loginUser(password: $password, username: $username) {
    username
    id
  }
}
    `;
export const useLoginUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginUserMutation, TError, LoginUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LoginUserMutation, TError, LoginUserMutationVariables, TContext>(
      ['loginUser'],
      (variables?: LoginUserMutationVariables) => fetcher<LoginUserMutation, LoginUserMutationVariables>(client, LoginUserDocument, variables, headers)(),
      options
    );
export const AllUsersDocument = `
    query allUsers {
  allUsers {
    username
    id
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
export const CreateMessageDocument = `
    mutation createMessage($message: String!, $userId: ID!, $roomId: ID!) {
  createMessage(message: $message, userId: $userId, roomId: $roomId) {
    message
  }
}
    `;
export const useCreateMessageMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateMessageMutation, TError, CreateMessageMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateMessageMutation, TError, CreateMessageMutationVariables, TContext>(
      ['createMessage'],
      (variables?: CreateMessageMutationVariables) => fetcher<CreateMessageMutation, CreateMessageMutationVariables>(client, CreateMessageDocument, variables, headers)(),
      options
    );
export const GetMessagesDocument = `
    query getMessages($roomId: ID!) {
  getMessages(roomId: $roomId) {
    id
    message
    user {
      username
    }
  }
}
    `;
export const useGetMessagesQuery = <
      TData = GetMessagesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetMessagesQueryVariables,
      options?: UseQueryOptions<GetMessagesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetMessagesQuery, TError, TData>(
      ['getMessages', variables],
      fetcher<GetMessagesQuery, GetMessagesQueryVariables>(client, GetMessagesDocument, variables, headers),
      options
    );
export const CreateRoomDocument = `
    mutation createRoom($name: String!, $password: String) {
  createRoom(name: $name, password: $password) {
    name
  }
}
    `;
export const useCreateRoomMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateRoomMutation, TError, CreateRoomMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateRoomMutation, TError, CreateRoomMutationVariables, TContext>(
      ['createRoom'],
      (variables?: CreateRoomMutationVariables) => fetcher<CreateRoomMutation, CreateRoomMutationVariables>(client, CreateRoomDocument, variables, headers)(),
      options
    );
export const AllRoomsDocument = `
    query allRooms {
  allRooms {
    name
    id
    password
  }
}
    `;
export const useAllRoomsQuery = <
      TData = AllRoomsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: AllRoomsQueryVariables,
      options?: UseQueryOptions<AllRoomsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<AllRoomsQuery, TError, TData>(
      variables === undefined ? ['allRooms'] : ['allRooms', variables],
      fetcher<AllRoomsQuery, AllRoomsQueryVariables>(client, AllRoomsDocument, variables, headers),
      options
    );