import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Dimensions, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
const { height, width } = Dimensions.get('window');

const screenTexts = [
    'telehome', 'Talk With a Vettled Home Service Pro in Less Time Than It Takes To Catch An Uber', 'Email address',
    'Password', 'Forgot Password?', 'Login', 'New?', 'Create Account Here'
];

const Login = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#fff'></StatusBar>

            <View style={styles.commonFlex}>
                <Text style={styles.HeaderText}>{screenTexts[0]}</Text>
                <Text style={styles.TextOne}>{screenTexts[1]}</Text>
            </View>
            <View style={styles.commonFlex}>
                <Text style={styles.EmailText}>{screenTexts[2]}</Text>
                <TextInput
                    style={styles.EmailTextInput}
                    placeholderTextColor="black"
                />
                <View style={styles.containerTwo}>
                    <Text style={styles.PasswordText}>{screenTexts[3]}</Text>
                    <TouchableOpacity>
                        <Text style={styles.ForgotPasswordText}>{screenTexts[4]}</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={styles.PasswordTextInput}
                    placeholderTextColor="black"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.Touch}>
                    <Text style={styles.TouchText}>{screenTexts[5]}</Text>
                </TouchableOpacity>
                <Text style={styles.TextTwo}>{screenTexts[6]}</Text>
                <TouchableOpacity>
                    <Text style={styles.TouchTextTwo}>{screenTexts[7]}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: height * 0.02,
    },
    commonFlex: { flex: 1 },
    HeaderText: {
        fontSize: height * 0.03,
        fontWeight: 'bold',
        color: '#696969',
        paddingVertical: height * 0.04,
    },
    TextOne: {
        fontSize: height * 0.04,
    },
    EmailText: {
        fontSize: height * 0.02,
        color: '#696969',
    },
    EmailTextInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        color: '#000'
    },
    PasswordText: {
        fontSize: height * 0.02,
        color: '#696969',
    },
    PasswordTextInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        color: '#000'
    },
    Touch: {
        width: width * 0.95,
        paddingVertical: height * 0.015,
        marginVertical: 20,
        justifyContent: 'center',
        backgroundColor: '#3BA94A',
        marginTop: height * 0.03,
        borderRadius: 8,
        alignSelf: 'center'
    },
    TouchText: {
        fontSize: height * 0.03,
        textAlign: 'center',
        color: '#fff',
    },
    TouchTextTwo: {
        fontSize: height * 0.025,
        textAlign: 'center',
        color: '#3BA94A',
        fontWeight: 'bold',
        paddingTop: height * 0.02,
    },
    containerTwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: height * 0.02,
    },
    TextTwo: {
        fontSize: height * 0.025,
        textAlign: 'center',
        color: '#696969',
    },
})