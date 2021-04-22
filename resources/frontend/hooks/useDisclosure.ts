import { useEffect, useState } from 'react'
import App from '../../app/App'

export function useDisclosure<N extends App.Disclosures.Names>(name: N) {
  const [isOpen, setOpen] = useState(false)
  const [data, setData] = useState<Partial<App.Disclosures[N]>>({})

  useEffect(() => {
    App.Ux.Disclosure.on('open', onOpenCallback)
    App.Ux.Disclosure.on('close', onCloseCallback)

    return () => {
      App.Ux.Disclosure.off('open', onOpenCallback)
      App.Ux.Disclosure.off('close', onCloseCallback)
    }
  }, [])

  const onOpenCallback = (nameDispatch: N, data: App.Disclosures[N]) => {
    if (name === nameDispatch) {
      setOpen(true)
      setData(() => data)
    }
  }

  const onCloseCallback = (nameDispatch: N) => {
    if (name === nameDispatch) {
      setOpen(false)
    }
  }

  const onClose = () => {
    App.Ux.Disclosure.close(name)
  }

  const onOpen = (data: App.Disclosures[N]) => {
    App.Ux.Disclosure.open(name, data)
  }

  return {
    isOpen,
    data,
    onOpen,
    onClose,
  }
}
