import { Text, TextProps } from '../Themed';
import Colors from '../../constants/Colors';
import { SimpleText } from './SimpleText';

interface TitleTextProps {
  level: string
}

const H1_FONT_SIZE = 24;
const H2_FONT_SIZE = 22;
const H3_FONT_SIZE = 20;
const H4_FONT_SIZE = 16;


export function TitleText(props: TextProps & TitleTextProps) {

  const titleFontSize = 20

  const getFontSize = () => {
    switch(props?.level) {
      case 'h2': return H2_FONT_SIZE;
      case 'h3': return H3_FONT_SIZE;
      case 'h4': return H4_FONT_SIZE;
      default: return H1_FONT_SIZE;
    }
  }

  return <SimpleText {...props} style={{fontSize: getFontSize()}}/>
}
