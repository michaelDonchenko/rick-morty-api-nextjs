import React from 'react'
import styled from 'styled-components'
import LinkCard from './link-card'
import images from './constants'

const CardsContainer: React.FC = () => {
  return (
    <Container>
      <LinkCard imageUrl={images.locations} name='Locations' linkUrl='/locations' />
      <LinkCard imageUrl={images.characters} name='Characters' linkUrl='/characters' />
      <LinkCard imageUrl={images.episodes} name='Episodes' linkUrl='/episodes' />
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
`

export default CardsContainer
