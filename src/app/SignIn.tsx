import { Button, Text, VStack } from "native-base";

import auth from "@react-native-firebase/auth";

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
      alignItems='center'
      padding={24}
    >

      <Text fontSize={64} fontWeight="bold">
        Hello World
      </Text>

      <Text fontSize={36} color="#38434D">
        Login with email and password
      </Text>

      <Button onPress={handleSignIn}>
        Login
      </Button>

      <Text fontSize={36} color="#38434D">
        This is the first page of your app.
      </Text>

    </VStack>
  );
}