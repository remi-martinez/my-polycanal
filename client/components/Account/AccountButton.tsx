import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function AccountButton() {

  const img: ImageSourcePropType = require('../../assets/images/popcorn.png')
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Account')} style={styles.marginRight}>
      <Image source={img} style={styles.logoStyle} resizeMode="contain"/>
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  logoStyle: {
    flex: 1,
    height: 30,
    width: 30,
    float: 'right',
  },
  marginRight: {
    marginRight: 10
  }
});

