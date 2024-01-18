import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={{ uri: 'https://wallpapercosmos.com/w/middle-retina/e/f/8/1239702-3840x2160-desktop-4k-green-leaf-wallpaper-image.jpg' }}
        style={styles.background}
        resizeMode="cover"
      >
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default App;
