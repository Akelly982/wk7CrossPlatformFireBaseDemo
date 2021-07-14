
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// https://firebase.google.com/docs/auth/web/password-auth?authuser=1#web-v8


export function SignIn (props){
   
    return(
        <View>
            <Text style={SignInStyles.heading}>--  Sign In to your account --</Text>
            <Text>Email:</Text>
            <TextInput
                style={SignInStyles.input}
            />
            <Text>Password:</Text>
            <TextInput
                style={SignInStyles.input}
                secureTextEntry={true}
            />
            <TouchableOpacity style={SignInStyles.button}>
                <Text style={SignInStyles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SignInStyles.button2} onPress={props.toggle}>
                <Text style={SignInStyles.buttonText}>Sign up for an account</Text>
            </TouchableOpacity>
        </View>
    )
}


const SignInStyles = StyleSheet.create({
    heading: {
        fontSize: 22,
    },  
    input: {
        fontSize:18,
        borderColor: '#e8e8e8',
        borderWidth: 2,
    },
    button:{
        backgroundColor: "#2b2b2b",
        padding: 3,
        marginVertical: 5,
    },
    button2:{
        backgroundColor: "#bbbbbb",
        padding: 3,
        marginVertical: 5,
    },
    buttonText:{
        textAlign: 'center',
        color: "#e8e8e8",
    },
})