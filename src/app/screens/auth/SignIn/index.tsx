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
import { Input } from "@/components/Input";
import { InputForm } from "@/components/InputForm";
import { Button } from "@/components/SignButton";

import { SignInData, signInSchema } from "@/app/screens/auth/SignIn/schema";


export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({ resolver: zodResolver(signInSchema) });

  function handleSignIn({ email, password }: SignInData) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
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
              Entrar
            </Text>
          </HStack>
        </Center>

        <Center>
          <SignIcon />

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

          <Text fontSize="sm" color="black.5" mb={8} right={24}>
            Esqueceu a senha?
          </Text>

          <Button onPress={handleSubmit(handleSignIn)} title="Cadastrar" />
        </Center>
      </VStack>
    </ScrollView>
  );
}
