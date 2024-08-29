// screens/SignupScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        label="Email"
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        label="Confirm Password"
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />

      <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Home')}>
        Sign Up
      </Button>

      <Button mode="outlined" style={styles.skipButton} onPress={() => navigation.navigate('Home')}>
        Skip
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00aaff',
    marginBottom: 24,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 12,
    backgroundColor: '#00aaff',
  },
  skipButton: {
    marginTop: 12,
    borderColor: '#00aaff',
    borderWidth: 1,
    color: '#00aaff',
  },
  link: {
    marginTop: 16,
    color: '#00aaff',
  },
});
