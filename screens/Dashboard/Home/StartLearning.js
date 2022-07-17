import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';

// Components
import { COLORS, FONTS, images, SIZES } from '../../../constants';

const StartLearning = () => {
  return (
    <ImageBackground
      source={images.featured_bg_image}
      style={styles.container}
      imageStyle={{ borderRadius: SIZES.radius }}>
      <View style={styles.content}>
        <Text style={styles.title}>How to</Text>
        <Text style={styles.subtitle}>
          Make your brand more visible with our checklist
        </Text>
        <Text style={styles.meta}>By Scott Harris</Text>
      </View>

      <Image source={images.start_learning} style={styles.image} />

      <Text>Button Here</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    padding: 15,
  },
  title: {
    ...FONTS.body2,
    color: COLORS.white,
  },
  subtitle: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  meta: {
    ...FONTS.body4,
    color: COLORS.white,
  },
  image: {
    width: '100%',
    height: 110,
    marginTop: SIZES.padding,
  },
});

export default StartLearning;
