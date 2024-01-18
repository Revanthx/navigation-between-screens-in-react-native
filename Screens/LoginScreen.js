import React, { useState } from 'react';
import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!username || !password) {
            Alert.alert('Invalid fields', 'Username and password are required');
        } else {
            navigation.navigate('Home');
        }
    };

    return (
        <ImageBackground
            source={{ uri: 'https://wallpapercosmos.com/w/middle-retina/e/f/8/1239702-3840x2160-desktop-4k-green-leaf-wallpaper-image.jpg' }}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
            <Text style={styles.loginText}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                />
                <Button title="Login" onPress={handleLogin} />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: '80%',
        padding: 20,
        borderRadius: 10,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    loginText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default LoginScreen;
