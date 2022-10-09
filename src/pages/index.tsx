import { Button, Flex, Stack, Text } from '@chakra-ui/react'
import { Input } from '../components/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
type SignInFormData = {
  email: string
  password: string
}

const signInSchema = yup.object({
  email: yup.string().required('E-mail é obrigatório').email('E-mail invalido'),
  password: yup.string().required('Senha é obrigatória'),
})

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInSchema),
  })
  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      flexDir={'column'}
    >
      <Text
        fontSize={['2xl', '3xl']}
        fontWeight="bold"
        letterSpacing="tight"
        mb="8"
      >
        dashgo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>
      <Flex
        onSubmit={handleSubmit(handleSignIn)}
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <Input
            name="email"
            type="email"
            label="E-mail"
            {...register('email')}
            error={errors.email}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            autoComplete="on"
            {...register('password')}
            error={errors.password}
          />
          <Button
            colorScheme="pink"
            size="lg"
            type="submit"
            isLoading={isSubmitting}
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
