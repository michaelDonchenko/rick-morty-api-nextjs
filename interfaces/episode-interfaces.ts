import {Character} from './characters-interfaces'
import {Info} from './generics'

export interface Episode {
  id: string
  name: string
  air_date: string
  characters: Character[]
}

export interface EpisodesResponse {
  episodes: {
    info: Info
    results: Episode[]
  }
}

export interface EpisodeResponse {
  episode: Episode
}
