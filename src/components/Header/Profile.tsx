import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jonathan Martins</Text>
          <Text color="gray.300" fontSize="small">
            jonathan.rws@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Jonathan Martins"
        src="https://github.com/jonathan-rws.png"
      />
    </Flex>
  )
}
