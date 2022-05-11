import React from 'react';
import { ScrollView, Image, TouchableOpacity, View, Text } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";

const Stories = () => {

    const storyInfo = [
        {
            id: 1, 
            name:'Your Story',
            image: require('../../storage/images/Blank.png'),
        },
        {
            id: 0, 
            name:'Nat',
            image: require('../../storage/images/Nat.jpg'),
        },
        {
            id: 0, 
            name:'Roger',
            image: require('../../storage/images/Roger.jpg'),
        },
        {
            id: 0, 
            name:'Ons',
            image: require('../../storage/images/Ons.jpg'),
        },
        {
            id: 0, 
            name:'Novak',
            image: require('../../storage/images/Novak.jpg'),
        },
        {
            id: 0, 
            name:'Malek',
            image: require('../../storage/images/Malek-Jaziri.jpg'),
        },
        {
            id: 0, 
            name:'User *',
            image: require('../../storage/images/Blank.png'),
        },
        {
            id: 0, 
            name:'User *',
            image: require('../../storage/images/Blank.png'),
        },
        {
            id: 0, 
            name:'User *',
            image: require('../../storage/images/Blank.png'),
        },
        {
            id: 0, 
            name:'User *',
            image: require('../../storage/images/Blank.png'),
        },
        {
            id: 0, 
            name:'User *',
            image: require('../../storage/images/Blank.png'),
        },
        {
            id: 0, 
            name:'User *',
            image: require('../../storage/images/Blank.png'),
        },
        {
            id: 0, 
            name:'User *',
            image: require('../../storage/images/Blank.png'),
        },
        {
            id: 0, 
            name:'User *',
            image: require('../../storage/images/Blank.png'),
        },
        {
            id: 0, 
            name:'User *',
            image: require('../../storage/images/Blank.png'),
        },
        {
            id: 0, 
            name:'User *',
            image: require('../../storage/images/Blank.png'),
        },
        {
            id: 0, 
            name:'User *',
            image: require('../../storage/images/Blank.png'),
        },
        {
            id: 0, 
            name:'User *',
            image: require('../../storage/images/Blank.png'),
        },
        {
            id: 0, 
            name:'User *',
            image: require('../../storage/images/Blank.png'),
        },
        {
            id: 0, 
            name:'User *',
            image: require('../../storage/images/Blank.png'),
        },
        {
            id: 0, 
            name:'User *',
            image: require('../../storage/images/Blank.png'),
        },{
            id: 0, 
            name:'User *',
            image: require('../../storage/images/Blank.png'),
        },

    ];

  return ( 
    <ScrollView horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                style={{paddingVertical: 20}}>
                {storyInfo.map((data, index) => {
                        return (
                            <TouchableOpacity key={index}>
                                <View 
                                style={{flexDirection: 'column', 
                                        paddingHorizontal: 8, 
                                        position: 'relative',}}>
                                    {data.id == 1 ?   
                                        (
                                            <View 
                                                style={{position: 'absolute', 
                                                        bottom: 15, 
                                                        right: 10, 
                                                        index: 1,}}>
                                                <Entypo 
                                                    name="circle-with-plus" 
                                                    style={{fontSize: 20, 
                                                            color:"#405de6", 
                                                            backgroundColor:"#2F2F2F", 
                                                            borderRadius: 100
                                                        }}/>
                                            </View>
                                        ) : null}
                                        <View 
                                        style={{width: 68, 
                                                height: 68, 
                                                backgroundColor: 'yellow', 
                                                borderWidth: 1.8, 
                                                borderRadius: 100,
                                                borderColor:'#2F2F2F',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                }}>
                                            <Image source={data.image} 
                                            style={{resizeMode: 'cover', 
                                                    width:'92%', height: '92%', 
                                                    borderRadius: 100, 
                                                    backgroundColor: 'black'}}/>
                                        </View>
                                        <Text style={{textAlign:'center',color: 'white', fontSize: 10, opacity: data.id == 0 ? 1 : 0.5, 
                                        }}>
                                            {data.name}
                                        </Text>
                                </View>
                            </TouchableOpacity>
                        );
                })} 

                </ScrollView>
            )
            }

export default Stories;