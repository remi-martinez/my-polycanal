/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, DefaultTheme, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeTabScreen from '../screens/HomeTabScreen';
import SearchTabScreen from '../screens/SearchTabScreen';
import { AuthContextType, RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { TitleLogo } from '../components/TitleLogo';
import AccountButton from '../components/Account/AccountButton';
import LiveTabScreen from '../screens/LiveTabScreen';
import MoreTabScreen from '../screens/MoreTabScreen';
import InfoModalButton from '../components/InfoModalButton';
import AccountScreen from '../screens/AccountScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import axios, { AxiosError, AxiosResponse } from 'axios';
import Toast from 'react-native-root-toast';
import MovieDetailsStack from './MovieDetailsStack';

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator/>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
export const AuthContext = React.createContext<AuthContextType>(null!);

export function RootNavigator() {
  const navigation = useNavigation();

  axios.interceptors.request.use(async (request) => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  })

  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        Toast.show('Merci de vous reconnecter.', {
          duration: Toast.durations.LONG,
        }).then(() => navigation.navigate('Welcome'));
      }

      return Promise.reject(error);
    }
  );
  /**
   * A root stack navigator is often used for displaying modals on top of all other content.
   * https://reactnavigation.org/docs/modal
   */
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
        case 'GO_TO_SIGN_UP':
          return {
            ...prevState,
            isSignup: true
          };
        case 'GO_OUT_SIGN_UP':
          return {
            ...prevState,
            isSignup: false
          };
      }
    },
    {
      isLoading: true,
      isSignup: false,
      isSignout: false,
      userToken: null,
    }
  );


  const authContext = React.useMemo(
    () => ({
      currentToken: state.userToken,
      login: async (data: any) => {
        dispatch({type: 'SIGN_IN', token: data})
        try {
          await AsyncStorage.setItem('token', data)
        } catch (e) {
          // saving error
        }
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (data: any) => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      goToSignUp: () => { dispatch({type: 'GO_TO_SIGN_UP'}) },
      goOutSignUp: () => { dispatch({type: 'GO_OUT_SIGN_UP'}) },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
            headerShown: false,
          }}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{
            headerShown: true,
            headerTitle: 'Se connecter',
            headerStyle: {backgroundColor: Colors.grey}
          }}/>
        </Stack.Group>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Page introuvable'}}/>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Modal" component={ModalScreen}/>
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal', headerShown: false}}>
          <Stack.Screen name="MovieDetails" component={MovieDetailsStack}/>
        </Stack.Group>
        <Stack.Screen name="Account" component={AccountScreen} options={{title: 'Mon compte', headerBackTitle: ''}}/>
      </Stack.Navigator>
    </AuthContext.Provider>
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
      sceneContainerStyle={{backgroundColor: '#f00'}}
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
