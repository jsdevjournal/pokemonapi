'use client'
import useSWR from 'swr'
import type { GetDataResponse } from '../types'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const DEFAULT_URL = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=0`

export default function usePokemon(url?: string) {
  const { data, error, isLoading } = useSWR<GetDataResponse>(url || DEFAULT_URL, fetcher);
  return {  data, error, isLoading }
}
