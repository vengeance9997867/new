import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'

export default class HomePageCompo extends Component {
  render() {
    return (
      <View>
         <TextInput
        label="Search...."
        mode="outlined"
        style={{marginBottom:40,borderColor:'black'}}
        />
      </View>
    )
  }
}
