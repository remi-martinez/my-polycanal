import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { MonoText } from './Text/StyledText';

interface ButtonProps {
  title: string
  uppercase?: boolean
}
interface ButtonState { }

export default class ButtonStyled extends React.Component<ButtonProps, ButtonState> {


  onPress = () => {

  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress} style={styles.appButtonContainer}>
        <MonoText style={styles.appButtonText}>{this.props.title || 'Button'}</MonoText>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
