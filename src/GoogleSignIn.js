import React from 'react';
import { Button } from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';

const GoogleSign = () => {

	const onGoogleButtonPress = async () => {
	  // Get the user's ID token
	  const { idToken } = await GoogleSignin.signIn();

	  // Create a Google credential with the token
	  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

	  // Sign in the user with the credential
	  return auth().signInWithCredential(googleCredential);
	}

  return (
    <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
  );
}

export default GoogleSign; 