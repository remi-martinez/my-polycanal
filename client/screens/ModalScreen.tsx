import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TitleLogo } from '../components/TitleLogo';
import React from 'react';
import Colors from '../constants/Colors';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>myPOLYCANAL</Text>*/}
      <TitleLogo width={200}/>
      <View style={styles.separator}/>
      <Text style={styles.txt}>Ce projet a été réalisé dans le cadre d'un projet à l'école Polytech Lyon.
        Développé par Baptiste AUBERT, Alexandre LAVAL, Rémi MARTINEZ et Anaïs THORAL</Text>
      <View style={styles.separator}/>
      <Text style={styles.copyrightText}>&copy; 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  txt: {
    fontSize: 18,
    color: Colors.white,
    marginHorizontal: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  copyrightText: {
    color: Colors.base,
    fontSize: 10,
    textAlign: 'center'
  },
});
