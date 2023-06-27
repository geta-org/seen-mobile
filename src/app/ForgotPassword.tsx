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
import { Input } from "@/components/Input";
import { Button } from "@/components/SignButton";
import { InputForm } from "@/components/InputForm";

type FormData = {
  email: string;
};

const schema: ZodType<FormData> = z.object({
  email: z.string({ required_error: "Digite o email" }).email("Email inválido"),
});

export function ForgotPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  function handleForgotPassword({ email }: FormData) {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Toast.show({
          title: "Email de mudança de senha enviado com sucesso!",
          placement: "top",
          bgColor: "green.100",
        });
      })
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
            <Text mt={72} fontSize="xl_3" fontFamily="light" color="black.5">
              Esqueci a senha
            </Text>
          </HStack>
        </Center>

        <Center>
          <InputForm
            control={control}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            name="email"
            errorMessage={errors.email?.message}
          />

          <Button
            onPress={handleSubmit(handleForgotPassword)}
            title="Avançar"
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
