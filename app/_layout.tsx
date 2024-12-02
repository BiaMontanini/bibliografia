import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { BibliografiaProvider } from "../contexts/BibliografiaContext";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <BibliografiaProvider>
      <Stack>
      <Stack.Screen name="index" options={{ title: 'Buscas' }} />
      <Stack.Screen name="lista" options={{ title: 'Lista de Livros' }} />
      <Stack.Screen name="ano" options={{ title: 'Livros por ano' }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      </BibliografiaProvider>
  );
}
