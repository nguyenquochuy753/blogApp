import { View, Text } from 'react-native'
import React from 'react'
import {useRoute,useNavigation} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './Home'
import Post from './Post'
import Profile from './Profile'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()


const MainPage = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const {username,email,id} = route.params
  return (
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({route})=>({
            tabBarStyle : {
                height : 70 ,
                paddingBottom : 10 ,
                paddingTop : 10
            },
            tabBarIcon:({focused , color , size}) => {
                let iconName
                let rn = route.name
                if(rn == 'Post'){
                    iconName = focused ? 'newspaper' : 'newspaper-outline'
                }
                else if(rn == 'Add'){
                    iconName = focused ? 'add-circle' : 'add-circle-outline'
                }
                else if(rn == 'Profile'){
                    iconName = focused ? 'person' : 'person-outline'
                }

                return <Icon name={iconName} size={size} color={color}/>
            }
        })}
        >
            <Tab.Screen name='Post' component={Home} options={{headerShown : false}}/>
            <Tab.Screen name='Add' component={Post} options={{ headerShown: false }} listeners={{tabPress : (e)=>{e.preventDefault();navigation.navigate('Add',{id : id})}}}/>
            <Tab.Screen name='Profile' component={Profile} options={{ headerShown: false}} listeners={{tabPress:(e)=>{e.preventDefault();navigation.navigate('Profile',{username : username , email : email})}}} />
        </Tab.Navigator>
  )
}

export default MainPage