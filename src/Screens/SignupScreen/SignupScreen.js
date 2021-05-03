import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, Title, Button, Paragraph } from 'react-native-paper';
import {Keyboard, View, StyleSheet, Text, Pressable, Alert} from 'react-native';
import FAIcon from 'react-native-vector-icons/dist/FontAwesome';
import auth from '@react-native-firebase/auth';
import Ionicon from 'react-native-vector-icons/dist/Ionicons';

const SignupScreen = ({navigation}) => {

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [securePassword, setSecurePassword] = useState(true)	

	// auth()
	//   .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
	//   .then(() => {
	//     console.log('User account created & signed in!');
	//   })
	//   .catch(error => {
	//     if (error.code === 'auth/email-already-in-use') {
	//       console.log('That email address is already in use!');
	//     }

	//     if (error.code === 'auth/invalid-email') {
	//       console.log('That email address is invalid!');
	//     }

	//     console.error(error);
	//   });


	const OnSignup= async(email,password) => {
	  Keyboard.dismiss()
      if(!email)
      {
          Alert.alert("Email can't be empty");
      }
      // else if(!EmailRegex.test(email))
      // {
      //     Alert.alert("Email is not in the right format")
      // }
      else if(!password && password.trim() && password.length<5)
      {
          Alert.alert("Password is too weak and required min 6 characters")
      }
      else{
      	try{
          const Email = await auth().createUserWithEmailAndPassword(email,password)
          console.log("Email ", Email )
          // Email.user.updateProfile({displayName:username})
          // Email.user.reload()
          setName("")
          setEmail("")
          setPassword("")
          navigation.navigate('Signin')
    	} catch(error) {
          console.log("error", error.message, error.code)
        switch (error.code){
         case "auth/email-already-in-use":
            console.log("Email is already registered")
	     case 'auth/invalid-email':
	     	console.log('That email address is invalid!')
	     	break;
	     default:
	        console.log("Error")
	    }
      }
    }
  }


	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<TextInput 
					onChangeText={name => setName(name)}
					placeholder="Name" 
					style={styles.input} 
					autoCompleteType="email"
					keyboardType="email-address"
					autoCapitalize="none"
					left={<TextInput.Icon name="account" size={30} color="black" />}
				/>
				<TextInput 
					placeholder="Correo" 
					onChangeText={email => setEmail(email)}
					style={styles.input} 
					autoCompleteType="email"
					keyboardType="email-address"
					autoCapitalize="none"
					left={<TextInput.Icon name="email" size={30} color="black" /> 
					}
				/>
				
				<TextInput 
					onChangeText={password => setPassword(password)}
					placeholder="Contraseña" 
					secureTextEntry={securePassword} 
					style={styles.input} 
					left={<TextInput.Icon name="lock" size={30} color="black" />}
					right={
						// <Pressable onPress={()=> setSecurePassword(!securePassword)} style={{backgroundColor: "red"}}>
							<TextInput.Icon 
								name={securePassword ? "eye-off":"eye"} 
								onPress={()=> setSecurePassword(!securePassword)} 
								size={30} 
								color="black"
							/>
						// </Pressable>
					}
				/>
			</View>
			<Button 
				mode="contained" 
				onPress={() => console.log('Pressed')} 
				color="orange"
				labelStyle={{color: "#fff"}}
				style={{marginBottom: 10}}
				onPress={() => {
					console.log('Pressed',email,password)
					OnSignup(email,password)						
				}} 
				>
			    Registrarse
			</Button>
			<Button 
				mode="contained" 
				color="#F32E06"
				labelStyle={{color: "#fff"}}
				icon={() => (
					<Ionicon name="logo-google" size={20} color="#fff"/>
					)}
				>
			    Registrarse con Google
			</Button>

		</View>
	)
}

const styles = StyleSheet.create({
	form: {
		marginVertical: 15,
		backgroundColor: "red"
	},
	input: {
		width: "100%",
		alignSelf: "center",
	},
	container: {
		paddingHorizontal: 10
	}, 
	option: {
		textAlign: "center",
		textDecorationLine: 'underline',
		marginTop: 20
	}
})

export default SignupScreen; 