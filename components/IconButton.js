import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

const IconButton = ({ icon, iconStyle, containerStyle, onPress }) => {
  return (
    <TouchableOpacity style={{ ...containerStyle }} onPress={onPress}>
      <Image
        source={icon}
        style={{ ...styles.icon, ...iconStyle }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    tintColor: COLORS.white,
  },
});

export default IconButton;
