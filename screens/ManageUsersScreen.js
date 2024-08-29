// screens/ManageUsersScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ManageUsersScreen() {
  return (
    <View style={styles.container}>
      <Text>Manage Users Screen</Text>
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
