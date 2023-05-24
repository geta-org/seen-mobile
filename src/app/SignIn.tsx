import { Text, VStack, Center } from "native-base";

import auth from "@react-native-firebase/auth";
import SignIcon from "@/assets/signicon.svg"

import { Input } from "@/components/Input";
import { Button } from "@/components/SignButton";

export function SignIn() {
  function handleSignIn() {
    auth()
      .signInWithEmailAndPassword("teste@teste.com", "123456")
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  }

  return (
    <VStack 
      flex={1}
      
      padding={12}
      bg="purple.90"
    >

      <Center>
        <Text 
        fontSize="xl_3" 
        fontFamily="light"
        color="black.5"
      >
        Entrar
      </Text>

        <SignIcon />
      </Center>
      
      <Center>
        <Input 
          placeholder="Email"
        />

        <Input 
          placeholder="Senha"
          mb={3}
        />

        <Text 
          fontSize="sm" 
          color="black.5" 
          mb={8}
          right={24}
        >
          Esqueceu a senha?
        </Text>

        <Button 
          onPress={handleSignIn} 
          title="Cadastrar"
        />

      </Center>
      
    </VStack>
  );
}