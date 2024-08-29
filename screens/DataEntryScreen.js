// screens/DataEntryScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DataEntryScreen() {
  return (
    <View style={styles.container}>
      <Text>Data Entry Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
