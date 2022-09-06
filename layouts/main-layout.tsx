import React from 'react'
import styled from 'styled-components'

const MainLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return <Container>{children}</Container>
}

const Container = styled.main`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: #22222e;
  display: flex;
  justify-content: center;
`

export default MainLayout
