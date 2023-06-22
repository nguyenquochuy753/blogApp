import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React , {useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Toast from 'react-native-toast-message'
import axios from 'axios'

const Register = ({navigation}) => {
    const [username , setUsername] = useState('')
    const [email , setEmail] = useState('')
    const [pass , setPass] = useState('')
    const [confirmPass , setConfirmPass] = useState('')
    const showToast = ()=>{
        Toast.show({
            type : "success",
            text1 : "Success",
            text2 : "Successfully Registered!",
            autoHide : true,
            visibilityTime : 2500,
            position : "top",
        })
    }
    const registerHandle = ()=>{
        if(username!='' && email!='' && pass!='' && confirmPass!='')
        {
            axios.post('http://172.17.16.114:8000/v1/auth/register',{
                userName : username,
                email : email,
                password : pass
            }).catch(err=>{
                console.log(err)
            })
            setUsername('')
            setEmail('')
            setPass('')
            setConfirmPass('')
            showToast()
        }
    }
    return (
        <View style={{backgroundColor : '#fff'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Image source={require('../assets/back.png')}
                    style={{ height: 36, width: 36, resizeMode: 'contain', marginLeft: 20, marginTop: 40 }} />
            </TouchableOpacity>
            
            <View style={styles.container}>
                <View>
                    <Image source={require('../assets/logotravel.png')} style={styles.Logo} />
                </View>
                <View>
                    <Text style={styles.title}>Register</Text>
                </View>
                <View style={styles.input}>
                    <Icon name='person' size={20} color="#666" style={{ marginRight: 5, marginTop: 3 }} />
                    <TextInput placeholder='Username' style={{ color: '#ccc' }} value={username}
                        onChangeText={(val)=>setUsername(val)}
                    />
                </View>
                <View style={styles.input}>
                    <Icon name='email' size={20} color="#666" style={{ marginRight: 5, marginTop: 3 }} />
                    <TextInput placeholder='Email' style={{ color: '#ccc' }} value={email}
                        onChangeText={(val) => setEmail(val)}
                    />
                </View>
                <View style={styles.input}>
                    <Icon name='lock' size={20} color="#666" style={{ marginRight: 5, marginTop: 3 }} />
                    <TextInput placeholder='Password' style={{ color: '#ccc' }} secureTextEntry={true} value={pass}
                        onChangeText={(val) => setPass(val)}
                    />
                </View>
                <View style={styles.input}>
                    <Icon name='check-circle' size={20} color="#666" style={{ marginRight: 5, marginTop: 3 }} />
                    <TextInput placeholder='Confirm Password' style={{ color: '#ccc' }} secureTextEntry={true} value={confirmPass}
                        onChangeText={(val) => setConfirmPass(val)}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={registerHandle}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff'  }}>Register</Text>
                </TouchableOpacity>
                <Toast />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height : '100%' ,
        backgroundColor : '#fff',
    },
    Logo: {
        width: 300,
        height: 120,
        resizeMode: 'contain',
        marginLeft : 45
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 130,
        marginBottom: 40,
        color: '#164DB1'
    },
    input: {
        marginLeft: 70,
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: 260,
        marginBottom: 25,
    },
    button: {
        width: 260,
        height: 40,
        backgroundColor: '#164DB1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 70,
        marginBottom: 25
    }
})

export default Register