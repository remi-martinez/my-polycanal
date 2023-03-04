/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Realisateur } from './models/realisateur';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
    }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  MovieDetails: NavigatorScreenParams<any> | undefined;
  MovieDetailsContent: { filmId: number | undefined };
  MoreDetails: { realisateur: Realisateur | undefined, filmId: number | undefined };
  NotFound: undefined;
  Account: undefined;
  Login: undefined;
  SearchTab: { code: string | undefined };
  Welcome: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList,
  Screen>;

export type RootTabParamList = {
  HomeTab: undefined;
  SearchTab: undefined;
  NewMovieTab: undefined;
  ChannelsTab: undefined;
  MoreTab: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>>;

export type AuthContextType = {
  login: (data: any) => Promise<void>;
  signOut: () => void;
  signUp: (data: any) => Promise<void>;
  goToSignUp: () => void;
  goOutSignUp: () => void;
  currentToken: any
};
