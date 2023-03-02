import React from 'react';
import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type InputProps = {
  onChangeText: any
  icon?: any
  iconPosition?: 'left' | 'right'
  style?: StyleProp<ViewStyle>
  value?: string
  label?: string
  placeholder?: string
  error?: string
  password?: boolean
}

const Input = ({onChangeText, iconPosition, icon, style, value, placeholder, label, error, password, ...props}: InputProps) => {
  const [focused, setFocused] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return Colors.secondary;
    }

    if (focused) {
      return Colors.white;
    } else {
      return Colors.grey;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={{color: Colors.white}}>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          secureTextEntry={password}
          value={value}
          autoCapitalize='none'
          placeholder={placeholder}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 48,
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.125))',
    marginTop: 5,
  },

  inputContainer: {
    paddingVertical: 12,
  },

  textInput: {
    flex: 1,
    width: '100%',
    color: Colors.white,
    paddingLeft: 5
  },

  error: {
    color: Colors.secondary,
    paddingTop: 4,
    fontSize: 12,
  },
});

export default Input;
