import { Text, VStack, Center, HStack } from "native-base";
import { z, ZodType } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import auth from "@react-native-firebase/auth";

import SignIcon from "@/assets/signicon.svg";
import SignFrame from "@/assets/signframe.svg";
import SignFrame2 from "@/assets/signframe2.svg";

import { Input } from "@/components/Input";
import { Button } from "@/components/SignButton";

type FormData = {
  email: string;
  password: string;
};

const schema: ZodType<FormData> = z.object({
  email: z.string().nonempty("Digite o email").email("Email inválido"),
  password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
});

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  function handleSignIn({ email, password }: FormData) {
    console.log({ email, password });
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  }

  return (
    <VStack flex={1} bg="purple.90">
      <Center>
        <HStack>
          <Text
            mt={12}
            fontSize="xl_3"
            fontFamily="light"
            color="black.5"
            left={32}
            ml={4}
            mr={5}
          >
            Entrar
          </Text>

          <SignFrame />
        </HStack>
      </Center>

      <Center bottom={48}>
        <SignIcon />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Senha"
              secureTextEntry
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Text fontSize="sm" color="black.5" mb={8} right={24}>
          Esqueceu a senha?
        </Text>

        <Button onPress={handleSubmit(handleSignIn)} title="Cadastrar" />
        <HStack right={32} bottom={10}>
          <SignFrame2 />
        </HStack>
      </Center>
    </VStack>
  );
}
