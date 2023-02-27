import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import HomeCarousel from '../components/Home/HomeCarousel';
import HomeCategories from '../components/Home/HomeCategories';
import HomeSelection from '../components/Home/HomeSelection';


export default function HomeTabScreen({navigation}: RootTabScreenProps<'HomeTab'>) {


  return (
    <View style={styles.container}>
      <HomeCarousel/>
      <HomeCategories/>
      <View style={styles.separator}>
        <Text style={styles.title}>Notre sélection</Text>
      </View>
      <HomeSelection/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  separator: {
    marginVertical: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});
