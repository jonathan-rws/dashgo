import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext, useEffect } from 'react'

type SidebarDrawerContextData = UseDisclosureReturn
interface SidebarDrawerContextProviderProps {
  children: ReactNode
}

export const SidebarDrawerContext = createContext(
  {} as SidebarDrawerContextData,
)

export function SidebarDrawerContextProvider({
  children,
}: SidebarDrawerContextProviderProps) {
  const disclosure = useDisclosure()
  const { asPath } = useRouter()
  useEffect(() => {
    disclosure.onClose()
  }, [asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
