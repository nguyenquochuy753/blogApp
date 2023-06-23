import { View, Text , Image , TouchableOpacity } from 'react-native'
import react, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from "axios"

const CardPost = (props) => {
  const navigation = useNavigation()
  const imgURL = 'http://172.17.16.114:8000/'+props.img //Đổi địa chỉ ip phải sửa lại
  console.log(imgURL)
  const MAX_TITLE_LENGTH = 30;
  const MAX_DESCRIPTION_LENGTH = 100;

  const [likes, setLikes] = useState(props.like)

  const truncatedTitle = props.title.length > MAX_TITLE_LENGTH
    ? props.title.slice(0, MAX_TITLE_LENGTH) + '...'
    : props.title;

  const truncatedDescription = props.des.length > MAX_DESCRIPTION_LENGTH
    ? props.des.slice(0, MAX_DESCRIPTION_LENGTH) + '...'
    : props.des;

  const likeHandle = ()=>{
    axios.put('http://172.17.16.114:8000/v1/post/likePost',{
      _id : props.id
    }).then(()=>{console.log('Like thành công'); setLikes(likes + 1)})
    .catch((err)=>console.log(err))
  }

  const deletePost = () => {
    axios.delete('http://172.17.16.114:8000/v1/post/deletePost', { data: {postID: props.id}})
      .then(()=>{console.log('Xóa thành công ' + props.id)})
      .catch(err=>console.log(err))
  }

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
            <TouchableOpacity onPress={likeHandle}>
              <Image source={require('../assets/thumb-up.png')} style={{ height: 35, width: 36, resizeMode: 'cover' }}/>
            </TouchableOpacity>
            <Text style={{ fontSize: 24, color: '#164DB1' }}>{likes}</Text>
          </View>
          <TouchableOpacity 
          style={{ height: 35, width: 80, backgroundColor: '#164DB1' , borderRadius :10 , justifyContent : 'center' , alignItems : 'center'}}
            onPress={() => navigation.navigate('Detail',{postID : props.id , title : props.title , des : props.des , imgURLs : imgURL , owner : props.owner , id : props.idLogin , username : props.username , email : props.email})}
            >
            <Text style={{color : '#fff' , fontSize : 16 , fontWeight : 'bold'}}>Detail</Text>
          </TouchableOpacity>
          {props.owner._id === props.idLogin ? (<TouchableOpacity
            style={{ height: 35, width: 80, backgroundColor: '#E23F32', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
            onPress={deletePost}
          >
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Delete</Text>
          </TouchableOpacity>) : ""}
        </View>
      </View>
    </View>
  )
}

export default CardPost