import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/Login';
import Register from './pages/Register';
import MainPage from './pages/MainPage';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import DetailPost from './pages/DetailPost';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={MainPage} options={{ headerShown: false }}/>
        <Stack.Screen name='Detail' component={DetailPost} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


