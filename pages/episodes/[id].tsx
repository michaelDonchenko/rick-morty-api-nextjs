import {GetServerSideProps} from 'next'
import {useRouter} from 'next/router'
import React, {useCallback, useMemo} from 'react'
import styled from 'styled-components'
import ContentContainer from '../../components/shared/containers/content-container'
import SubTitle from '../../components/shared/titles/sub-title'
import Title from '../../components/shared/titles/title'
import graphqlClient from '../../gql/graphql-client'
import GET_EPISODE from '../../gql/queries/episode'
import {EpisodeResponse} from '../../interfaces/episode-interfaces'
import {HeadContext} from '../../interfaces/head-interfaces'
import PageLayout from '../../layouts/page-layout'

const Episode: React.FC<{data: EpisodeResponse}> = ({data}) => {
  const {name, air_date, characters} = data.episode
  const router = useRouter()

  const headContext: HeadContext = useMemo(
    () => ({
      title: `Episode | ${name}`,
      meta: [],
    }),
    [name]
  )

  const onImageClick = useCallback(
    (id: string) => {
      router.push(`/characters/${id}`)
    },
    [router]
  )

  return (
    <PageLayout headContext={headContext}>
      <ContentContainer>
        <Title align='center' mb={16}>
          {name}
        </Title>

        <SubTitle mb={26} align='center'>
          {'Characters cast:'}
        </SubTitle>
        <CardsContainer>
          {characters.map(({id, image, name}) => (
            <ImageContainer key={id} onClick={() => onImageClick(id)}>
              <p>{name}</p>
              <Image alt={'character image'} src={image} />
            </ImageContainer>
          ))}
        </CardsContainer>

        <SubTitle mt={26} align='center'>{`Aired at: ${air_date}`}</SubTitle>
      </ContentContainer>
    </PageLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    params: {id},
  } = context

  const {data} = await graphqlClient.query<Promise<{episode: EpisodeResponse}>>({
    query: GET_EPISODE,
    variables: {id: id || 1},
  })

  return {
    props: {data},
  }
}

const CardsContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 10px;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 8px;
    text-align: center;
  }
`

const Image = styled.img`
  border-radius: 50%;
  cursor: pointer;
  width: 100px;
  height: 100px;
  transition: all 0.4s;
  margin: 0 auto;

  &:hover {
    transform: scale(1.1);
  }
`

export default Episode
