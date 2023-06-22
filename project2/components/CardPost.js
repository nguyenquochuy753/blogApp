import { View, Text , Image , TouchableOpacity } from 'react-native'
import react from 'react'
import { useNavigation } from '@react-navigation/native'

const CardPost = (props) => {
  const navigation = useNavigation()
  const imgURL = 'http://172.17.16.114:8000/'+props.img //Đổi địa chỉ ip phải sửa lại
  console.log(imgURL)
  const MAX_TITLE_LENGTH = 30;
  const MAX_DESCRIPTION_LENGTH = 100;

  const truncatedTitle = props.title.length > MAX_TITLE_LENGTH
    ? props.title.slice(0, MAX_TITLE_LENGTH) + '...'
    : props.title;

  const truncatedDescription = props.des.length > MAX_DESCRIPTION_LENGTH
    ? props.des.slice(0, MAX_DESCRIPTION_LENGTH) + '...'
    : props.des;
  return (
    <View 
          style={{
              width: '90%', height: 400, borderColor: '#ccc', borderWidth: 1, marginLeft: '5%', marginTop: 25 ,borderRadius: 10,
              padding: 16,
              shadowColor: 'black',
              shadowOpacity: 0.3,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 6,
              elevation: 2,
              backgroundColor : '#fff'
    }}>
      <View style={{flexDirection : 'row' , alignItems : 'center' , marginBottom : 15}}>
        <Image source={require('../assets/insta.png')} style={{height : 36 , width : 36 , resizeMode : 'contain' , borderRadius : 50}}/>
        <Text style={{fontSize : 16 , fontWeight : 'bold' , marginLeft : 10}}>{props.owner.userName}</Text>
      </View>
      <Image source={{uri : imgURL}} style={{width : '98%' , height : 150 , resizeMode : 'cover' , marginBottom : 15}}/>
      <View>
        <Text style={{fontSize : 20 , fontWeight :'bold'}}>{truncatedTitle}</Text>
        <Text style={{ fontSize: 18 , color : 'gray'}}>{truncatedDescription}</Text>
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 15 , justifyContent : 'space-between'}}> 
          <View style={{ flexDirection: 'row', alignItems: 'center', width: 70, justifyContent: 'space-between' }}>
            <TouchableOpacity>
              <Image source={require('../assets/thumb-up.png')} style={{ height: 35, width: 36, resizeMode: 'cover' }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 24, color: '#164DB1' }}>{props.like}</Text>
          </View>
          <TouchableOpacity 
          style={{ height: 35, width: 80, backgroundColor: '#164DB1' , borderRadius :10 , justifyContent : 'center' , alignItems : 'center'}}
            onPress={() => navigation.navigate('Detail',{title : props.title , des : props.des , imgURLs : imgURL , owner : props.owner})}
            >
            <Text style={{color : '#fff' , fontSize : 16 , fontWeight : 'bold'}}>Detail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CardPost