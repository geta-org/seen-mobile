import { StatusBar } from "react-native";

import { NativeBaseProvider } from "native-base";

import { SignIn } from "@/app/SignIn";
import { THEME } from "@/theme/index";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignIn />
    </NativeBaseProvider>
  );
}
