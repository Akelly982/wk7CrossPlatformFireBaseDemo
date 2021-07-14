
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// https://firebase.google.com/docs/auth/web/password-auth?authuser=1#web-v8

export function SignUp (props){
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const [validEmail, setValidEmail] = useState(false)
    const [validPassword, setValidPassword] = useState(false)

    const HandelEmail = (emailVal) => {
        //validate email

        if( emailVal.indexOf('@') > 0 ){
            //indexOf searches through a string to find char (returns indexPos)
            setValidEmail(true)
        }else{
            setValidEmail(false)
        }

        setEmail(emailVal)
    }

    const HandelPassword = (passwordVal) => {
        //validate password

        if(passwordVal.length >= 8){
            setValidPassword(true)
        }else{
            setValidPassword(false)
        }

        setPassword(passwordVal)
    }

    const HandelSubmit = () => { 
        props.handler(email,password)
    } 

    return(
        <View>
            <Text style={SignUpStyles.heading}>--  Sign Up for an account  --</Text>
            <Text>Email:</Text>
            <TextInput
                onChangeText={ (val) => HandelEmail(val) }
                style={SignUpStyles.input}
            />
            <Text>Password:</Text>
            <TextInput
                onChangeText={ (val) => HandelPassword(val) }
                style={SignUpStyles.input}
                secureTextEntry={true}
            />
            <TouchableOpacity 
                style={(validEmail && validPassword) ? SignUpStyles.button : SignUpStyles.buttonDisabled } 
                onPress={HandelSubmit}
                disabled={(validEmail&& validPassword) ? false : true }>
                    <Text style={SignUpStyles.buttonText}> SignUp </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={SignUpStyles.button2} 
                onPress={props.toggle}>
                    <Text style={SignUpStyles.buttonText}> Sign in to your account </Text>
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
    button2:{
        backgroundColor: "#bbbbbb",
        padding: 3,
        marginVertical: 5,
    },
    buttonText:{
        textAlign: 'center',
        color: "#e8e8e8",
    },
    buttonDisabled:{
        backgroundColor: "red",
        padding: 3,
        marginVertical: 5,
    },
})