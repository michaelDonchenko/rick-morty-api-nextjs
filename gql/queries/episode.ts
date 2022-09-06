import {gql} from '@apollo/client'

const GET_EPISODE = gql`
  query getEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      characters {
        id
        name
        image
      }
    }
  }
`

export default GET_EPISODE
