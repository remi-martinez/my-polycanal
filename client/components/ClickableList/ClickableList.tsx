import { StyleSheet, View } from 'react-native';
import { ClickableItem } from './ClickableItem';
import Colors from '../../constants/Colors';

export function ClickableList(props: any) {
  return <View style={styles.container}>
    {props.children}
  </View>
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderBottomWidth: 0,
    borderRadius: 10,
    marginHorizontal: 10,
  }
});
