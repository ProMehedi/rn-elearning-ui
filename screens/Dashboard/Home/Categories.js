import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { CategoryCard, Section } from '../../../components';
import { dummyData, SIZES } from '../../../constants';

const Categories = () => {
  return (
    <Section title="Categories">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dummyData.categories}
        listKey="Categories"
        keyExtractor={item => `Categories-${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.radius,
        }}
        renderItem={({ item, index }) => (
          <CategoryCard
            category={item}
            containerStyle={{
              marginLeft: index === 0 ? SIZES.padding : SIZES.base,
              marginRight:
                index === dummyData.categories.length - 1 ? SIZES.padding : 0,
            }}
          />
        )}
      />
    </Section>
  );
};

export default Categories;
