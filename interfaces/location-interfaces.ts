import {Info} from './generics'

export interface Location {
  id: string
  name: string
  type: string
  dimension: string
  residents: {id: string; name: string}[]
}

export interface LocationsResponse {
  locations: {
    info: Info
    results: Location[]
  }
}
