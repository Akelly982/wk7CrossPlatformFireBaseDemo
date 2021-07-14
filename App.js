import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { firebaseConfig } from './config';
import * as firebase from 'firebase';

import { SignUp } from './components/SignUp';
import {SignIn} from './components/SignIn';


// if not initialized initialize
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}


export default function App() {
  const [signUp,setSignUp] = useState( true )

  const HandelSignUp = (email,password) => {
    console.log(email)
    console.log(password)

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((response) => console.log(response))
    .catch ((error) => console.log(error))
  }

  const ToggleSignUp = () => {
    if (signUp === true) {
      setSignUp(false)
    }else{
      setSignUp(true)
    }
  }


  if (signUp){
    return (
      <View style={styles.container}>
        <SignUp toggle={ToggleSignUp} handler={HandelSignUp}/>
      </View>
    );
  }else{
    return (
      <View style={styles.container}>
        <SignIn toggle={ToggleSignUp}/>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
