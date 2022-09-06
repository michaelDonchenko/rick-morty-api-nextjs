import React from 'react'
import styled from 'styled-components'

interface SubTitleProps {
  children: string
  align: 'left' | 'center' | 'right'
  mt?: number
  mb?: number
}

const SubTitle: React.FC<SubTitleProps> = ({children, align, mb, mt}) => (
  <StyledSubTitle mb={mb} mt={mt} align={align}>
    {children}
  </StyledSubTitle>
)

const StyledSubTitle = styled.h2<{align; mb; mt}>`
  font-size: 22px;
  text-align: ${(props) => props.align};
  width: 100%;
  margin-top: ${(props) => `${props.mt}px`};
  margin-bottom: ${(props) => `${props.mb}px`};

  @media (max-width: 768px) {
    text-align: center;
  }
`

export default SubTitle
