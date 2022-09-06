import React from 'react'
import styled from 'styled-components'

interface ChipProps {
  id: string
  children: string
  isClickable: boolean
  onClick?: (id: string) => void
}

const Chip: React.FC<ChipProps> = ({children, onClick, isClickable, id}) => {
  return (
    <Container isClickable={isClickable} onClick={() => onClick(id)}>
      {children}
    </Container>
  )
}

const Container = styled.span<{isClickable: boolean}>`
  margin-right: 10px;
  margin-bottom: 6px;
  border: 1px solid white;
  border-radius: 4px;
  padding: 6px;
  display: inline-block;
  font-size: 14px;
  transition: all 0.3s;

  &:hover {
    background-color: black;
    cursor: ${(props) => (props.isClickable ? 'pointer' : 'default')};
  }
`

export default Chip
