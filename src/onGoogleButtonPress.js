import auth from '@react-native-firebase/auth';

async function onGoogleButtonPress() {
  // Get the user's ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign in the user with the credential
  return auth().signInWithCredential(googleCredential);
}