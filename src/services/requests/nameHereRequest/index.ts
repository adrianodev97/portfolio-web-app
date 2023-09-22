import { nameGraphQLClient } from '../../client/graphql'
import { IRequestResponse } from './types'
import { nameRequestQuery } from './query'

const getAnythingRequest = async ({
  slug,
  locale,
}: {
  slug: string
  locale: string
}): Promise<IRequestResponse> => {
  const client = nameGraphQLClient()
  const response: IRequestResponse = await client.request(nameRequestQuery, {
    slug,
    locale,
  })

  return response
}

export default getAnythingRequest
