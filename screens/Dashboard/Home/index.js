import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

// Components
import { COLORS, SIZES } from '../../../constants';
import StartLearning from './StartLearning';
import Header from './Header';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}>
        <StartLearning />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: SIZES.padding,
  },
});

export default Home;
