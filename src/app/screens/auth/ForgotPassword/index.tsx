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
import { useForm } from "react-hook-form";

import {
  ForgotPasswordData,
  forgotPasswordSchema,
} from "@/app/screens/auth/ForgotPassword/schema";
import LoginBackground from "@/assets/backgroundlogin.png";
import { InputForm } from "@/components/InputForm";
import { Button } from "@/components/SignButton";

export function ForgotPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  function handleForgotPassword({ email }: ForgotPasswordData) {
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
