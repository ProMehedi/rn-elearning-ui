import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../constants';

const LineDevider = ({ lineStyle }) => {
  return <View style={{ ...styles.line, ...lineStyle }} />;
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.gray20,
  },
});

export default LineDevider;
