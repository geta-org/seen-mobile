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
import { Button } from "@/components/SignButton";

type FormData = {
  email: string;
  password: string;
};

const schema: ZodType<FormData> = z.object({
  email: z.string({ required_error: "Digite o email" }).email("Email inválido"),
  password: z
    .string({ required_error: "Digite a senha" })
    .min(6, "A senha precisa de no mínimo 6 caracteres"),
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
        </Center>
      </VStack>
    </ScrollView>
  );
}
