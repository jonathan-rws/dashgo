import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'

import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
export function Header() {
  const { onOpen } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px={['3', '6']}
      align="center"
    >
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
      {!isWideVersion && (
        <IconButton
          aria-label="Abre menu"
          icon={<Icon as={RiMenuLine} />}
          fontSize="32"
          variant="unstyled"
          onClick={onOpen}
          ml="4"
          lineHeight="0"
        />
      )}
    </Flex>
  )
}
