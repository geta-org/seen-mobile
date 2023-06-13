import { StatusBar } from "react-native";

import {
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_700Bold,
  useFonts,
} from "@expo-google-fonts/comfortaa";
import { NativeBaseProvider } from "native-base";

import { SignIn } from "@/app/SignIn";
import { Loading } from "@/components/Loading";
import { THEME } from "@/theme/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_700Bold,
  });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <SignIn/> : <Loading/>}
    </NativeBaseProvider>
  );
}
