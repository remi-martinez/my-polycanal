import { Image, ImageSourcePropType, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Colors from '../constants/Colors';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { useState } from 'react';
import { LoginForm } from '../components/Login/LoginForm';
import { SignupForm } from '../components/Login/SignupForm';

export const LoginScreen = ({ navigation }: { navigation: any }) => {
  const img: ImageSourcePropType = require('../assets/images/title-logo.png')

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'login', title: 'Connexion'},
    {key: 'signup', title: 'Inscription'},
  ]);

  const renderScene = SceneMap({
    login: LoginForm,
    signup: SignupForm,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={styles.label}
    />
  );


  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={img} style={styles.logoStyle} resizeMode="contain"/>
        <Text style={styles.subtitleText}>
          Vous avez déjà un compte CANAL+ ? Saisissez vos informations ci-dessous ou inscrivez-vous gratuitement
        </Text>
        <View style={styles.tabBarContainer}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            initialLayout={{width: useWindowDimensions().width}}
          />
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  subtitleText: {
    fontSize: 15,
    textAlign: 'center',
    color: Colors.base,
  },
  logoStyle: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    marginVertical: 10,
  },
  tabBarContainer: {
    flex: 1,
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20
  },
  indicator: {
    borderWidth: 1,
    borderColor: Colors.secondary
  },
  tabBar: {
    backgroundColor: Colors.black,
  },
  label: {
    textTransform: 'none'
  },
});

