import { zodResolver } from "@hookform/resolvers/zod";
import auth from "@react-native-firebase/auth";
import {
  Center,
  HStack,
  Image,
  ScrollView,
  Text,
  Toast,
  VStack,
} from "native-base";
import { Controller, useForm } from "react-hook-form";
import { z, ZodType } from "zod";

import LoginBackground from "@/assets/backgroundlogin.png";
import SignIcon from "@/assets/signicon.svg";
import { InputForm } from "@/components/InputForm";
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

  function handleSignUp({ name, email, password, confirmPassword }: FormData) {
    console.log({ name, email, password, confirmPassword });
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => console.log("Cadastro com sucesso"))
      .catch((error) => {
        const title = error.message;

        Toast.show({
          title,
          placement: "top",
          bgColor: "red.100",
        });
      });
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

          <InputForm
            control={control}
            placeholder="Nome"
            name="name"
            errorMessage={errors.name?.message}
          />

          <InputForm
            control={control}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            name="email"
            errorMessage={errors.email?.message}
          />

          <InputForm
            control={control}
            placeholder="Senha"
            secureTextEntry
            name="password"
            errorMessage={errors.password?.message}
          />

          <InputForm
            control={control}
            placeholder="Confirmar senha"
            secureTextEntry
            onSubmitEditing={handleSubmit(handleSignUp)}
            returnKeyType="send"
            name="confirmPassword"
            errorMessage={errors.confirmPassword?.message}
          />

          <Button onPress={handleSubmit(handleSignUp)} title="Cadastrar" />
        </Center>
      </VStack>
    </ScrollView>
  );
}
