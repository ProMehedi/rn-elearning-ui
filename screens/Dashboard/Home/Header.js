import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { COLORS, FONTS, icons, SIZES } from '../../../constants';
import { IconButton } from '../../../components';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={{ ...FONTS.h2 }}>Hello, Mehedi Hasan!</Text>
        <Text style={{ ...FONTS.body3, color: COLORS.gray50 }}>
          Sunday, 17th July 2022
        </Text>
      </View>
      <IconButton
        icon={icons.notification}
        iconStyle={{ tintColor: COLORS.black }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: SIZES.padding,
  },
});

export default Header;
