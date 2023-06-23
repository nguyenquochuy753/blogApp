import { View, Text , StyleSheet , Image , TextInput , TouchableOpacity } from 'react-native'
import React , {useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios'
import Toast from "react-native-toast-message"

const Login = ({navigation}) => {
  const [username , setUsername] = useState('')
  const [pass , setPass] = useState('')
  const loginHandle = ()=>{
    if(username!='' && pass!=''){
      axios
        .post('http://172.17.16.114:8000/v1/auth/login', {
          userName: username,
          password: pass
        })
        .then((res) => {
          console.log(res.data)
          navigation.navigate('Home', { username: res.data.userName, email: res.data.email, id: res.data._id })
        })
        .catch((err) => {
          console.log(err)
          Toast.show({
            type: "error",
            text1: "Error",
            text2: "Wrong UserName or PassWord"
          })
        })
    }
    else{
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Wrong UserName or PassWord"
      })
    }
    
  }
  return (
    <View style = {styles.container}>
      <View>
            <Image source={require('../assets/logotravel.png')} style={styles.Logo} />
      </View>
      <View>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.input}>
         <Icon name='person' size={20} color="#666" style={{marginRight : 5 , marginTop : 3}}/>
         <TextInput placeholder='Username' style={{color : '#ccc'}} value={username} onChangeText={(val)=>setUsername(val)}/>
      </View>
      <View style={styles.input}>
         <Icon name='lock' size={20} color="#666" style={{ marginRight: 5, marginTop: 3 }} />
         <TextInput placeholder='Password' style={{ color: '#ccc' }} secureTextEntry={true} value={pass} onChangeText={(val) => setPass(val)} />
      </View>
      <Text 
      style={{marginLeft : 260 , marginBottom : 25 , fontSize : 16 , fontWeight : '500' , fontStyle : 'italic' , color : '#164DB1'}}
      onPress={()=>navigation.navigate('Register')}
      >Đăng ký</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={loginHandle}
      >
        <Text style={{fontSize : 16 , fontWeight : '500' , color : '#fff'}}>Login</Text>
      </TouchableOpacity>
      <Toast />
      <View style={{marginLeft : 45}}>
        <Text style = {{marginLeft : 110 , fontWeight : '500' , marginBottom : 25}}>Or Login with...</Text>
        <View style={{flexDirection : 'row'}}>
            <TouchableOpacity style={{width : 60 , height : 60 , borderColor : '#ccc' , borderWidth : 1 , marginLeft : 33 , alignItems : 'center' , justifyContent : 'center'}}>
                <Image source={require('../assets/ggg.png')} 
                          style={{ height :40 , width: 40 , resizeMode: 'contain'}}
                >
                </Image>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 60, height: 60, borderColor: '#ccc', borderWidth: 1, marginLeft: 33, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/insta.png')}
                          style={{ height: 40, width: 40, resizeMode: 'contain' }}
                >
                </Image>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 60, height: 60, borderColor: '#ccc', borderWidth: 1, marginLeft: 33, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/gmail.png')}
                          style={{ height: 40, width: 40, resizeMode: 'contain' }}
                >
                </Image>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : { 
        height : '100%' ,
        backgroundColor : '#fff'
    } ,
    Logo : {
        width: 300, 
        height: 240, 
        resizeMode: 'contain',
        marginLeft: 45,
    } ,
    title : {
        fontSize : 40 ,
        fontWeight : 'bold',
        marginLeft : 145 ,
        marginBottom : 40,
        color: '#164DB1'
    } ,
    input : {
        marginLeft : 70,
        flexDirection : 'row' ,
        borderBottomColor : '#ccc',
        borderBottomWidth : 1 ,
        width : 260 ,
        marginBottom : 25 ,
    } ,
    button : {
        width : 260,
        height : 40,
        backgroundColor:'#164DB1',
        justifyContent:'center',
        alignItems : 'center' ,
        borderRadius : 5 ,
        marginLeft : 70,
        marginBottom : 25
    }
})

export default Login