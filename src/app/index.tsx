import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base'
import { useFonts, Comfortaa_300Light, Comfortaa_400Regular, Comfortaa_500Medium, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa'; 

import { THEME } from '@/theme/index';
import { SignIn } from '@/app/SignIn'

export default function App() {
  const [fontsLoaded] = useFonts({Comfortaa_300Light, Comfortaa_400Regular, Comfortaa_500Medium, Comfortaa_700Bold})

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <SignIn />
    </NativeBaseProvider>
  );
}
