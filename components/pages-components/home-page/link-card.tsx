import React, {useCallback} from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'

interface CardProps {
  name: string
  imageUrl: string
  linkUrl: string
}

const LinkCard: React.FC<CardProps> = ({name, imageUrl, linkUrl}) => {
  const router = useRouter()

  const onClick = useCallback(() => {
    router.push(linkUrl)
  }, [linkUrl, router])

  return (
    <ImageWrapper onClick={onClick} imageUrl={imageUrl}>
      <Content>{name}</Content>
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div<{imageUrl: string}>`
  position: relative;
  height: 300px;
  width: 250px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 10px;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background-image: url(${(props) => props.imageUrl});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    transition: all 0.7s;
  }

  &:hover {
    &::before {
      opacity: 0.9;
    }
  }
`

const Content = styled.div`
  position: relative;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default LinkCard
