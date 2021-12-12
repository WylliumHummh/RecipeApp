import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Button, Text, TextInput, Alert } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default function Login({ navigation }) {

    const [name, setName] = useState("Guest");
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async() => {
        try {
            const LoginData = await AsyncStorage.getItem('LoginData')
            let data = null
            if (LoginData!=null) {
              data = JSON.parse(jsonValue)
              setPomodoros(data)
              console.log('just set Info, Name and Email')
            } else {
              console.log('just read a null value from Storage')
              setName("Guest")
              setPassword("")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async (login) => {
        if (name.length == 0 || password.length == 0) {
            Alert.alert('Please provide username and password.')
        } else {
            try {
                await AsyncStorage.setItem('LoginData', JSON.stringify(login));
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <View style={styles.body} >
            <Text style={styles.text}>
                Rolling Recipes
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Username'
                onChangeText={(value) => setName(value)}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                onChangeText={(value) => setPassword(value)}
            />
            <Button
                title='Login'
                color='#1eb900'
                onPress={setData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'tan',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 130,
    },
    input: {
        width: 300,
        borderWidth: 2,
        borderColor: '#444',
        borderRadius: 10,
        backgroundColor: '#f75ade',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    }
})
