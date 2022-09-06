import {gql} from '@apollo/client'

const GET_EPISODES = gql`
  query getEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        characters {
          id
          name
        }
      }
    }
  }
`

export default GET_EPISODES
