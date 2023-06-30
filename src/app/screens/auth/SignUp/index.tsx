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

import { SignUpData, signUpSchema } from "@/app/screens/auth/SignUp/schema";
import LoginBackground from "@/assets/backgroundlogin.png";
import SignIcon from "@/assets/signicon.svg";
import { InputForm } from "@/components/InputForm";
import { Button } from "@/components/SignButton";

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({ resolver: zodResolver(signUpSchema) });

  function handleSignUp({ email, password }: SignUpData) {
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
