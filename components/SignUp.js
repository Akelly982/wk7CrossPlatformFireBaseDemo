
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// https://firebase.google.com/docs/auth/web/password-auth?authuser=1#web-v8

export function SignUp (props){
    return(
        <View>
            <Text style={SignUpStyles.heading}>--  Sign Up for an account  --</Text>
            <Text>Email:</Text>
            <TextInput
                style={SignUpStyles.input}
            />
            <Text>Password:</Text>
            <TextInput
                style={SignUpStyles.input}
                secureTextEntry={true}
            />
            <TouchableOpacity style={SignUpStyles.button}>
                <Text style={SignUpStyles.buttonText}>SignUp</Text>
            </TouchableOpacity>
        </View>
    )
}


const SignUpStyles = StyleSheet.create({
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
    buttonText:{
        textAlign: 'center',
        color: "#e8e8e8",
    },
})