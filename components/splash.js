import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { css } from './css';

const image = {uri: 'https://images.unsplash.com/photo-1651647232601-fbea5b6cca0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80'};

export default function SplashScreen({ navigation }) {
  return (
    <ImageBackground source={image} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Whatchu got??</Text>
          <TouchableOpacity
            title="Get Started!"
            onPress={() => navigation.navigate('Inventory')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Let's Take a Look!</Text>
          </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  button: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
