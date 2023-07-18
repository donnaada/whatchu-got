import React from 'react';
import { StyleSheet, Button, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { css } from './css';

export default function SplashScreen({ navigation }) {

  return (
    <SafeAreaView style={css.container}>
      <Text style={css.title }>Whatchu got??</Text>
      <TouchableOpacity
        title="Get Started!"
        onPress={() => navigation.navigate('Inventory')}
        style={css.button}
      >
        <Text style={css.buttonText}>Let's Take a Look!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
