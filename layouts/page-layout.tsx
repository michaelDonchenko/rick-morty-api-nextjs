import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import NavigationBar from '../components/shared/navigation-bar'
import {HeadContext} from '../interfaces/head-interfaces'

interface PageLayoutProps {
  children: React.ReactNode
  headContext: HeadContext
}

const PageLayout: React.FC<PageLayoutProps> = ({children, headContext}) => {
  const {title, meta} = headContext
  return (
    <Container>
      <Head>
        <title>{title}</title>
        {meta.map(({property, content, key, name}) => (
          <meta name={name || ''} content={content || ''} property={property || ''} key={key || ''} />
        ))}
      </Head>
      <NavigationBar />
      {children}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default PageLayout
