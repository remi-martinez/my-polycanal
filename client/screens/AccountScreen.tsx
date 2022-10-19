import { FlatList, Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { SimpleText } from '../components/Text/SimpleText';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TitleText } from '../components/Text/TitleText';
import { ClickableList } from '../components/ClickableList/ClickableList';
import { ClickableItem } from '../components/ClickableList/ClickableItem';




export default function AccountScreen() {
  const img: ImageSourcePropType = require('../assets/images/popcorn.png')

  return (
    <View style={styles.container}>
      <View style={styles.yourAvatarContainer}>
        <Image source={img} style={styles.logoStyle} resizeMode="contain"/>
        <SimpleText>Vous</SimpleText>
      </View>
      <View style={{ marginLeft: 10 }}>
        <TitleText level='h1'>Paramètres</TitleText>
      </View>
      <ClickableList>
        <ClickableItem isFirstItem={true} icon={'user'} value='Mon compte'/>
        <ClickableItem icon={'gear'} value='Réglages'/>
        <ClickableItem isLastItem={true} icon={'lightbulb-o'} value='Astuces'/>
      </ClickableList>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  yourAvatarContainer: {
    width: 150,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20
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
  logoStyle: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    marginVertical: 10,
  },
  flatList: {
    marginHorizontal: 20,
    borderRadius: 10,
  },
});
