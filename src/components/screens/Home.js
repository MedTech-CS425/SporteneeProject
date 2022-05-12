import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { ScrollView } from 'react-native-web';
import Stories from '../screenComponents/Stories';
import Post from "../screenComponents/Post";
import SearchBox from "../screenComponents/SearchBox"


const Home = () => {
  return (
    <View style={{backgroundColor: '#2F2F2F', height:'100%' }}>
        <StatusBar backgroundColor="#2F2F2F" barStyle="dark-content" animated={true}/>
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 15,
            alignItemszz: 'center'
        }}>
                <FontAwesome name='plus-square-o' style={{fontSize: 24, color: 'white'}}/>
                <Text style={{fontFamily: "Quicksand-Bold", fontSize: 25, fontWeight: '500', color: 'white'}}>
                    Sportenee
                </Text>
                <Feather name='navigation' style={{fontSize: 24, color: 'white'}}/>
        </View>
        <ScrollView>
        <SearchBox/>
            {/* <Stories/> */}
            <Post/>
        </ScrollView>
    </View>
  )
}

export default Home;    
