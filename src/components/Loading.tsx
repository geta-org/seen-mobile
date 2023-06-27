import { Center, Image, Spinner, VStack } from "native-base";

import Splash from "@/assets/splash.png";

export function Loading() {
  return (
    <VStack>
      <Image
        source={Splash}
        alt="splashscreen"
        resizeMode="contain"
        position="absolute"
      />
      <Center top={96}>
        <Spinner color="#FFFFFF" top={48} size={40} />
      </Center>
    </VStack>
  );
}
