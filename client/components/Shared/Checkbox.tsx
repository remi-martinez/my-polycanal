import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

type CheckboxProps = {
  label: string
  onChange: any
  style?: StyleProp<ViewStyle>
};

const Checkbox = ({ label, style, ...props}: CheckboxProps) => {
  const [checked, setChecked] = React.useState(true);

  return (
    <TouchableOpacity
      style={[style, styles.checkboxContainer]}
      onPress={() => {
        props.onChange(!checked);
        setChecked(!checked)
      }}>
      <View style={styles.checkbox}>
        {checked && <View style={styles.checkboxTick}><Ionicons name='checkmark-outline' color={Colors.secondary}/></View>}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 3,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxTick: {
    width: 10,
    height: 12,
    borderRadius: 2,
  },
  label: {
    fontSize: 16,
    color: Colors.base
  },
});

export default Checkbox;
