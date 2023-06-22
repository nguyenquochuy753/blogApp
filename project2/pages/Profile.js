import { View, Text , Image , TouchableOpacity} from 'react-native'
import { useNavigation , useRoute } from '@react-navigation/native'
import React from 'react'

const Profile = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const {username , email} = route.params
  console.log(username+" "+email)
  return (
    <View style={{backgroundColor : '#fff' , height : '100%' , paddingTop : 45}}>
      <View style={{width : '100%' , alignItems : 'center'}}>
        <Image 
        source={require('../assets/insta.png')} 
          style={{ height: 120, width: 120, resizeMode: 'cover', borderWidth: 3, borderColor: '#4dff4d' , borderRadius : 50}} />
        <Text style={{
          marginTop : 20,
          fontSize : 28 , 
          fontWeight : 'bold'
        }}>{username}</Text>
        <Text style={{
          marginTop : 15 ,
          fontSize : 16 ,
          color : 'gray'
        }}>A Web Developer , love cats</Text>
        <View style={{flexDirection : 'row' , marginTop : 15 , width : '45%' , justifyContent : 'space-between'}}>
          <View>
            <Text style={{fontSize : 20}}>Posts</Text>
            <Text style={{ fontSize: 20}}>100</Text>
          </View>
          <Image source={require('../assets/line.png')} style={{height : 60 , width : 10 , resizeMode : 'contain'}}/>
          <View>
            <Text style={{ fontSize: 20}}>Visitors</Text>
            <Text style={{ fontSize: 20 }}>30000</Text>
          </View>
        </View>
        <View style ={{width : '80%' }}>
          <View style={{ marginTop: 15, flexDirection: 'row' , alignItems : 'center' }}>
            <Image source={require('../assets/phonecall.png')} style={{ height: 36, width: 36, resizeMode: 'contain' }} />
            <Text style={{ fontSize: 16 , marginLeft : 20}}>0966338940</Text>
          </View>
          <View style={{ marginTop: 15, flexDirection: 'row' ,alignItems : 'center'}}>
            <Image source={require('../assets/email.png')} style={{ height: 36, width: 36, resizeMode: 'contain' }} />
            <Text style={{ fontSize: 16 , marginLeft : 20}}>{email}</Text>
          </View>
          
        </View>
        
        <TouchableOpacity style={{
          width : 140 ,
          height : 40 ,
          backgroundColor: '#cc3300' ,
          borderRadius : 10 ,
          justifyContent : 'center' ,
          alignItems : 'center' ,
          marginTop : 25
        }}
        onPress={()=>{
          navigation.navigate('Login')
        }}
        >
          <Text style={{
            color : '#fff' ,
            fontSize : 16 ,
            fontWeight :'bold'
          }}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Profile