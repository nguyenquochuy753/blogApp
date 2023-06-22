import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const DetailPost = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { title, des, imgURLs, owner } = route.params
  const [value, onChangeText] = React.useState( des );
  return (
    <View style={{ height: '100%', backgroundColor: '#fff' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/back.png')}
          style={{ height: 36, width: 36, resizeMode: 'contain', marginLeft: 20, marginTop: 40 }} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{ marginLeft: 25, marginTop: 25, flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../assets/insta.png')} style={{ height: 36, width: 36, resizeMode: 'contain', borderRadius: 50 }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>{owner.userName}</Text>
          </View>
          <View style={{ width: '100%', alignItems: 'center', marginTop: 25 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#164DB1' }}>{title}</Text>
            <Image source={{ uri: imgURLs }} style={{ width: '90%', height: 300, resizeMode: 'contain' }} />
            {/* <Text style={{ fontSize: 16, marginHorizontal: 25, lineHeight: 30 }}>{des}</Text> */}
            {/* <textarea style={{ fontSize: 16, marginHorizontal: 25, lineHeight: 30 }}>{des}</textarea> */}
            <TextInput
              editable
              multiline
              // numberOfLines={4}
              // maxLength={40}
              onChangeText={text => onChangeText(text)}
              value={value}
              style={{ padding: 10 }} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default DetailPost