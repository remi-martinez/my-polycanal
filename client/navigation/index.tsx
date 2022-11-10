/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeTabScreen from '../screens/HomeTabScreen';
import SearchTabScreen from '../screens/SearchTabScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { TitleLogo } from '../components/TitleLogo';
import AccountButton from '../components/Account/AccountButton';
import LiveTabScreen from '../screens/LiveTabScreen';
import ChannelsTabScreen from '../screens/ChannelsTabScreen';
import MoreTabScreen from '../screens/MoreTabScreen';
import InfoModalButton from '../components/InfoModalButton';
import AccountScreen from '../screens/AccountScreen';
import GlobalStyle from '../constants/GlobalStyle';

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator/>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Page introuvable'}}/>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Modal" component={ModalScreen}/>
      </Stack.Group>
      <Stack.Screen name="Account" component={AccountScreen} options={{title: 'Mon compte', headerBackTitle: ''}}/>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      sceneContainerStyle={{ backgroundColor: '#f00'}}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="HomeTab"
        component={HomeTabScreen}
        options={({navigation}: RootTabScreenProps<'HomeTab'>) => ({
          title: 'Accueil',
          tabBarActiveTintColor: Colors.secondary,
          tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
          headerTitle: () => <TitleLogo/>,
          headerRight: () => <AccountButton/>,
          headerLeft: () => <InfoModalButton/>,
        })}
      />
      <BottomTab.Screen
        name="SearchTab"
        component={SearchTabScreen}
        options={{
          title: 'Recherche',
          tabBarActiveTintColor: Colors.secondary,
          tabBarIcon: ({color}) => <TabBarIcon name="search" color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="LiveTab"
        component={LiveTabScreen}
        options={{
          title: 'En direct',
          tabBarActiveTintColor: Colors.secondary,
          tabBarIcon: ({color}) => <TabBarIcon name="dot-circle" color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="ChannelsTab"
        component={ChannelsTabScreen}
        options={{
          title: 'Chaînes & Apps',
          tabBarActiveTintColor: Colors.secondary,
          tabBarIcon: ({color}) => <TabBarIcon name="cubes" color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="MoreTab"
        component={MoreTabScreen}
        options={{
          title: 'En plus',
          tabBarActiveTintColor: Colors.secondary,
          tabBarIcon: ({color}) => <TabBarIcon name="ellipsis-h" color={color}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
}) {
  return <FontAwesome5 size={30} style={{marginBottom: -3}} {...props} />;
}
