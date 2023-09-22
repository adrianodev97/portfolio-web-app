import { gql } from 'graphql-request'

export const nameRequestQuery = gql`
  query ($slug: String!, $locale: Locale!) {
    value
  }
`
