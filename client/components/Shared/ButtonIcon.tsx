import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';
import { AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { GlyphMap, IconProps } from '@expo/vector-icons/build/createIconSet';

interface ButtonProps {
  icon:  keyof typeof FontAwesome.glyphMap;
  secondary?: boolean
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  onPress: any
}
interface ButtonState { }

export default class ButtonIcon extends React.Component<ButtonProps, ButtonState> {

  onPress = () => {
    this.props.onPress();
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={[styles.appButtonContainer, this.props.disabled ? styles.disabled : styles.enabled,
          {backgroundColor: this.props.secondary ? Colors.secondary : Colors.grey},
          this.props.style]}
        disabled={this.props.disabled}>
        <FontAwesome name={this.props.icon} color={Colors.white} size={15}></FontAwesome>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  appButtonContainer: {
    height: 36,
    widht: 36,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: '500',
    alignSelf: "center",
  },
  disabled: {
    opacity: 0.5,
  },
  enabled: {
    opacity: 1.0,
  },
  disabledText: {
    color: Colors.buttonDisabledFg,
  },
  enabledText: {
    color: Colors.white,
  }
});
