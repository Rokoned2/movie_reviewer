import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import FAIcon from 'react-native-vector-icons/dist/FontAwesome';
import EIcon from 'react-native-vector-icons/dist/Entypo';
import {SearchBar} from 'react-native-elements';

import ListScreen from './src/Screens/ListScreen/ListScreen';
import EditReadScreen from './src/Screens/EditReadScreen/EditReadScreen';
import SigninScreen from './src/Screens/SigninScreen/SigninScreen';
import SignupScreen from './src/Screens/SignupScreen/SignupScreen';
import Modal from './src/components/Modal';

const Stack = createStackNavigator();

const MyStack = () => {
  // const [initializing, setInitializing] = useState(true);
  // const [isSignedIn, setUser] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);
  // // Handle user state changes
  // const onAuthStateChanged = (user) => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  //  useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

  // if (!user) {
  //   return (
  //     <View>
  //       <Text>Login</Text>
  //     </View>
  //   );
  // }

  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          header: (props) => (
            <View style={styles.header}>
              <EIcon
                {...props}
                name="menu"
                size={40}
                style={styles.burguerMenu}
              />
              <View style={{flex: 1}}>
                <SearchBar
                  placeholder="Search"
                  style={{flex: 1, width: '100%'}}
                  lightTheme={true}
                  containerStyle={styles.containerStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  leftIconContainerStyle={{display: 'none'}}
                  // inputStyle={{backgroundColor: "black"}}
                  onChangeText={onChangeSearch}
                  value={searchQuery}
                />
              </View>
              <FAIcon
                {...props}
                name="user-circle"
                size={40}
                style={{
                  marginRight: 10,
                }}
                onPress={() => props.navigation.navigate('Modal')}
              />
            </View>
          ),
          // headerRight: (props) => (
          //   <FAIcon
          //     {...props}
          //     name="user-circle"
          //     size={40}
          //     style={{
          //       marginRight: 5
          //     }}
          //   />
          // ),
          // headerLeft: (props) => (
          //   <EIcon
          //     {...props}
          //     name="menu"
          //     size={40}
          //     style={{
          //       marginLeft: 5
          //     }}
          //   />
          // )
        }}
      />
      <Stack.Screen name="EditRead" component={EditReadScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen
        name="Modal"
        component={Modal}
        options={{
          animationEnabled: true,
          headerShown: false,
          cardStyle: {
            backgroundColor: 'rgba(0,0,0,0.15)',
          },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({current: {progress}}) => {
            return {
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.25, 0.7, 1],
                }),
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                  extrapolate: 'clamp',
                }),
              },
            };
          },
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  burguerMenu: {
    marginLeft: 10,
  },
  inputContainerStyle: {
    backgroundColor: 'transparent',
    width: '100%',
    borderWidth: 0,
  },
  containerStyle: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    width: '100%',
    borderColor: 'transparent',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
