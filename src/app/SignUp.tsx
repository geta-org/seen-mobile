import { zodResolver } from "@hookform/resolvers/zod";
import auth from "@react-native-firebase/auth";
import { Center, HStack, Image, ScrollView, Text, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import { z, ZodType } from "zod";

import LoginBackground from "@/assets/backgroundlogin.png";
import SignIcon from "@/assets/signicon.svg";
import { Input } from "@/components/Input";
import { Button } from "@/components/SignButton";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema: ZodType<FormData> = z
  .object({
    name: z.string({ required_error: "Digite seu nome" }),
    email: z
      .string({ required_error: "Digite o email" })
      .email("Email inválido"),
    password: z
      .string({ required_error: "Digite a senha" })
      .min(6, "A senha precisa de no mínimo 6 caracteres"),
    confirmPassword: z
      .string({ required_error: "Digite a confirmação da senha" })
      .min(6, "A senha precisa de no mínimo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  function handleSignIn({ name, email, password, confirmPassword }: FormData) {
    console.log({ name, email, password, confirmPassword });
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => console.log("Cadastro com sucesso"))
      .catch((error) => console.log(error));
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      bg="purple.90"
    >
      <VStack flex={1}>
        <Image
          source={LoginBackground}
          alt="signinbackground"
          resizeMode="contain"
          position="absolute"
        />

        <Center>
          <HStack>
            <Text mt={12} fontSize="xl_3" fontFamily="light" color="black.5">
              Criar conta
            </Text>
          </HStack>
        </Center>

        <Center>
          <SignIcon />

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

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

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirmar senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignIn)}
                returnKeyType="send"
                errorMessage={errors.confirmPassword?.message}
              />
            )}
          />

          <Button onPress={handleSubmit(handleSignIn)} title="Cadastrar" />
        </Center>
      </VStack>
    </ScrollView>
  );
}
