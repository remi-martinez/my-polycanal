import { Text, TextProps } from '../Themed';
import Colors from '../../constants/Colors';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono', color: Colors.white }]} />;
}
