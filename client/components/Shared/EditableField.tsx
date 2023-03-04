import React from 'react';
import { StyleProp, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';

type InputProps = {
  onChangeText: any
  icon?: any
  iconPosition?: 'left' | 'right'
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>
  value?: string
  size?: number
  height?: number | string
  width?: number | string
  label?: string
  placeholder?: string
  error?: string
  password?: boolean
}

const EditableField = ({onChangeText, iconPosition, icon, style, value, size, height, width, placeholder, label, error, password, ...props}: InputProps) => {
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
          {width: width, height: height},
          {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, {fontSize: size}, style]}
          onChangeText={onChangeText}
          secureTextEntry={password}
          defaultValue={value}
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
    borderBottomWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 5,
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

export default EditableField;
