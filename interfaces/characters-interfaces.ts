import {Info} from './generics'

export interface Character {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
}

export interface CharactersResponse {
  characters: {
    info: Info
    results: Character[]
  }
}
