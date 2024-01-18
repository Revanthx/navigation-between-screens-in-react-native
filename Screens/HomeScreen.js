import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    return (
    <ImageBackground
    source={{
        uri: 'https://wallpapercosmos.com/w/middle-retina/e/f/8/1239702-3840x2160-desktop-4k-green-leaf-wallpaper-image.jpg',
    }}
    style={styles.background}
    resizeMode="cover"
    >
        <View style={styles.container}>
        <Text style={styles.HomeText}>Welcome to REACT!</Text>
        </View>
    </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
    flex: 1,
    resizeMode: 'cover',
},
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
HomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
},
});

export default HomeScreen;
