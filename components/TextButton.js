import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants';

const TextButton = ({
  containerStyle,
  disabled,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...containerStyle }}
      disabled={disabled}
      onPress={onPress}>
      <Text style={{ ...styles.label, ...labelStyle }}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  label: {
    color: COLORS.white,
    ...FONTS.h3,
  },
});

export default TextButton;
