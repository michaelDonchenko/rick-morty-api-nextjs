import {NextRouter} from 'next/router'
import React, {useCallback} from 'react'
import styled from 'styled-components'
import SubTitle from '../titles/sub-title'

interface PaginationProps {
  next: number | null
  prev: number | null
  router: NextRouter
  count: number
  pages: number
  pathname: string
}

const Pagination: React.FC<PaginationProps> = ({count, next, pages, prev, router, pathname}) => {
  const {query} = router

  const handleNext = useCallback(() => {
    if (!next) {
      return
    }

    router.push({pathname: pathname, query: {...query, page: next}})
  }, [next])

  const handlePrev = useCallback(() => {
    if (!prev) {
      return
    }

    router.push({pathname: pathname, query: {...query, page: prev}})
  }, [prev])

  return (
    <Container>
      <SubTitle align='left'>{`Showing ${count} results`}</SubTitle>
      <SubTitle align='left'>{`Page ${query.page || 1} out of ${pages}`}</SubTitle>
      <ActionButton onClick={handlePrev}>Prev</ActionButton>
      <ActionButton onClick={handleNext}>Next</ActionButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 10px 5px;
`

const ActionButton = styled.button`
  width: 160px;
  height: 32px;
  border: 2px solid white;
  background-color: #22222e;
  margin-left: 16px;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 4px;

  &:hover {
    background-color: #474761;
  }
`

export default Pagination
