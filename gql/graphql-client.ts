import {ApolloClient, InMemoryCache} from '@apollo/client'

const graphqlClient = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

export default graphqlClient
