import React from 'react';
import { StyleSheet, ImageBackground, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, SIZES } from '../constants';

const CategoryCard = ({ containerStyle, category, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        source={category.thumbnail}
        resizeMode="cover"
        style={{ ...styles.container, ...containerStyle }}>
        <Text style={styles.title}>{category.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 200,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    justifyContent: 'flex-end',
  },
  title: {
    ...FONTS.h2,
    color: COLORS.white,
  },
});

export default CategoryCard;
