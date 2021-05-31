import React from 'react';
import { StyleSheet, Image } from 'react-native';

import * as Yup from 'yup';

import { AppFormField, AppForm, SubmitButton} from '../components/forms';
import Screen from '../components/Screen';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function LoginScreen(props) {

    return (
        <Screen style= {styles.container}>
            <Image 
            style = {styles.logo}
            source= {require('../assets/logo-red.png')} />

            <AppForm
                initialValues={{ email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema = {validationSchema}
            >
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="mail"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                           
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Login" />
            </AppForm>


        </Screen>
    );
}

const styles = StyleSheet.create({

    container:{
        padding:10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
})



export default LoginScreen;