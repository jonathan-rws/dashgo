import { Stack } from '@chakra-ui/react'
import {
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
  RiUserLine,
} from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'
export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink href="/users" icon={RiUserLine}>
          Usuários
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
        <NavLink icon={RiGitMergeLine}>Automação</NavLink>
      </NavSection>
    </Stack>
  )
}
