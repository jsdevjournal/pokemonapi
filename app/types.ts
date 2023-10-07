
export type Pokemon = {
  name: string,
  url: string
}

export type GetDataResponse = {
  count: number,
  next: string,
  previous: string,
  results: Array<Pokemon>
}

