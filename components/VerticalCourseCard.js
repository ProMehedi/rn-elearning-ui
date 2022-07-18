import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet, Text } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import IconLabel from './IconLabel';

const VerticalCourseCard = ({ containerStyle, course }) => {
  return (
    <TouchableOpacity
      style={{
        width: 270,
        ...containerStyle,
      }}>
      <Image
        source={course.thumbnail}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 150,
          marginBottom: SIZES.radius,
          borderRadius: SIZES.radius,
        }}
      />

      <View style={styles.details}>
        <View style={styles.play}>
          <Image
            source={icons.play}
            resizeMode="contain"
            style={styles.playIcon}
          />
        </View>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>{course.title}</Text>
          <IconLabel
            icon={icons.time}
            label={course.duration}
            containerStyle={{ marginTop: SIZES.base }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  details: { flexDirection: 'row' },
  play: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: COLORS.primary,
  },
  playIcon: {
    width: 20,
    height: 20,
  },
  info: {
    flexShrink: 1,
    paddingHorizontal: SIZES.radius,
  },
  infoTitle: {
    ...FONTS.h3,
    flex: 1,
    fontSize: 18,
  },
});

export default VerticalCourseCard;
