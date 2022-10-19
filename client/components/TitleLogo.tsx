import { TextProps } from './Themed';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

export function TitleLogo(props: TextProps) {
  const img: ImageSourcePropType = require('../assets/images/title-logo.png')

  return <Image source={img} style={styles.logoStyle} resizeMode="contain"/>;
}

const styles = StyleSheet.create({
  logoStyle: {
    flex: 1,
    height: 40,
  }
});

