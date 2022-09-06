import {useRouter} from 'next/router'
import React, {useCallback} from 'react'
import styled from 'styled-components'
import {Location} from '../../../interfaces/location-interfaces'
import Chip from '../chip'
import SubTitle from '../titles/sub-title'

interface LocationResultProps {
  result: Location
}

const LocationResult: React.FC<LocationResultProps> = ({result}) => {
  const {dimension, name, residents, type} = result
  const router = useRouter()

  const onClick = useCallback(
    (id: string) => {
      router.push(`characters/${id}`)
    },
    [router]
  )

  return (
    <ResultContainer>
      <SubTitle mb={10} align='left'>
        {name}
      </SubTitle>

      <p>{`Location type: ${type}`}</p>
      <p>{`Dimension: ${dimension}`}</p>
      <p>
        {residents.map(({id, name}) => (
          <Chip key={id} text={name} isClickable={true} onClick={onClick} id={id} />
        ))}
      </p>
    </ResultContainer>
  )
}

const ResultContainer = styled.section`
  background-color: #1f1d1d;
  padding: 18px;
  border-radius: 6px;

  P {
    margin-bottom: 8px;
  }
`

export default LocationResult
