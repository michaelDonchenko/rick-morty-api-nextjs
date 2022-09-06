import React, {useCallback} from 'react'
import styled from 'styled-components'
import {Character} from '../../../interfaces/characters-interfaces'
import {useRouter} from 'next/router'

const CharacterCard: React.FC<Character> = ({gender, image, name, species, status, id}) => {
  const router = useRouter()

  const onClick = useCallback(() => {
    router.push(`/characters/${id}`)
  }, [router, id])

  return (
    <ImageWrapper onClick={onClick} imageUrl={image}>
      <Content>
        <p>Name: {name}</p>
        <p>Gender: {gender}</p>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
      </Content>
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div<{imageUrl: string}>`
  position: relative;
  height: 280px;
  width: 250px;
  cursor: pointer;
  transition: all 0.3s;
  opacity: 1;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.imageUrl});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    transition: all 0.3s;
  }

  &:hover {
    &::before {
      opacity: 0.3;
    }
  }
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  padding: 10px;
  opacity: 0;
  transition: all 0.3s;

  p {
    margin-bottom: 10px;
  }

  &:hover {
    opacity: 1;
  }
`

export default CharacterCard
