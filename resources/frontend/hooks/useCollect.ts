import { useEffect, useMemo, useState } from 'react'
import { Collect } from '../../app/Collections/Collect'

export function useCollect<T>(collect: Collect<T>) {
  const [lastUpdate, setLastUpdate] = useState(Date.now())

  const data = useMemo(() => {
    return collect.collection.all()
  }, [lastUpdate])

  const isValidating = useMemo(() => {
    return collect.isLoading
  }, [lastUpdate])

  const forceUpdate = () => {
    setLastUpdate(() => Date.now())
  }

  useEffect(() => {
    collect.on('add', (item) => {
      forceUpdate()
    })
    collect.on('update', (item) => {
      forceUpdate()
    })
    collect.on('delete', (item) => {
      forceUpdate()
    })
  }, [])

  return { data, isValidating }
}
