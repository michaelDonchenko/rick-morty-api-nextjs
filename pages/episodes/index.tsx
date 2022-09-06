import {GetServerSideProps} from 'next'
import React, {useCallback} from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components'
import ContentContainer from '../../components/shared/containers/content-container'
import List from '../../components/shared/list'
import Pagination from '../../components/shared/pagination'
import graphqlClient from '../../gql/graphql-client'
import GET_EPISODES from '../../gql/queries/episodes'
import {EpisodesResponse} from '../../interfaces/episode-interfaces'
import PageLayout from '../../layouts/page-layout'
import Title from '../../components/shared/titles/title'

const headContext = {
  title: 'All Episodes',
  meta: [],
}

const Episodes: React.FC<{data: EpisodesResponse}> = ({data}) => {
  const {info, results} = data.episodes
  const {count, next, pages, prev} = info
  const router = useRouter()

  const onTitleClick = useCallback(
    (id: string) => {
      router.push(`${router.pathname}/${id}`)
    },
    [router]
  )

  return (
    <PageLayout headContext={headContext}>
      <ContentContainer>
        <Title align='center' mb={16}>
          {'Episodes'}
        </Title>
        <Pagination count={count} next={next} pages={pages} prev={prev} router={router} pathname={router.pathname} />
        <List results={results} onTitleClick={onTitleClick} />
      </ContentContainer>
    </PageLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: {page},
  } = context
  const {data} = await graphqlClient.query<Promise<EpisodesResponse>>({
    query: GET_EPISODES,
    variables: {page: +page || 1},
  })

  return {
    props: {data},
  }
}

export default Episodes
