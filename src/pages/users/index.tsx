import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination/indext'

import { Sidebar } from '../../components/Sidebar'

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })
  return (
    <Box>
      <Header />
      <Flex width="100%" my="6" maxWidth={1480} px={['3', '6']} mx="auto">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p={['4', '8']}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight={'normal'}>
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon fontSize={20} as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de Cadastros</Th>}
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold" fontSize={['sm', 'normal']}>
                      Joice Klazer Colissi Martins
                    </Text>
                    <Text fontSize="small" color="gray.300">
                      joice.colissi@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>10 de janeiro, 2022</Td>}

                <Td p={0}>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="pink"
                    display="flex"
                    gap="2"
                  >
                    <RiPencilLine />
                    {isWideVersion && 'Editar'}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
