import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings';
import { useFonts } from 'expo-font';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { StyleSheet } from 'react-native';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    'SanFrancisco': require('./assets/fonts/Hind/Hind-Medium.ttf')
  });

  if (!isLoadingComplete) {
    return <></>
  } else {
    return (
      <RootSiblingParent>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme}/>
          <StatusBar/>
        </SafeAreaProvider>
      </RootSiblingParent>
    );
  }
}

const styles = StyleSheet.create({
  darkBackground: {
    backgroundColor: '#000',
    height: '100%',
  }
});
