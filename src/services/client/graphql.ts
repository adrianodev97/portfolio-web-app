import { GraphQLClient } from 'graphql-request'

const nameGraphQLClient = () =>
  new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL as string, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
    },
  })

export { nameGraphQLClient }
