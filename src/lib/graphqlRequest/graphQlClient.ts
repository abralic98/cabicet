import { GraphQLClient } from 'graphql-request'

// export const graphQlClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL as string, {
export const graphQlClient = new GraphQLClient('http://localhost:4000/graphql' as string, {
  headers: () => ({
    // authorization: LocalStorage.getItem('discovery-admin-token') || '',
  }),
})
