import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ProfileBody, ProfileButtons} from '../screenComponents/ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabView from '../screenComponents/BottomTabView';

const Profile = () => {
  let circuls = [];
  let numberofcircels = 10;

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 1,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'white',
              color: 'white'
            }}>
            <Entypo name="plus" style={{fontSize: 40, color: 'white'}} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderColor: 'white',
              backgroundColor: 'white',
              opacity: 0.1,
              marginHorizontal: 5,
            }}></View>
        )}
      </View>,
    );
  }

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#2F2F2F'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name="Dali Saddoud"
          accountName="Dali Saddoud"
          profileImage={require('../../storage/images/Blank.png')}
          followers="356"
          following="35"
          post="420"
        />
        <ProfileButtons
          id={0}
          name="Dali Saddoud"
          accountName="Dali Saddoud"
          profileImage={require('../../storage/images/Blank.png')}
        />
      </View>
      <View>
        <Text
          style={{
            padding: 10,
            letterSpacing: 1,
            fontSize: 14,
            color: 'white',
          }}>
          Highlights
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          {circuls}
        </ScrollView>
      </View>
      <BottomTabView />
    </View>
  );
};

export default Profile;