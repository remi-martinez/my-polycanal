import { Button, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ButtonStyled from '../components/ButtonStyled';
import HomeCarousel from '../components/HomeCarousel';


export default function HomeTabScreen({ navigation }: RootTabScreenProps<'HomeTab'>) {



  return (
    <View style={styles.container}>
      <HomeCarousel/>
      <Text style={styles.title}>Home Tab</Text>
      <ButtonStyled title={'Abonner'}></ButtonStyled>
      <Text>Le bouton ci-dessus sert à s'abonner.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
