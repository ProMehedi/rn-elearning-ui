import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Shadow } from 'react-native-shadow-2';

// Components
import { COLORS, constants, FONTS, SIZES } from '../../constants';
import { Home, Search, Profile } from '../../screens';

const bottom_tabs = constants.bottom_tabs.map(bottom_tab => ({
  ...bottom_tab,
  ref: React.createRef(),
}));

const TabIndicator = ({ scrollX, measureLayout }) => {
  const inputRange = bottom_tabs.map((_, i) => i * SIZES.width);

  const tabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(measure => measure.width),
  });

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(measure => measure.x),
  });

  return (
    <Animated.View
      style={{
        ...styles.btIndicator,
        width: tabIndicatorWidth,
        transform: [{ translateX }],
      }}
    />
  );
};

const Tabs = ({ scrollX, onBtTabPress }) => {
  const containerRef = React.useRef();
  const [measureLayout, setMeasureLayout] = React.useState([]);

  React.useEffect(() => {
    let ml = [];

    bottom_tabs.forEach(bottom_tab => {
      bottom_tab?.ref?.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          ml.push({
            x,
            y,
            width,
            height,
          });

          if (ml.length === bottom_tabs.length) {
            setMeasureLayout(ml);
          }
        },
      );
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef.current]);

  return (
    <View style={styles.btTabs} ref={containerRef}>
      {measureLayout.length > 0 && (
        <TabIndicator scrollX={scrollX} measureLayout={measureLayout} />
      )}

      {bottom_tabs.map((item, index) => {
        const { icon, label } = item;
        return (
          <TouchableOpacity
            key={label}
            ref={item.ref}
            onPress={() => onBtTabPress(index)}
            style={styles.btTab}>
            <Image source={icon} style={styles.btIcon} resizeMode="contain" />
            <Text style={styles.btLabel}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MainLayout = () => {
  const flatListRef = React.useRef();
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const onBtTabPress = React.useCallback(
    btIndex => {
      flatListRef?.current?.scrollToOffset({
        offset: btIndex * SIZES.width,
      });
    },
    [flatListRef],
  );

  const renderContent = () => {
    return (
      <View style={styles.container}>
        <Animated.FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => `Main-${item.id}`}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
          renderItem={({ item }) => (
            <View style={styles.tab}>
              {item.label === constants.screens.home && <Home />}
              {item.label === constants.screens.search && <Search />}
              {item.label === constants.screens.profile && <Profile />}
            </View>
          )}
        />
      </View>
    );
  };

  const renderBottomTabs = () => {
    return (
      <View style={styles.btContainer}>
        <Shadow size={[SIZES.width - SIZES.padding * 2, 85]}>
          <View style={styles.btContent}>
            <Tabs scrollX={scrollX} onBtTabPress={onBtTabPress} />
          </View>
        </Shadow>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderContent()}
      {renderBottomTabs()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  tab: {
    height: SIZES.height,
    width: SIZES.width,
  },
  btContainer: {
    marginBottom: 20,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius,
  },
  btContent: {
    flex: 1,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary3,
  },
  btTabs: {
    flex: 1,
    flexDirection: 'row',
  },
  btTab: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btIcon: {
    width: 25,
    height: 25,
  },
  btLabel: {
    marginTop: 3,
    color: COLORS.white,
    ...FONTS.h3,
  },
  btIndicator: {
    position: 'absolute',
    left: 0,
    height: '100%',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
});

export default MainLayout;
