import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';

import useColorScheme from '../hooks/useColorScheme';


export default function InfoModalButton() {

  const colorScheme = useColorScheme();
  const navigation = useNavigation();

    return (
        <Pressable
          onPress={() => navigation.navigate('Modal')}
          style={styles.marginLeft}>
          <FontAwesome
            name="info-circle"
            size={25}
            color={Colors[colorScheme].text}
            style={{marginRight: 15}}
          />
        </Pressable>
    );
}

const styles = StyleSheet.create({
  marginLeft: {
    marginLeft: 10
  }
});

