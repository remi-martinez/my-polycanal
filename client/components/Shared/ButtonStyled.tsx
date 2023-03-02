import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

interface ButtonProps {
  title: string
  uppercase?: boolean
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  onPress: any
}
interface ButtonState { }

export default class ButtonStyled extends React.Component<ButtonProps, ButtonState> {

  onPress = () => {
    this.props.onPress();
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={[this.props.style, styles.appButtonContainer, this.props.disabled ? styles.disabled : styles.enabled]}
        disabled={this.props.disabled}>
        <Text style={[styles.appButtonText, this.props.disabled ? styles.disabledText : styles.enabledText ]}>
          {this.props.title || 'Button'}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: Colors.secondary,
    borderRadius: 3,
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
