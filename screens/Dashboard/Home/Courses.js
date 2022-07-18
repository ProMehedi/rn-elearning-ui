import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { dummyData, SIZES } from '../../../constants';
import { VerticalCourseCard } from '../../../components';

const Courses = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={dummyData.courses_list_1}
      listKey="Courses"
      keyExtractor={item => `Courses-${item.id}`}
      contentContainerStyle={{
        marginTop: SIZES.padding,
      }}
      renderItem={({ item, index }) => (
        <VerticalCourseCard
          course={item}
          containerStyle={{
            marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
            marginRight:
              index === dummyData.courses_list_1.length - 1 ? SIZES.padding : 0,
          }}
        />
      )}
    />
  );
};

export default Courses;
