import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Ionicon from 'react-native-vector-icons/dist/Ionicons';
import FAIcon from 'react-native-vector-icons/dist/FontAwesome';
import {Avatar, Card, IconButton} from 'react-native-paper';

const Modal = () => {
  const [profileImage, setprofileImage] = useState(null);

  const themes = [
	{
	  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
	  theme : 'red',
	},
	{
	  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
	  theme : 'blue',
	},
	{
	  id: '58694a0f-3da1-471f-bd96-145571e29d72',
	  theme : 'yellow',
	},
  ];


  // {/* <Avatar.Icon {...props} icon="folder" /> */}
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View
          style={{
            padding: 10,
          }}>
          <Ionicon name="close" size={30} />
          {profileImage ? (
            <Image />
          ) : (
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              titleStyle={{fontSize: 15}}
              left={(props) => (
                <FAIcon {...props} name="user-circle" size={40} />
              )}
            />
          )}
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <View styles={styles.themeList}>
		<FlatList 

          <View style={[styles.color, styles.red]} />
          <View style={[styles.color, styles.blue]} />
        </View>
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
    width: '90%',
    height: '50%',
    backgroundColor: '#fff',
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
});

export default Modal;
