import { TextProps } from './Themed';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

type TitleLogoProps = {
  width?: number
}

export function TitleLogo(props: TextProps & TitleLogoProps) {
  const img: ImageSourcePropType = require('../assets/images/title-logo.png')

  return <Image source={img} style={[styles.logoStyle, {width: props.width}]} resizeMode="contain"/>;
}

const styles = StyleSheet.create({
  logoStyle: {
    height: 40,
  }
});

