// screens/HomePage.js
import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Title, Paragraph } from 'react-native-paper';
import HomePageCompo from '../components/HomePageCompo';

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={{marginBottom:20,gap:5}}>
      <Title style={styles.title}>Say Hell to your</Title>
      <Title style={styles.title}>Healthcare partner</Title>
        </View>
      <Text style={styles.text}>Now it's easy and fast to make appointment with your doctors</Text>
      <HomePageCompo />

      <Card style={styles.card}>
        <Card.Content>
          <Title>Enter/Update Data</Title>
          <Paragraph>Submit and update health data for efficient program implementation.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            title="Enter/Update Data"
            onPress={() => navigation.navigate('DataEntry')}
          />
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>View Reports</Title>
          <Paragraph>Say Hello to your </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            title="View Reports"
            onPress={() => navigation.navigate('Reports')}
          />
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Manage Users</Title>
          <Paragraph>Manage user roles and permissions across the system.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            title="Manage Users"
            onPress={() => navigation.navigate('ManageUsers')}
          />
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#D1E9F6',
  },
  title: {
    fontSize: 36,
    fontWeight: 700,
    color: '#000',
    textAlign: 'center',
  },
  text:{
    textAlign:'center',
    fontSize:19,
    marginBottom:20,
    color:'grey',
    paddingLeft:40,
    paddingRight:40
  },
  card: {
    marginBottom: 16,
    backgroundColor:'#f0f8ff'
  },
});
