import {GetServerSideProps} from 'next'
import Image from 'next/image'
import {useRouter} from 'next/router'
import React, {useCallback, useMemo} from 'react'
import styled from 'styled-components'
import Chip from '../../components/shared/chip'
import ContentContainer from '../../components/shared/containers/content-container'
import Title from '../../components/shared/titles/title'
import graphqlClient from '../../gql/graphql-client'
import GET_CHARACTER from '../../gql/queries/character'
import {CharacterFullData} from '../../interfaces/character-interface'
import {HeadContext} from '../../interfaces/head-interfaces'
import PageLayout from '../../layouts/page-layout'

const Character: React.FC<{data: {character: CharacterFullData}}> = ({data}) => {
  const router = useRouter()
  const {episode: episodes, gender, image, location, name, origin, species, status} = data.character
  const {name: originName, dimension: originDimension, type: originType} = origin
  const {name: locationName, dimension: locationDimension, type: locationType} = location

  const headContext: HeadContext = useMemo(
    () => ({
      title: `Character | ${name}`,
      meta: [],
    }),
    [name]
  )

  const handleClick = useCallback(
    (id: string) => {
      router.push(`/episodes/${id}`)
    },
    [router]
  )

  return (
    <PageLayout headContext={headContext}>
      <ContentContainer>
        <Title align='center' mb={18}>
          {name}
        </Title>

        <CharacterContainer>
          <div className='image-container'>
            <Image
              style={{
                borderRadius: '8px',
              }}
              src={image}
              alt='character image'
              width={500}
              height={500}
            />
          </div>
          <div className='info-container'>
            <p>{`Character name: ${name}`}</p>
            <p>{`Gender: ${gender}`}</p>
            <p>{`Species: ${species}`}</p>
            <p>{`Status (dead or alive): ${status}`}</p>
            <p>{`Origin: ${originName}, ${originDimension}, ${originType}`}</p>
            <p>{`Location (last seen): ${locationName}, ${locationDimension}, ${locationType}`}</p>
            <p>{`List of episodes:`}</p>
            {episodes.map(({id, name}) => (
              <Chip key={id} text={`#${id} - ${name}`} isClickable={true} onClick={handleClick} id={id} />
            ))}
          </div>
        </CharacterContainer>
      </ContentContainer>
    </PageLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    params: {id},
  } = context

  const {data} = await graphqlClient.query<Promise<{character: CharacterFullData}>>({
    query: GET_CHARACTER,
    variables: {id: id || 1},
  })

  return {
    props: {data},
  }
}

const CharacterContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;

  .image-container {
    width: 30%;
  }

  .info-container {
    width: 70%;
    font-size: 18px;
    p {
      margin-bottom: 16px;
    }
  }
`

export default Character
