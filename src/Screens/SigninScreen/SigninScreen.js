import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput, Title, Button, Paragraph} from 'react-native-paper';
import MCIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/dist/Ionicons';
import {View, StyleSheet, Text, Pressable} from 'react-native';

const SigninScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const userLogin = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to signin!');
    } else {
      setIsLoading(true);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
          console.log('User logged-in successfully!');
          setIsLoading(false);
          setEmail('');
          setPassword('');
          navigation.navigate('List');
        })
        .catch((error) => setErrorMessage(error.message));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Correo"
          style={styles.input}
          autoCompleteType="email"
          keyboardType="email-address"
          autoCapitalize="none"
          left={<TextInput.Icon name="email" size={30} color="black" />}
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
          onChangeText={(password) => setPassword(password)}
          placeholder="Contraseña"
          secureTextEntry={true}
          style={styles.input}
          left={<TextInput.Icon name="lock" size={30} color="black" />}
        />
      </View>
      <Button
        mode="contained"
        onPress={() => {
          console.log('Pressed');
          signInWithEmailAndPassword(email, password);
        }}
        color="orange"
        labelStyle={{color: '#fff'}}
        style={{marginBottom: 10}}>
        Ingresar
      </Button>
      <Button
        mode="contained"
        color="#F32E06"
        labelStyle={{color: '#fff'}}
        icon={() => <Ionicon name="logo-google" size={20} color="#fff" />}>
        Ingresar con Google
      </Button>
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Paragraph style={styles.option}>No tengo una cuenta</Paragraph>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginVertical: 15,
    backgroundColor: 'red',
  },
  input: {
    width: '100%',
    alignSelf: 'center',
  },
  container: {
    paddingHorizontal: 10,
  },
  option: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default SigninScreen;
