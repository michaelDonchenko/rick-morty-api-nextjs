export interface HeadContext {
  title: string
  meta: Meta[]
}

export interface Meta {
  property?: string
  name?: string
  content?: string
  key?: string
}
