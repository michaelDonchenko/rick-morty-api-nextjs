import {ApolloProvider} from '@apollo/client'
import MainLayout from '../layouts/main-layout'
import GlobalStyle from '../styles/global-styles'
import graphqlClient from '../gql/graphql-client'
import React from 'react'

function MyApp({Component, pageProps}) {
  return (
    <ApolloProvider client={graphqlClient}>
      <GlobalStyle />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  )
}

export default MyApp
