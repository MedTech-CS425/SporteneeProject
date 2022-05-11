import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import EventComponent from '../screenComponents/EventComponent'

const Reels = () => {

  const windowWidth = Dimensions.get('screen').width
  const windowHeight = Dimensions.get('screen').height


  return (
    <View style={{
      width: windowWidth, 
      height: windowHeight, 
      backgroundColor: '#2F2F2F', 
      position: 'relative', 
      backgroundColor: '#2F2F2F'
    }}>
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1,
        padding: 10,
      }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white',}}>
          Crowdfunding
        </Text>
        <Feather name="camera" style={{fontSize: 25, color: 'white'}}/>
      </View>
      <EventComponent/>
    </View>
  )
}

export default Reels