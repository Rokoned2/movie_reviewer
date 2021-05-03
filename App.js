import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import FAIcon from 'react-native-vector-icons/dist/FontAwesome';
import EIcon from 'react-native-vector-icons/dist/Entypo';
import { SearchBar } from 'react-native-elements';

import ListScreen from './src/Screens/ListScreen/ListScreen';
import EditReadScreen  from './src/Screens/EditReadScreen/EditReadScreen';
import SigninScreen from './src/Screens/SigninScreen/SigninScreen'
import SignupScreen from './src/Screens/SignupScreen/SignupScreen'

const Stack = createStackNavigator();

const MyStack = () => {
  // const [initializing, setInitializing] = useState(true);
  // const [isSignedIn, setUser] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);
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
    <Stack.Navigator>
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
                style={{
                  marginLeft: 10, 
                }}
              /> 
              <View style={{flex: 1}}>
                <SearchBar
                  placeholder="Search"
                  style={{flex: 1, width: "100%"}}
                  lightTheme={true}
                  containerStyle={{ borderWidth: 0, backgroundColor: "transparent", width: "100%", borderColor: "transparent"}}
                  inputContainerStyle={{backgroundColor: "transparent", width: "100%", borderWidth: 0}}
                  leftIconContainerStyle={{display: "none"}}
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
                  marginRight: 10
                }}
                onPress={() => props.navigation.navigate("Signin")}
              /> 
            </View>
          )
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

    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}



