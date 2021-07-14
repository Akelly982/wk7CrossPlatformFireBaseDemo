import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { firebaseConfig } from './config';
import * as firebase from 'firebase';

import { SignUp } from './components/SignUp';


// if not initialized initialize
if(!firebase.app.length){
  firebase.initializeApp(firebaseConfig)
}


export default function App() {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
