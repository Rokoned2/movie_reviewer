import React, {useState} from 'react';
import {List} from 'react-native-paper';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const reviewList = [
  {
    id: 1,
    title: 'Review 1',
    punctuation: 2.5,
  },
  {
    id: 2,
    title: 'Review 2',
    punctuation: 3.5,
  },
];

const ListScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <List.Item
      title={item.title}
      onPress={() => navigation.navigate('EditRead')}
      right={(props) => (
        <View style={styles.itemRight}>
          <Text>{item.punctuation}</Text>
          <List.Icon
            {...props}
            icon="star"
            color="yellow"
            style={styles.star}
          />
        </View>
      )}
    />
  );

  return (
    <>
      <FlatList
        data={reviewList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const styles = StyleSheet.create({
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    textShadowRadius: 2,
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
  },
});

export default ListScreen;
