import { Text, VStack, Center, HStack } from "native-base";

import auth from "@react-native-firebase/auth";
import SignIcon from "@/assets/signicon.svg"
import SignFrame from "@/assets/signframe.svg"
import SignFrame2 from "@/assets/signframe2.svg"

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
      bg="purple.90"
    >

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
        <HStack right={32} bottom={10}>
          <SignFrame2 />
        </HStack>
      </Center>
      
    </VStack>
  );
}