import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import axios from 'axios'

const DetailPost = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { title, des, imgURLs, owner , id , username , email , postID } = route.params
  const [value, onChangeText] = React.useState( des );
  const [value1, onChangeText1] = React.useState(title);
  const updatePost = () =>{
    console.log(id)
    axios.post('http://172.17.16.114:8000/v1/post/updatePost', {
      postID : postID,
      title: value1,
      des : value,
    }).then((res) => { console.log(res.data) })
      .catch((err) => console.log(err + id))
  }
  return (
    <View style={{ height: '100%', backgroundColor: '#fff' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home' , {id : id , username : username , email : email})}>
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
            {/* <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#164DB1' }}>{title}</Text> */}
            <TextInput
              editable
              multiline
              
              // numberOfLines={4}
              // maxLength={40}
              onChangeText={text => onChangeText1(text)}
              value={value1}
              style={{ padding: 10, fontSize: 24, fontWeight: 'bold', color: '#164DB1' }} />
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
          {id === owner._id ? (<TouchableOpacity
            style={{ height: 35, width: 80, backgroundColor: '#FCC526', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20, marginLeft: 300 }}
            onPress={updatePost}
          >
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Update</Text>
          </TouchableOpacity>) : ""}
        </View>
      </ScrollView>
    </View>
  )
}

export default DetailPost