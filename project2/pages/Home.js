import { View, Text ,ScrollView } from 'react-native'
import React , {useEffect , useState} from 'react'
import CardPost from '../components/CardPost'
import Axios from 'axios'
import Loading from '../components/Loading';
import { useRoute , useNavigation } from "@react-navigation/native"


const Home = ({route}) => {
  // const navigation = useNavigation()
  const [postList , setPostList] = useState([])
  const [loading , setLoading] = useState(false)
  // const route = useRoute()
  const { id, username , email } = route.params
  // let id = "648442affbff0fcee42278d8"
  
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://172.17.16.114:8000/v1/post/readPost');
        const updatedPostList = response.data;
        setPostList(updatedPostList);
        setLoading(true)
        console.log(updatedPostList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <View style={{ height: '100%', backgroundColor: '#fff' , paddingTop :45 }}>
      <View>
        <Text style={{ color: '#164DB1' , fontSize : 28 , fontWeight : 'bold' , marginLeft : 20 }}>Hi, {username}</Text>
      </View>
      {loading?(<ScrollView showsVerticalScrollIndicator={false}>
        {
          postList.map((post,key)=>{
            return (
              <CardPost 
              key={key} 
              id={post._id} 
              title={post.title} 
              des={post.des} 
              like={post.like} 
              owner={post.owner} 
              img={post.imgURLs} 
              idLogin = {id} 
              username = {username}
              email = {email}
              />
            )
          })
        }
      </ScrollView>) : <Loading/>}
    </View>
  )
}

export default Home