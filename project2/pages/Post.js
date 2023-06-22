import { View, Text , StyleSheet , TextInput , TouchableOpacity , Image} from 'react-native'
import React , {useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as ImagePicker from 'expo-image-picker';
import {useRoute} from "@react-navigation/native"
import axios from 'axios';
import * as DocumentPicker from 'expo-document-picker';
import Toast from "react-native-toast-message"

const Post = () => {
  const [image, setImage] = useState('');
  const [fileimage, setFileImage] = useState('');
  const [title , setTitle] = useState('')
  const [des , setDes] = useState('')
  const route = useRoute()
  const {id} = route.params
  
  const imagePicker = async() =>{
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });
    // if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    //   setFileImage(result.assets[0])
    // }
    try {
      const fileResult = await DocumentPicker.getDocumentAsync({
        type: '*/*', // Chọn tất cả các loại tệp tin
      });

      if (!fileResult.cancelled) {
        setFileImage(fileResult);
        setImage(fileResult.name);
      }
      console.log(fileResult)
    } catch (error) {
      console.log('Error:', error);
    }
  }
  const formData = new FormData();
  formData.append('title', title);
  formData.append('des', des);
  formData.append('owner', id);
  if (fileimage) {
    formData.append('imgURLs', {
      uri: fileimage.uri,
      name: fileimage.name,
      type: fileimage.mimeType,
    });
  }
  const createPostHandle = ()=>{
    
    axios.post('http://172.17.16.114:8000/v1/post/addPost',formData,{
      headers : {
        'Content-Type': 'multipart/form-data',
      }
    }).then(res=>res.data)
    Toast.show({
      type: "success",
      text1: "Success",
      text2: "Create Success!"
    })
  }
  return (
    <View style = {{height : '100%' , backgroundColor : '#fff' , paddingTop : 45}}>
      <View style={{alignItems : 'center' , marginVertical : 25}}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#164DB1' }}>Create new post</Text>
      </View>
      <View style={styles.input}>
        <Icon name='text-fields' size={20} color="#666" style={{ marginRight: 5, marginTop: 3 }} />
        <TextInput placeholder='Title' style={{ color: '#ccc' }} value={title} onChangeText={(val)=>setTitle(val)}/>
      </View>
      <View style={styles.input}>
        <Icon name='description' size={20} color="#666" style={{ marginRight: 5, marginTop: 3 }} />
        <TextInput placeholder='Description' style={{ color: '#ccc' }} value={des} onChangeText={(val) => setDes(val)} />
      </View>
      <View style={{marginTop : 25 , alignItems : 'center'}}>
        {/* {image && <Image source={{ uri: image }} style={{ width: 150, height: 150 , resizeMode : 'contain' }} />} */}
        {fileimage && <Text>{fileimage.name}</Text>}
        <TouchableOpacity 
        style={{ height: 35, width: 130, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center', borderRadius: 6 , marginTop : 10 }}
        onPress={imagePicker}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold'}}>Choose Image</Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent : 'center' , alignItems : 'center' , marginTop : 40}}>
        <TouchableOpacity 
        style={{ width: '63%', height: 40, backgroundColor: '#164DB1' , borderRadius : 6 , alignItems : 'center' , justifyContent : 'center'}}
        onPress={createPostHandle}
        >
          <Text style={{fontSize : 16 , fontWeight : 'bold' , color : '#fff'}}>Create Post</Text>
        </TouchableOpacity>
        <Toast />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginLeft: 70,
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: 260,
    marginTop : 25
  },
})

export default Post