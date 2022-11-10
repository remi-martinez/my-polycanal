/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomeTab: {
            screens: {
              HomeTabScreen: 'one',
            },
          },
          SearchTab: {
            screens: {
              SearchTab: 'search',
            },
          },
          LiveTab: {
            screens: {
              LiveTab: 'live',
            }
          },
          ChannelsTab: {
            screens: {
              ChannelsTab: 'channels'
            }
          },
          MoreTab: {
            screens: {
              MoreTab: 'more'
            }
          }
        },
      },
      Modal: 'modal',
      NotFound: '*',
      Account: 'account'
    },
  },
};

export default linking;
