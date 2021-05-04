import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Ionicon from 'react-native-vector-icons/dist/Ionicons';
import FIcon from 'react-native-vector-icons/dist/Fontisto';
import {Avatar, Card, IconButton, shadow} from 'react-native-paper';

const FilterReviewsModal = ({navigation}) => {
  return (
    <View style={styles.modal}>
      <View style={styles.filterOptions}>
        <View style={styles.row}>
          <View style={styles.filterIcon}>
            <Text style={styles.iconText}>Az</Text>
            <FIcon name="arrow-down-l" size={15} color="#000" />
          </View>
          <View style={styles.filterIcon}>
            <Text style={styles.iconText}>Za</Text>
            <FIcon name="arrow-up-l" size={15} color="#000" />
          </View>
        </View>
        <Text style={styles.filterLabel}>Por nombre</Text>
      </View>
      <View style={styles.filterOptions}>
        <View style={styles.row}>
          <View style={styles.filterIcon}>
            <FIcon name="date" size={25} color="#000" />
            <FIcon name="arrow-down-l" size={15} color="#000" />
          </View>
          <View style={styles.filterIcon}>
            <FIcon name="date" size={25} color="#000" />
            <FIcon name="arrow-up-l" size={15} color="#000" />
          </View>
        </View>
        <Text style={styles.filterLabel}>Por fecha</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: '50%',
    height: '30%',
    marginLeft: 'auto',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 10,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderRadius: 10,
  },
  color: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
  },
  red: {
    backgroundColor: 'red',
  },
  blue: {
    backgroundColor: 'blue',
  },
  themeList: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'blue',
    width: 500,
    height: 400,
  },
  filterOptions: {
    flex: 1,
    paddingVertical: 10,
  },
  filterIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  row: {flexDirection: 'row', flex: 1},
  filterLabel: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default FilterReviewsModal;
