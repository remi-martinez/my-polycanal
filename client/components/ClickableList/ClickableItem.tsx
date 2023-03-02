import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome, Octicons } from '@expo/vector-icons';
import { SimpleText } from '../Shared/SimpleText';
import Colors from '../../constants/Colors';

interface ClickableItemProps {
  value: string;
  icon: keyof typeof FontAwesome.glyphMap;
  isFirstItem?: boolean,
  isLastItem?: boolean;
}

export function ClickableItem(props: ClickableItemProps) {
  return <TouchableOpacity style={[
    styles.container,
    props?.isFirstItem ? styles.firstItemContainer : {},
    props?.isLastItem ? styles.lastItemContainer : {} ]}>
    <FontAwesome name={props.icon} style={styles.clickableItemIcon}/>
    <View style={styles.flexSpaceBetween}>
      <SimpleText style={styles.clickableItemText}>{props.value}</SimpleText>
      <Octicons name={'chevron-right'} style={styles.clickableItemArrow}/>
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#202428',
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderColor: Colors.border,
    borderBottomWidth: 1,
  },
  firstItemContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  lastItemContainer: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  clickableItemIcon: {
    color: '#fff',
    backgroundColor: '#bdccd9',
    overflow: 'hidden',
    borderRadius: 5,
    height: 32,
    width: 32,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 3,
    fontSize: 24,
    marginLeft: 5
  },
  clickableItemArrow: {
    color: '#ffffff80',
  },
  clickableItemText: {
    marginLeft: 10
  },
  flexSpaceBetween: {
    width: '88%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
