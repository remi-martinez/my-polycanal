import { Image, ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Colors from '../constants/Colors';
import ButtonStyled from '../components/Shared/ButtonStyled';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const WelcomeScreen = ({navigation}: { navigation: any }) => {
  const logoImg: ImageSourcePropType = require('../assets/images/title-logo.png')
  const backgroundImg: ImageSourcePropType = require('../assets/images/fight-club.jpg')

  useEffect(() => {
    AsyncStorage.removeItem('token');
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImg}
                       style={styles.backgroundImageContainer}
                       imageStyle={styles.backgroundImage}>
        <LinearGradient
          colors={['#00000000', '#000000']}
          style={{height: '100%', width: '100%'}}>
          <View style={styles.container}>
            <Image source={logoImg} style={styles.logo} resizeMode="contain"/>
            <Text style={styles.mainText}>Ne cherchez pas, vous ne trouverez pas + ailleurs</Text>
            <ButtonStyled onPress={() => navigation.navigate('Login')} style={styles.button} title="Se connecter"/>
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
              <Text style={styles.subtitleText}>Connectez-vous dès maintenant pour profiter d'un catalogue de
                films inédits.</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
      <Text style={styles.copyrightText}>&copy; 2023 - Polytech | AUBERT LAVAL MARTINEZ THORAL</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logo: {
    height: 150,
    width: 150,
  },
  backgroundImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
  },
  backgroundImage: {
    opacity: 0.4

  },
  mainText: {
    color: Colors.white,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 30
  },
  subtitleText: {
    color: Colors.base,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 30
  },
  copyrightText: {
    color: Colors.grey,
    fontSize: 10,
    textAlign: 'center'
  },
  button: {
    width: 250,
    marginVertical: 20
  }
});

