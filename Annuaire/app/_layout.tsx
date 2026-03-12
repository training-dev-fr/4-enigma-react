import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(home)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(home)"  />
        <Stack.Screen name="[id]"  />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
