import { View, Text , ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={{justifyContent : 'center' , alignItems : 'center' , flex : 1}}>
      <ActivityIndicator size="large" color="#164DB1"/>
      <Text style={{ fontSize: 24, color: "#164DB1" , fontWeight : "bold"}}>Loading...</Text>
    </View>
  )
}

export default Loading