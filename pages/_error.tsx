import Title from '../components/shared/titles/title'
import PageLayout from '../layouts/page-layout'

const headContext = {
  title: 'Erro page!',
  meta: [],
}

function Error({statusCode}) {
  return (
    <PageLayout headContext={headContext}>
      <Title align='center' mt={16}>
        {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
      </Title>
    </PageLayout>
  )
}

Error.getInitialProps = ({res, err}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return {statusCode}
}

export default Error
