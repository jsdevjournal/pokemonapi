'use client'
import { useState } from 'react'
import type { GetDataResponse } from '../types'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const DEFAULT_URL = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=0`

export default function usePokemon() {
  const [url, setUrl] = useState<string>(DEFAULT_URL)
  const { data, error, isLoading } = useSWR<GetDataResponse>(url, fetcher);

  const onNext = () => {
    if (data?.next) {
      setUrl(data.next)
    }
  }
  const onPrev = () => {
    if (data?.previous) {
      setUrl(data.previous)
    }
  }

  return { data, error, isLoading, onNext, onPrev }
}
