import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

const IconLabel = ({ containerStyle, icon, iconStyle, label, labelStyle }) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <Image source={icon} style={{ ...styles.icon, ...iconStyle }} />
      <Text style={{ ...styles.label, ...labelStyle }}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray30,
  },
  label: {
    marginLeft: SIZES.base,
    color: COLORS.gray30,
    ...FONTS.body3,
  },
});

export default IconLabel;
