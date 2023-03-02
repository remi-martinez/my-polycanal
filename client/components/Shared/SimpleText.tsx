import { Text, TextProps } from '../Themed';
import Colors from '../../constants/Colors';

export function SimpleText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SanFrancisco', color: Colors.white }]} />;
}
