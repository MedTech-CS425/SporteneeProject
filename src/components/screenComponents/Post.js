import { View, Text, Image } from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-web';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons'


const Post = () => {


    const postInfo = [
        {
          postTitle: 'Roger federer',
          postDescribtion: 'So excited for this new tournament',
          postPersonImage: require('../../storage/images/Roger.jpg'),
          postImage: require('../../storage/images/rogerpic.jpg'),
          likes: 768,
          isLiked: false,
        },
        {
          postTitle: 'Novak Djokovic',
          postDescribtion: 'Lets do it',
          postPersonImage: require('../../storage/images/Novak.jpg'),
          postImage: require('../../storage/images/chelsea.jpg'),
          likes: 768,
          isLiked: false,
        },
        {
          postTitle: 'Ons Jabeur',
          postDescribtion: 'So excited for this new tournament help me',
          postPersonImage: require('../../storage/images/Ons.jpg'),
          postImage: require('../../storage/images/Nat.jpg'),
          likes: 768,
          isLiked: false,
        },
        {
          postTitle: 'User',
          postDescribtion: 'Hello',
          postPersonImage: require('../../storage/images/Blank.png'),
          postImage: require('../../storage/images/Club-Africain.jpg'),
          likes: 768,
          isLiked: false,
        }
    ]

  return (
    <View>
      {
        postInfo.map((data, index) => {
          const [ like , setLike ] = useState(data.isLiked)
          return(
            <View key={index} style={{
                  padding: 10,
                  borderBottomColor: 'gray',
                  borderBottomWidth: 0.1,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 15,
                }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={data.postPersonImage} style={{width: 40,  height: 40, borderRadius: 100}}/>
                    <View style={{ paddingLeft: 5}}>
                        <Text style={{ fontSize:15, fontWeight: 'bold', color: 'white'}}>
                          {data.postTitle}
                        </Text>
                    </View>
                  </View>
                  <Feather name='more-vertical' style={{fontSize: 20, color: 'white'}}/>
                </View>
                <View style={{
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                  
                }}>
                  <Image source={data.postImage} style={{width: '100%', height: 400}}/>
                </View>
                <View style={{
                  flexDirection: 'row',
                  justifyContent:'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 12,
                  paddingVertical: 15,
                }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => setLike(!like)}>
                       <AntDesign name={like ? "heart" : "hearto"} style={{paddingRight: 10, fontSize: 20, color: like ? "yellow" : "white"}}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Ionic name='ios-chatbubble-outline' style={{fontSize: 20, paddingLeft: 10, color: 'white'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Feather name='share-2' style={{fontSize: 20, paddingLeft: 10, color: 'white'}}/>
                    </TouchableOpacity>
                  </View>
                  <Feather name='gift' style={{fontSize: 20, paddingLeft: 10, color: 'white'}}/>
                </View>
                <View style={{paddingHorizontal: 15}}>
                  <Text style={{color: 'white'}}>
                    { like ? "you and" : ''} {' '}
                    {like ? data.likes + 1 : data.likes}
                  </Text>
                  <Text style={{fontWeight: '700', fontSize: 17, paddingVertical: 2, color: 'white'}}>
                     {data.postDescribtion}
                  </Text>
                  <Text style={{opacity: 0.4, paddingVertical: 2, color: 'white', alignItems: 'center'}}>
                    View all comments
                  </Text>
                </View>
            </View>
          )
        })
      }
    </View>
  )
}

export default Post