import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextButton } from '.';
import { COLORS, FONTS, SIZES } from '../constants';

const Section = ({ containerStyle, title, onPress, children }) => {
  return (
    <View style={{ ...containerStyle }}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TextButton
          containerStyle={styles.button}
          label="See All"
          onPress={onPress}
        />
      </View>

      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
  },
  title: {
    flex: 1,
    ...FONTS.h2,
  },
  button: {
    width: 80,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
  },
});

export default Section;
