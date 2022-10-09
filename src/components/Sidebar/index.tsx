import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react'

import { useSidebarDrawer } from '../../context/SidebarDrawerContext'

import { SidebarNav } from './SidebarNav'

export function Sidebar() {
  const { isOpen, onToggle } = useSidebarDrawer()
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })
  return isDrawerSidebar ? (
    <Drawer isOpen={isOpen} onClose={onToggle} placement="right">
      <DrawerOverlay>
        <DrawerContent bg="gray.900" p="4">
          <DrawerCloseButton mt="6" />
          <DrawerHeader>Navegação</DrawerHeader>
          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  ) : (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}
